import React from "react";
import "./Contact.scss";
import { images } from "../../constants";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

function Contact() {
  return (
    <>
      <div name="contact" className="app__contact-container">
        <h2 className="head-text">Chat With Me</h2>
        <div className="app__footer-cards">
          <a href="mailto:kenzhipan@gmail.com">
            <div className="app__footer-card ">
              <HiOutlineMail className="icons" />
              kenzhipan@gmail.com
            </div>
          </a>
          <a href="tel:+61449580866">
            <div className="app__footer-card">
              <MdPhoneIphone className="icons" />
              +61 449-580-866
            </div>
          </a>

          <a href="https://www.linkedin.com/in/zhipanchen" target="_blank">
            <div className="app__footer-card ">
              <TbBrandLinkedin className="icons" />
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
