import React from 'react';

export default class ArtPage extends React.Component {
    render() {
        return (
            <div className='art-page'>
                <img className='random-feature' src='https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=bcd18fd7a361679c' alt='The Starry Night by Vincent Van Gogh' />
                
                <div className='art-info'>
                    <h3>The Starry Night</h3>
                    <h3>Vincent Van Gogh, 1889</h3>
                    <button className='add-to-gallery-btn'><h4>Save to my gallery</h4></button>
                </div>

                <div className='comments-container'>
                    <h3>Comments</h3>

                    <div className='art-comments'>
                        <p>User: Artlover3000</p>
                        <p>Comment: This is my favorite!!!</p>
                    </div>
                    <div className='art-comments'>
                        <p>User: vangogogh</p>
                        <p>Comment: Starry Night, spectacular!</p>
                    </div>

                    <form className='comment-form'>
                        <div className='add-comment-entry'>
                            <label>Add a comment</label>
                            <br />
                            <input className='add-comment' type='text' name='add-comment' id='add-comment' />
                            
                            <button type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}