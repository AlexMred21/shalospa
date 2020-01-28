import React from 'react';
import { Link } from 'react-router-dom';
import ArtApiService from '../../services/art-api-service';
// import ArtPage from '../art-page/art-page';

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
                        <div key={a.id}>
                            <Link to={`/art/${a.object_id}`} /*id={a.object_id}*/>
                            {/* <Link key={a.id} to='/art'> */}
                                <img key={a.id} className='gallery-image' src={a.primary_image} alt='Gallery tile' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}