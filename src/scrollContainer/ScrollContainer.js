import React from 'react';
import "./scrollContainer.css";

const ScrollContainer = () => {
  return (
    <div className="horizontal-scroll">
        <div className="horizontal-scroll__block horizontal-scroll__block--purple">
          <a href="/events">
          <div className="background" style={{backgroundImage: "url(images/events_card_img.png)", color: "orange"}}></div>
          <span className="card-text" style={{color: "#EB3204"}}>Uusimaa Events</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--yellow">
          <a href="/water">
          <div className="background" style={{backgroundImage: "url(images/beach_card_img.png"}}></div>
          <span className="card-text" style={{color: "#0046FB"}}>Beach temperature</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--orange">
          <a href="/lost">
          <div className="background" style={{backgroundImage: "url(images/lost_found_card_img.png"}}></div>
          <span className="card-text" style={{color: "#126604"}}>Lost &amp; Found</span>
          </a>
        </div>
        <div className="horizontal-scroll__block horizontal-scroll__block--blue">
          <a href="/laundry">
          <div className="background" style={{backgroundImage: "url(images/laundry_card_img.png)"}}></div>
          <span className="card-text" style={{color: "#126604"}}>Laundry Booking</span>
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