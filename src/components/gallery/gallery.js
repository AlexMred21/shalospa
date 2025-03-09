import React from 'react';
import { Link } from 'react-router-dom';
import ArtApiService from '../../services/art-api-service';
import TokenService from '../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Gallery extends React.Component {
    state = {
        art: [],
        gallery: ''
    }

    componentDidMount() {
        let userId = TokenService.getUserId()
        let userIdNum = parseInt(userId)
        ArtApiService.getArtGalleryById(userIdNum)
            .then(resJson =>
                (resJson.length === 0)
                    ? this.setState({
                        gallery: <div className='empty-gallery'>
                            <p>You have no art to display.  To add art to your gallery, click the <FontAwesomeIcon icon="heart" /> under an image on your dashboard.</p>
                        </div>
                    })
                    : this.setState({
                        art: resJson
                    })
            )
            .catch(error => this.setState({ error }))
    }

    render() {

        return (
            <div className='gallery'>
                <h2>NUESTRA GALERÍA SHALOSPA</h2>
                <div className='gallery-container'>
                    {this.state.gallery}
                    {this.state.art.map(a => (
                        <div className='gallery-image-item' key={a.id}>
                            <Link to={`/art/${a.object_id}`}>
                                <img key={a.id} className='gallery-image' src={a.primary_image} alt='Gallery tile' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
