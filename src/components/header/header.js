import React from 'react';
import Signup from '../signup/signup';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <div className='header'>

                <div className='app-heading'>
                    <h1>MuseMe</h1>
                    <h2>Bringing the museum's muses to you</h2>
                </div>
                <div id='info-signup'>
                    <section className='app-info'>
                        <h3 id='info-header'>Culture</h3>
                        <h3>get a random masterpiece and brief bio daily</h3>
                        {/* <img id='landing-page-pic' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' alt='Vincent van Gogh, A Starry Night'/> */}
                        <h3 id='info-header'>Connect</h3>
                        <h3>connect with other art aficionados</h3>
                        <h3 id='info-header'>Save</h3>
                        <h3>keep your favorites to view later</h3>
                    </section>

                    <section className='app-signup'>
                        <Signup />
                        <h4>Have account? <Link to='/login'>Login</Link></h4>
                    </section>
                </div>
                <section className='app-log-in'>
                    <button className='link' onClick={() => window.location.href = '/login'}>
                        Log In
                        </button>
                    <button className='link' onClick={() => window.location.href = '/signup'}>
                        Sign Up
                        </button>
                </section>

            </div>
        )
    }
}