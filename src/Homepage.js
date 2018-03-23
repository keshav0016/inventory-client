import React, { Component } from 'react';
import './App.css';
import materialize from 'materialize-css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Homepage extends Component {
  componentDidMount() {
    /* global $ */
    setTimeout(()=>{
      $('.carousel.carousel-slider').carousel();
    })
  }

  render() {

    return (
      <div>
        <div className="masterComponentBackground">
          <div >
            <nav className="masterComponentNavigationBar">
              <Link to="/loginform"><a className="btn-flat waves-effect white masterComponentLogoutButton">SIGN IN</a></Link>    
            </nav>
          </div>
        </div>
        <div className="carousel carousel-slider homepageCarousel">
          <a className="carousel-item" href="#one!"><img className="homepageCarouselImage" src="https://lorempixel.com/800/400/food/1" /></a>
          <a className="carousel-item" href="#two!"><img className="homepageCarouselImage" src="https://lorempixel.com/800/400/food/1" /></a>
          <a className="carousel-item" href="#three!"><img className="homepageCarouselImage" src="https://lorempixel.com/800/400/food/1" /></a>
          <a className="carousel-item" href="#four!"><img className="homepageCarouselImage" src="https://lorempixel.com/800/400/food/1" /></a>
        </div>
      </div>
    );
  }
}

export default Homepage;
