import React from 'react';
import ArtApiService from '../../services/art-api-service';
import TokenService from '../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Dashboard extends React.Component {

    state = {
        art: [],
        comments: [],
        object_id: '',
        picture: '',
        title: '',
        artist: '',
        year: '',
        username: '',
        alert: false,
        error: null,
    }

    // getRandomArtId() {
    //     const randomId = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
    //     console.log('RANDOM ID:', randomId)
    //     return randomId;
    // }

    addToGallery = (e) => {
        e.preventDefault();

        console.log('addToGallery object_id =', this.state.object_id);
        console.log('addToGallery user_id =', TokenService.getUserId());

        const newGalleryItem = {
            art_id: this.state.object_id,
            user_id: parseInt(TokenService.getUserId())
        }

        ArtApiService.postToGallery(newGalleryItem.art_id, newGalleryItem.user_id)
            .then(item => {
                console.log(item)
                // alert('This item was saved in your gallery.')
                // this.props.history.push(window.location.href='/gallery', item);
            })
            .catch(error => {
                this.setState({ error: error });
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            // objectId, 
            addComment,
            // username 
        } = e.target;

        const newComment = {
            user_name: this.state.username,
            art_id: this.state.object_id,
            comment: addComment.value,
        };
        // console.log(newComment)
        this.setState({ error: null });

        ArtApiService.postComment(newComment.user_name, newComment.art_id, newComment.comment)
            .then(data => {
                addComment.value = '';
                this.setState({ data });
                this.props.history.push(window.location.reload(), data);
            })
            .catch(error => {
                this.setState({ error: error });
            });
    };

    componentDidMount() {
        let userId = TokenService.getUserId()
        let userIdNum = parseInt(userId)
        // console.log(userIdNum)

        Promise.all([ArtApiService.getDailyArtImage(), ArtApiService.getUsername(userIdNum)
        ])
            .then(([res1, res2, res3]) => {
                // console.log(res2)
                this.setState({
                    username: res2,
                    object_id: res1.object_id,
                    picture: res1.primary_image,
                    title: res1.art_title,
                    artist: res1.art_artist,
                    year: res1.art_date,
                })
                ArtApiService.getComments(this.state.object_id)
                    .then(res2 => {
                        let allComments = res2.map(c =>
                            <div className='art-comments' key={c.id}>
                                <h6>User: </h6><p>{c.user_name}</p>
                                <br />
                                <h6>Comment: </h6><p>{c.comment}</p>
                            </div>
                        )
                        let commentArray = (
                            (allComments.length === 0)
                                ? <div className='art-comments' key='0'>
                                    <p>Be the first to add a comment.</p>
                                </div>
                                : allComments
                        )
                        return Promise.all([commentArray])
                            .then((allComments) => {
                                this.setState({
                                    comments: allComments,
                                })
                                // console.log(this.state)
                            })
                            .catch(error => this.setState({ error }))
                    })
            })
    }

    render() {
        // this.getRandomArtId()
        // console.log(this.state)
        let mailtoUrl = `mailto:?Subject=Check%20Out%20This%20Artwork%20from%20MuseMe!&body=I think you'd really enjoy this artwork I found on MuseMe: ${this.state.picture}`

        return (
            <div className='art-page'>
                <img className='random-feature' src={this.state.picture} alt='Random piece of art.' />

                <div className='art-info'>
                    <div className='art-info-btns'>
                        <button
                            className='add-to-gallery-btn'
                            onClick={this.addToGallery}>
                            <p className="art-page-save">
                                <FontAwesomeIcon icon="heart" id='art-page-save-icon'/>
                                <span className='tooltip-text'>Add to gallery</span>
                            </p>
                        </button>
                        <button
                            className='add-to-gallery-btn'
                            >
                            <p className="art-page-save">
                                <a href={mailtoUrl}><FontAwesomeIcon icon="share" id='art-page-save-icon'/></a>
                                <span className='tooltip-text'>Share with friends</span>
                            </p>
                        </button>
                        </div>
                        <h3 className="art-title">{this.state.title}</h3>
                        <h3 className="art-page-h3">{this.state.artist}, {this.state.year}</h3>
                    
                </div>

                <div className='comments-container'>
                    <h3 className="art-page-h3">Comments</h3>
                    {/* <div className='art-comments-container'> */}
                    {this.state.comments}
                    {/* </div> */}

                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <div className='add-comment-entry'>
                            <label id='add-comment-label'>Add a comment</label>
                            <br />
                            <input className='add-comment' type='text' name='addComment' id='add-comment' />

                            <button id='add-comment-btn' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}