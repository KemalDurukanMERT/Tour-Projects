import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <div id="aboutus">
      <Navbar />
      <div className="about-main fw-bolder d-flex flex-column align-items-center">
        <div className="header fs-1 text-dark">
          Are you searching a holiday?
        </div>
        <div className="about-body my-3 h-75 fs-4 bg-secondary text-light p-3 rounded-5">
          <div className="m-3"><span className="fs-1">Hello and welcome to <span className="text-warning">Vacation Center!</span></span></div>
          <p className="container p-4">
            Vacation Center guided tours come with <span className="text-warning">airfare from more than 100
            conveniently placed locations</span> across the globe, first-rate lodging,
            delectable meals, and interesting sights. Our knowledgeable Tour
            Directors are simply the best in the business. They take care of
            every aspect of your trip to make sure it is enjoyable and carefree.
            As one of the most respected tour operators, we take great pride in
            creating unrivaled travel experiences since 1973. Experience the
            many advantages of traveling with Vacation Center for yourself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
