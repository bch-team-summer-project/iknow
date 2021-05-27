import React from 'react';
import "./scrollContainer.css";

const ScrollContainer = () => {
  return (
    <div class="horizontal-scroll">
        <div class="horizontal-scroll__block horizontal-scroll__block--purple">
          <div class="background" style={{backgroundImage: "url(grid_img1.png)"}}></div>
          <span class="letter">A</span>
        </div>
        <div class="horizontal-scroll__block horizontal-scroll__block--yellow">
          <div class="background" style={{backgroundImage: "url(grid_img2.png"}}></div>
          <span class="letter">B</span>
        </div>
        <div class="horizontal-scroll__block horizontal-scroll__block--orange">
          <div class="background" style={{backgroundImage: "url(grid_img3.png"}}></div>
          <span class="letter">C</span>
        </div>
        <div class="horizontal-scroll__block horizontal-scroll__block--blue">
          <div class="background" style={{backgroundImage: "url(grid_img4.png)"}}></div>
          <span class="letter">D</span>
        </div>
        <div class="horizontal-scroll__block horizontal-scroll__block--green">
          <div class="background" style={{backgroundImage: "url(grid_img5.png"}}></div>
          <span class="letter">E</span>
        </div>
        <div class="horizontal-scroll__block horizontal-scroll__block--pink">
          <div class="background" style={{backgroundImage: "url()"}}></div>
          <span class="letter">!</span>
        </div>
      </div>
  )
}

export default ScrollContainer;