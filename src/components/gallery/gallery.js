import React from 'react';
import { Link } from 'react-router-dom';
import ArtApiService from '../../services/art-api-service';
import TokenService from '../../services/token-service';

export default class Gallery extends React.Component {
    state = {
        art: []
    }

    componentDidMount() {
        let userId = TokenService.getUserId()
        let userIdNum = parseInt(userId)
        ArtApiService.getArtGalleryById(userIdNum)
            .then(resJson =>
                // console.log(resJson)
                this.setState({
                    art: resJson
                })
            )
            .catch(error => this.setState({error}))
    }

    render() {
        console.log(this.state.art)

        return (
            <div className='gallery'>
                <h2>My Gallery</h2>
                <div className='gallery-container'>
                    {this.state.art.map(a => (
                        <div className='gallery-image-item' key={a.id}>
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