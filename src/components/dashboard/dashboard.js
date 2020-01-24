import React from 'react';
import ArtPage from '../art-page/art-page';

export default class Dashboard extends React.Component {

    render() {
        return (
            <div className='dashboard'>
                <h2>Today's feature:</h2>
                <ArtPage />
            </div>

        )
    }
}