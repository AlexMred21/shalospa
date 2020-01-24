import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='nav' id='nav'>
                <div className='Header__not-logged-in'>
                    <NavLink
                        exact to='/'
                        className='nav-link-home'
                        id='home'>
                        MUSEME
                        {/* TODO - logo */}
                    </NavLink>
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
{/* MOVE THIS UP TO OTHER DIV? */}
            </div>
            </nav>
        )
    }
}