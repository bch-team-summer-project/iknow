import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";
import ScrollContainer from "./scrollContainer/ScrollContainer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="swiping">
        <ScrollContainer />
        <div className="swiperight">
          Swipe right <ArrowRightAltIcon style={{ fontSize: 50 }} />
        </div>
      </section>
      <section className="banners">
        <section className="single-banner">
          <Link to="/lost">
            <div className="banner-circle"></div>
            <h3>Did you loose something in Uusima?</h3>
            <h3>May be someone knows where it is</h3>
            <h3>Posting info about lost and found things</h3>
            <h3>we help each other</h3>
            <img
              src="/assets/images/home/laptopgirl.png"
              alt="laptop girl"
            ></img>
          </Link>
        </section>
        <section className="single-banner">
          <Link to="/water">
            <div className="banner-circle"></div>
            <h3>Do you want to know for sure </h3>
            <h3>what beach to visit today?</h3>
            <h3>We have list of all beach& water temperature</h3>
            <h3>check it</h3>
            <img src="/assets/images/home/phonegirl.png" alt="phone girl"></img>
          </Link>
        </section>
        <section id="about" className="single-banner aboutus">
          <div className="banner-circle"></div>
          <h2>About us</h2>
          <div className="aboutus-text">
            <div className="about-wraper">
              <div className="innercircle">
                <img src="/assets/images/home/team.png" alt="team"></img>
              </div>
              <ul>Team:</ul>
              <li>
                <a href="/"> Bhatnagar Ankita</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/diana-korotkevica-70b62a207"
                  target="_blanc"
                >
                  Korotkevica Diana
                </a>
              </li>
              <li>
                <a href="https://github.com/kirilllan"> kirilllan</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jualiasha" target="_blanc">
                  Matviishyna Julia
                </a>
              </li>
              <li>
                <a href="/"> To Anh</a>
              </li>
            </div>
            <div>
              <p>iKnow is a Business College's team summer project.</p>
              <p>
                We are a group of five enthusiastic people, willing to get
                people know what is going on in Uusima region and automate their
                daily-life actions.
              </p>
              <ul>We want to present you an idea that:</ul>
              <li>
                you can easily book laundry time for your apartment in your
                house laundry by making some hits in your phone
              </li>
              <li>
                in case you loose or find something you can easily post it in
                this app and we hope it will help you to find it quicker
              </li>
              <li>
                you want to go to the beach in summertime? Easy! With “iKnow”
                you know temperature on all beaches and you can choose the one
                you want
              </li>
              <li>
                are you boring? don’t be! “iKnow” will find events for you. You
                can easily find one you like or post one you would like to
                organize. We have online and offline events for you as well.
              </li>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
