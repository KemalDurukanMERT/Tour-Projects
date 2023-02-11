import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { GiMeal } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import planes from "../Assets/plane.jpg";
import meals from "../Assets/food.jpg";
import hotels from "../Assets/hotel.jpg";

const Services = () => {
  const [meal, setMeal] = useState(false);
  const [hotel, setHotel] = useState(false);
  const [plane, setPlane] = useState(false);
  return (
    <div id="services" className="services">
      <Navbar />
      <img
        src={
          hotel
            ? hotels 
            : meal
            ?  meals 
            : plane
            ? planes 
            : !(meal || hotel || plane)
            ? ""
            : ""
        }
        alt=""
      />

      <div className="services-main fw-bolder d-flex flex-column align-items-center">
        <div className="services-header header fs-1 text-white">SERVICES</div>
        <div className="services-body h-75 fs-4 text-light p-3 rounded-5">
          <span className="header fs-1">
            <span className="text-warning">Everything </span>You're Looking For
            Is Here
          </span>
          <div className="services-tab d-flex justify-content-center gap-3 fs-1 header">
            <div
              className="clicked p-5 rounded-5"
              onClick={() => {
                setMeal(true);
                setHotel(false);
                setPlane(false);
              }}
            >
              <GiMeal />
            </div>
            <div
              className="clicked p-5 rounded-5"
              onClick={() => {
                setHotel(true);
                setMeal(false);
                setPlane(false);
              }}
            >
              <FaHotel />
            </div>
            <div
              className="clicked p-5 rounded-5"
              onClick={() => {
                setPlane(true);
                setMeal(false);
                setHotel(false);
              }}
            >
              <GiCommercialAirplane />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
