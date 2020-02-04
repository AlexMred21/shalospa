import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Signup from '../signup/signup';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';
import Gallery from '../gallery/gallery';
import ArtPage from '../art-page/art-page';
import Footer from '../footer/footer';

import './app.css';


export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='app-nav'>
          <Navbar />
        </div>

        {/* <Link to='/dashboard'><h3>Dashboard</h3></Link>
        <Link to='/gallery'><h3>Gallery</h3></Link>
        <Link to='/art'><h3>ArtPage</h3></Link> */}

        <main className='app-main'>
          <Route
            exact path='/'
            component={Header}
          />
          <Route
            path='/signup'
            component={Signup}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            path='/gallery'
            component={Gallery}
          />
          <Route
            path='/art/:objectId'
            component={ArtPage}
          />
        </main>
        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

