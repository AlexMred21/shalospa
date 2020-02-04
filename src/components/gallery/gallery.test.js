import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Gallery from './gallery'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Gallery />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
