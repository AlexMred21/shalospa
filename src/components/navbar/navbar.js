import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';


export default class Navbar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location = '/'
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <div className='Header__left'>
                <NavLink
                    to='/dashboard'
                    className='nav-link-home'
                    id='home'>
                    My Dashboard
                </NavLink>
                </div>
                <div className='Header__right'>
                    <NavLink
                        to='/gallery'
                        className='nav-link'>
                        Gallery
                    </NavLink>
                    <NavLink
                        exact to='/'
                        className='nav-link'
                        onClick={this.handleLogoutClick}>
                        Logout
                    </NavLink>
                </div>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in' id='Header__not-logged-in'>
                <div className='Header__left'>
                <NavLink
                    exact to='/'
                    className='nav-link-home'
                    id='home'>
                    MUSEME
                </NavLink>
                </div>
                <div className='Header__right'>
                    <NavLink
                        className='nav-link signup'
                        to='/signup'>
                        Sign Up
                </NavLink>
                    <NavLink
                        className='nav-link login'
                        to='/login'>
                        Log in
                </NavLink>
                </div>
            </div>
        )
    }

    render() {
        return (
            <nav className='nav' id='nav'>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        )
    }
}