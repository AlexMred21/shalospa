import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>

                <div className='app-heading'>
                    <h1>MUSEME</h1>
                    <h2>Have the museum brought to you</h2>
                </div>

                <section className='app-info'>
                    <h3>Culture - get a random masterpiece and brief bio daily</h3>
                    <h3>Connect - connect with other art aficionados</h3>
                    <h3>Save - keep your favorites to view later</h3>
                </section>

                <section className='app-log-in'>
                    <button className='link'>
                        Log In
                        </button>
                    <button className='link'>
                        Sign Up
                        </button>
                </section>

            </div>
        )
    }
}