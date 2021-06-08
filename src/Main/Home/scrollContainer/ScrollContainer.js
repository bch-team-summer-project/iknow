import React from "react";
import { Link } from "react-router-dom";
import "./scrollContainer.css";

const ScrollContainer = () => {
  return (
    <div className="scroll-container-parent">
      <div className="horizontal-scroll">
        <div className="horizontal-scroll__block">
          <Link to="/events">
            <div className="background orange">
              <div className="scroller-circle">
                <img src="/assets/images/home/uusina.png" alt="uusima events" />
              </div>
            </div>
            <span className="card-text uusima">Uusimaa Events</span>
          </Link>
        </div>
        <div className="horizontal-scroll__block">
          <Link to="/water">
            <div className="background blue">
              <div className="scroller-circle">
                <img
                  src="/assets/images/home/beach.png"
                  alt="water temperature"
                />
              </div>
            </div>
            <span className="card-text beach">Beach Water t&#8451;</span>
          </Link>
        </div>
        <div className="horizontal-scroll__block">
          <Link to="/lost">
            <div className="background green">
              <div className="scroller-circle">
                <img src="/assets/images/home/lost.png" alt="lost and found" />
              </div>
            </div>
            <span className="card-text lostfound">Lost &amp; Found</span>
          </Link>
        </div>
        {/*     <div className="horizontal-scroll__block horizontal-scroll__block--four">
          <Link to="laundry">
            <div className="background light-blue">
              <div className="scroller-circle">
                <img
                  src="/assets/images/home/laundry.png"
                  alt="laundry booking"
                />
              </div>
            </div>
            <span className="card-text laundry">Laundry booking</span>
          </Link>
        </div> */}
        {/* <div className="horizontal-scroll__block horizontal-scroll__block--five">
          <div className="background" style={{backgroundImage: "url(grid_img5.png"}}></div>
          <span className="letter">E</span>
        </div> */}
        <div className="horizontal-scroll__block ">
          <div
            className="background"
            style={{ backgroundImage: "url()" }}
          ></div>
          <span className="letter"></span>
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;
