import React from 'react';
import ArtApiService from '../../services/art-api-service';
import TokenService from '../../services/token-service';
// import ArtPage from '../art-page/art-page';

// const artArray = [
//     {
//         objectID: 300,
//         primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/69178.jpg',
//         title: 'Balcony',
//         objectDate: '1800-1830',
//         artistDisplayName: '',
//     },
//     {
//         objectID: 4000,
//         primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/112937.jpg',
//         title: 'Fragment',
//         objectDate: '1700-1800',
//         artistDisplayName: '',
//     },
//     {
//         objectID: 436535,
//         primaryImage: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
//         title: 'Wheat Field with Cypresses',
//         objectDate: '1889',
//         artistDisplayName: 'Vincent van Gogh',
//     },
//     {
//         objectID: 438012,
//         primaryImage: 'https://images.metmuseum.org/CRDImages/ep/original/DT1877.jpg',
//         title: 'Bouquet of Chrysanthemums',
//         objectDate: '1881',
//         artistDisplayName: 'Auguste Renoir',
//     },
// ]

// const commentArray = [
//     {
//         objectID: 436535,
//         user: 'Artlover3000',
//         comment: 'This is my favorite!!!',
//     },
//     {
//         objectID: 436535,
//         user: 'vangogogh',
//         comment: 'Starry Night, spectacular!'
//     },
//     {
//         objectID: 438012,
//         user: 'masterpeace',
//         comment: 'Oh la laaaa',
//     },
// ]

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

    getRandomArtId() {
        const randomId = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
        console.log('RANDOM ID:', randomId)
        return randomId;
    }

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

        const { objectId, addComment, username } = e.target;

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
        let i = 300; // TODO ---> will be the objectID from function getRandomArtId()
        let j = 436535;

        let userId = TokenService.getUserId()
        let userIdNum = parseInt(userId)
        // console.log(userIdNum)

        Promise.all([ArtApiService.getDailyArtImage(), ArtApiService.getUsername(userIdNum)
        ])
            .then(([res1, res2, res3]) => {
                console.log(res2)
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
                                <p>User: {c.user_name}</p>
                                <p>Comment: {c.comment}</p>
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
                                console.log(this.state)
                            })
                        .catch(error => this.setState({ error }))
                    })
            })
    }

    render() {
        this.getRandomArtId()
        console.log(this.state)
        return (
            <div className='art-page'>
                <img className='random-feature' src={this.state.picture} alt='Art of the day.' />

                <div className='art-info'>
                    <h3>{this.state.title}</h3>
                    <h3>{this.state.artist} {this.state.year}</h3>
                    <button
                        className='add-to-gallery-btn'
                        onClick={this.addToGallery}
                    ><h4>Save to my gallery</h4></button>
                </div>

                <div className='comments-container'>
                    <h3>Comments</h3>
                    {this.state.comments}

                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <div className='add-comment-entry'>
                            <label>Add a comment</label>
                            <br />
                            <input className='add-comment' type='text' name='addComment' id='add-comment' />

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