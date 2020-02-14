import React from 'react';
import ArtApiService from '../../services/art-api-service';
import TokenService from '../../services/token-service';

export default class ArtPage extends React.Component {
    state = {
        art: [],
        comments: [],
        picture: '',
        title: '',
        artist: '',
        year: '',
        user_name: '',
        error: null,
    }



    handleSubmit = (e) => {
        e.preventDefault();

        // if (this.state.errorCount > 0) return;
        // const objectId = this.props.match.params.objectId;
        // console.log(TokenService.getUserId());

        const { 
            // objectId, 
            addComment, 
            // username 
        } = e.target;
        console.log(this.props.match.params.objectId)
        console.log(addComment.value)
        const newComment = {
            user_name: this.state.username,
            art_id: this.props.match.params.objectId,
            comment: addComment.value,
        };
        console.log(newComment)
        this.setState({ error: null });

        ArtApiService.postComment(newComment.user_name, newComment.art_id, newComment.comment)
            .then(data => {
                console.log(data)
                addComment.value = '';
                this.setState({data});
                this.props.history.push(window.location.reload(), data);
            })
            .catch(error => {
                this.setState({ appError: error });
            });
    };

    componentDidMount() {
        const objectId = this.props.match.params.objectId;
        console.log(objectId);
        let i = objectId;

        let userId = TokenService.getUserId()
        let userIdNum = parseInt(userId)

        Promise.all([ArtApiService.getArtImage(i), ArtApiService.getComments(i), ArtApiService.getUsername(userIdNum)])
        .then(([res1, res2, res3]) => {
            this.setState({
                username: res3
            })
                // console.log(res1, res2)
                let allComments = res2.map(c =>
                    <div className='art-comments' key={c.id}>
                        <h6>User: </h6><p>{c.user_name}</p>
                                <br />
                                <h6>Comment: </h6><p>{c.comment}</p>
                    </div>
                )
                // console.log(allComments)
                return Promise.all([res1, allComments])
            })
            .then(([res1, allComments]) => {
                this.setState({
                    picture: res1.primary_image,
                    title: res1.art_title,
                    artist: res1.art_artist,
                    year: res1.art_date,
                    comments: allComments,
                })
            })
    }

    render() {

        return (
            <div className='art-page'>
                <img className='random-feature' src={this.state.picture} alt='Art of the day.' />

                <div className='art-info'>
                    <h3 className="art-title">{this.state.title}</h3>
                    <h3 className="art-page-h3">{this.state.artist}, {this.state.year}</h3>
                </div>

                <div className='comments-container'>
                    <h3 className="art-page-h3">Comments</h3>
                    {this.state.comments}

                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <div className='add-comment-entry'>
                            <label>Add a comment</label>
                            <br />
                            <input className='add-comment' type='text' name='addComment' id='add-comment' />

                            <button 
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}