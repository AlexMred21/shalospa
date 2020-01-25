import React from 'react';
import ArtApiService from '../../services/art-api-service';

export default class Gallery extends React.Component {
    state = {
        art: []
    }

    componentDidMount() {
        ArtApiService.getArtGallery()
            .then(resJson => 
                // console.log(resJson)
                this.setState({
                    art: resJson
                })
            )
    }

    render() {
        console.log(this.state.art)

        return (
            <div className='gallery'>
                <h2>My Gallery</h2>
                <div className='gallery-container'>
                    {this.state.art.map(a => (
                        // <div key={a.id}>
                        <img key={a.id} className='gallery-image' src={a.primary_image} alt='Gallery tile' />
                        // </div>
                    ))}
                    {/* <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' /> */}
                </div>
            </div>
        )
    }
}