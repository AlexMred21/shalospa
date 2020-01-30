import React from 'react';
import ArtApiService from '../../services/art-api-service';
// import ArtPage from '../art-page/art-page';

const artArray = [
    {
        objectID: 300,
        primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/69178.jpg',
        title: 'Balcony',
        objectDate: '1800-1830',
        artistDisplayName: '',
    },
    {
        objectID: 4000,
        primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/112937.jpg',
        title: 'Fragment',
        objectDate: '1700-1800',
        artistDisplayName: '',
    },
    {
        objectID: 436535,
        primaryImage: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
        title: 'Wheat Field with Cypresses',
        objectDate: '1889',
        artistDisplayName: 'Vincent van Gogh',
    },
    {
        objectID: 438012,
        primaryImage: 'https://images.metmuseum.org/CRDImages/ep/original/DT1877.jpg',
        title: 'Bouquet of Chrysanthemums',
        objectDate: '1881',
        artistDisplayName: 'Auguste Renoir',
    },
]

const commentArray = [
    {
        objectID: 436535,
        user: 'Artlover3000',
        comment: 'This is my favorite!!!',
    },
    {
        objectID: 436535,
        user: 'vangogogh',
        comment: 'Starry Night, spectacular!'
    },
    {
        objectID: 438012,
        user: 'masterpeace',
        comment: 'Oh la laaaa',
    },
]

export default class Dashboard extends React.Component {
    state = {
        art: [],
        comments: [],
        object_id: '',
        picture: '',
        title: '',
        artist: '',
        year: '',
        error: null,
    }

    getRandomArtId() {
        const randomId = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
        console.log('RANDOM ID:', randomId)
        return randomId;
    }

    addToGallery = (e) => {
        e.preventDefault();
        const { objectId } = e.target
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { objectId, addComment } = e.target;
        // console.log(this.state.object_id)
        // console.log(addComment.value)
        const newComment = {
            art_id: this.state.object_id,
            comment: addComment.value,
        };
        console.log(newComment)
        this.setState({ error: null });

        ArtApiService.postComment(newComment.art_id, newComment.comment)
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
        let i = 300; // TODO ---> will be the objectID from function getRandomArtId()
        let j = 436535;
        let h = 438012;

        Promise.all([ArtApiService.getArtImage(j), ArtApiService.getComments(j)])
            .then(([res1, res2]) => {
                console.log(res1, res2)
                let allComments = res2.map(c =>
                    <div className='art-comments' key={c.id}>
                        <p>User: {c.user_id}</p>
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
                // console.log(commentArray)
                return Promise.all([res1, commentArray])
            })
            .then(([res1, allComments]) => {
                this.setState({
                    object_id: res1.object_id,
                    picture: res1.primary_image,
                    title: res1.art_title,
                    artist: res1.art_artist,
                    year: res1.art_date,
                    comments: allComments,
                })
            })
                // console.log(this.state)
            .catch(error => this.setState({error}))
        
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
                    // name={this.state.res1.object_id}
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


        // return (
        //     <div className='dashboard'>
        //         <h2>Today's feature:</h2>
        //         <ArtPage 
        //             picture={this.state.picture}
        //             title={this.state.title}
        //             artist={this.state.artist}
        //             year={this.state.year}
        //         />
        //     </div>
        // )
    }
}