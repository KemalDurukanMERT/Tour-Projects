import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { GrMailOption } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import maps from "../Assets/map.jpg";
import phones from "../Assets/phone.jpg";
import mails from "../Assets/mail.jpg";
import { IconContext } from "react-icons/lib";

const Contact = () => {
  const [map, setMap] = useState(false);
  const [mail, setMail] = useState(false);
  const [phone, setPhone] = useState(false);
  return (
    <div id="contact" className="contact">
      <Navbar />
      <img
        src={
          mail
            ? mails
            : phone
            ? phones
            : map
            ? maps
            : !(map || phone || mail)
            ? ""
            : ""
        }
        alt=""
      />

      <div className="contact-main fw-bolder d-flex flex-column align-items-center">
        <div className="contact-header header fs-1 text-white">Contact</div>
        <div className="contact-body h-75 fs-4 text-light p-2 rounded-5">
          <span className="header fs-1">
            <span className="text-warning">Whenever </span>You Want, We are
            Here.
          </span>
          <div className="services-tab d-flex flex-column justify-content-center align-items-center gap-3 fs-1 header">
            <div
              className="clicked py-2 px-3 rounded-4"
              onClick={() => {
                setMail(true);
                setPhone(false);
                setMap(false);
              }}
            >
              <GrMailOption />
              <p className="fs-3 mx-3 text-dark mb-0">vacationcenter@holiday.mail.com</p>
            </div>
            <div
              className="clicked py-2 px-3 rounded-4"
              onClick={() => {
                setPhone(true);
                setMail(false);
                setMap(false);
              }}
            >
              <IconContext.Provider value={{color:"black"}}>
                <BsFillTelephoneFill />
              </IconContext.Provider>
              <p className="fs-3 mx-3 text-dark mb-0">+(123) 456 789</p>
            </div>
            <div
              className="clicked py-2 px-3 rounded-4"
              onClick={() => {
                setMap(true);
                setMail(false);
                setPhone(false);
              }}
            >
              <GrMapLocation />
              <p className="fs-3 mx-3 text-dark mb-0">ONE CLICK AWAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
