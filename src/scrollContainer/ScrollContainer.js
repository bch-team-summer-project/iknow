import React from 'react';
import "./scrollContainer.css";

const ScrollContainer = () => {
  return (
    <div className="horizontal-scroll">
        <div className="horizontal-scroll__block horizontal-scroll__block--purple">
          <a href="/events">
          <div className="background" style={{backgroundImage: "url(grid_img1.png)", color: "orange"}}></div>
          <span className="card-text">Uusimaa Events</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--yellow">
          <a href="/water">
          <div className="background" style={{backgroundImage: "url(grid_img2.png"}}></div>
          <span className="card-text">Beach temperature</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--orange">
          <a href="/lost">
          <div className="background" style={{backgroundImage: "url(grid_img3.png"}}></div>
          <span className="card-text">Lost &amp; Found</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--blue">
          <a href="/laundry">
          <div className="background" style={{backgroundImage: "url(grid_img4.png)"}}></div>
          <span className="card-text">Laundry Booking</span>
          </a>
        </div>
        {/* <div className="horizontal-scroll__block horizontal-scroll__block--green">
          <div className="background" style={{backgroundImage: "url(grid_img5.png"}}></div>
          <span className="letter">E</span>
        </div> */}
        <div className="horizontal-scroll__block horizontal-scroll__block--pink">
          <div className="background" style={{backgroundImage: "url()"}}></div>
          <span className="letter">!</span>
        </div>
      </div>
  )
}

export default ScrollContainer;