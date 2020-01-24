import React from 'react';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className='gallery'>
                <h2>My Gallery</h2>
                <div className='gallery-container'>
                    <a href='https://www.google.com'><img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' /></a>
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                    <img className='gallery-image' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                </div>
            </div>
        )
    }
}