import React from 'react';

export default class ArtPage extends React.Component {

    render() {
        // console.log(this.props.art)
        // let art = this.props.art;
        // console.log(art);
        // const picture = Object.values(picture => picture.value);
        console.log(this.props);
        // const title = Object.keys(title => title.value)
        // console.log(title)
        return (
            <div className='art-page'>
                <img className='random-feature' src={this.props.picture} alt='Art of the day.' />
                
                <div className='art-info'>
                    <h3>{this.props.title}</h3>
                    <h3>{this.props.artist} {this.props.year}</h3>
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