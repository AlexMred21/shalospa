import React from 'react';
import ArtApiService from '../../services/art-api-service';

export default class ArtPage extends React.Component {
    state = {
        art: [],
        comments: [],
        picture: '',
        title: '',
        artist: '',
        year: '',
        error: null,
    }


    componentDidMount() {
        const objectId = this.props.match.params.objectId;
        console.log(objectId);
        let i = objectId; // TODO ---> will be the objectID from function getRandomArtId()
        Promise.all([ArtApiService.getArtImage(i), ArtApiService.getComments(i)])
            .then(([res1, res2]) => {
                console.log(res1, res2)
                let allComments = res2.map(c =>
                    <div className='art-comments' key={c.id}>
                        <p>User: {c.user_id}</p>
                        <p>Comment: {c.comment}</p>
                    </div>
                )
                console.log(allComments)
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
        // ArtApiService.getArtImage(i)
        //     .then(resJson =>
        //         // console.log(resJson)
        //         // console.log(resJson.primary_image)
        //         this.setState({
        //             picture: resJson.primary_image,
        //             title: resJson.art_title,
        //             artist: resJson.art_artist,
        //             year: resJson.art_date,
        //         })
        //     )
        //     ArtApiService.getComments(i)
        //         .then(resJson =>
        //             this.setState({
        //                 comments: resJson
        //             })
        //         )
        // // console.log(this.state)
        // // .catch(error => this.setState({error}))

    }

    render() {
        // console.log(this.props.picture)
        // const picture = Object.values(picture => picture.value);
        // console.log(this.props);

        // const objectId = this.props.match.params.objectId;
        // console.log(objectId);

        // const title = Object.keys(title => title.value)
        // console.log(title)

        return (
            <div className='art-page'>
                <img className='random-feature' src={this.state.picture} alt='Art of the day.' />

                <div className='art-info'>
                    <h3>{this.state.title}</h3>
                    <h3>{this.state.artist} {this.state.year}</h3>
                    <button className='add-to-gallery-btn'><h4>Save to my gallery</h4></button>
                </div>

                <div className='comments-container'>
                    <h3>Comments</h3>
                    {this.state.comments}
                    {/* <div className='art-comments'>
                        <p>User: Artlover3000</p>
                        <p>Comment: This is my favorite!!!</p>

                    </div>
                    <div className='art-comments'>
                        <p>User: vangogogh</p>
                        <p>Comment: Starry Night, spectacular!</p>
                    </div> */}

                    <form className='comment-form'>
                        <div className='add-comment-entry'>
                            <label>Add a comment</label>
                            <br />
                            <input className='add-comment' type='text' name='add-comment' id='add-comment' />

                            <button type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}