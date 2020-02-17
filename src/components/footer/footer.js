import React from 'react';
import './footer.css';



export default class Footer extends React.Component {
    render() {
        return (
            <div className='app-footer'>
                ©2020 Brandi Herrera 
                    <a href="https://github.com/brandiherrera"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github logo" className="social" /></a>
                    <a href="mailto:bcjherrera@gmail.com?Subject=Portfolio Contact" target="_blank"><img src="https://image.flaticon.com/icons/svg/561/561127.svg" alt="email icon" className="social" /></a>
                    <a href="https://www.linkedin.com/in/brandiherrera1"><img src="https://image.flaticon.com/icons/svg/49/49068.svg" alt="linkedin logo" className="social" /></a>
            </div>
        )
    }
}