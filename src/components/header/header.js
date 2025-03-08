import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Header extends React.Component {

    render() {

        return (
            <div className='header'>

                <div className='app-heading'>
                    <h1>Shalospa Arts</h1>
                    <h2>Explora obras de arte únicas en nuestra galería virtual.</h2>
                </div>
                <div id='info-signup'>
                    <section className='app-info'>
                        <div className='app-info-item'>
                            <h3 id='info-header'>
                            <FontAwesomeIcon icon='palette' className='app-info-icon' /> Experience
                            </h3>
                            <h3>exciting at-random masterpieces</h3>
                        </div>
                        <div className='app-info-item'>
                            <h3 id='info-header'>
                            <FontAwesomeIcon icon='comments' className='app-info-icon' /> Connect
                            </h3>
                            <h3>with other art aficionados</h3>
                        </div>
                        <div className='app-info-item'>
                            <h3 id='info-header'>
                            <FontAwesomeIcon icon='magic' className='app-info-icon' /> Curate
                            </h3>
                            <h3>your gallery with your favorites</h3>
                        </div>
                    </section>
                </div>

                <section className='app-log-in'>
                    <button className='link link-login' onClick={() => window.location.href = '/login'}>
                        Log in
                        </button>
                    <button className='link link-signup' onClick={() => window.location.href = '/signup'}>
                        Sign up
                        </button>
                </section>

            </div>
        )
    }
}
