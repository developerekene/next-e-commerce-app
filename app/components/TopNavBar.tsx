/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import InstaNav from "../images/png/instagram.png";
import youTubeNav from "../images/png/youtube.png";
import fBookNav from "../images/png/facebook.png";
import twitterNav from "../images/png/twitter.png";
import emailNav from "../images/png/email.png";
import phoneNav from "../images/png/phone.png";

const TopNavBar: React.FunctionComponent = () => {
  return (
    <nav className="nav">
      <div className="inner-con flex">
        <div className="contact">
          <div className="e-inner">
            <Image src={phoneNav} alt="phone" />
            <span className="phone-num">(225) 555-0118</span>
          </div>
          <div className="e-inner">
            <Image src={emailNav} alt="email" />
            <span className="phone-num">michelle.rivera@example.com</span>
          </div>
        </div>
        <div>
          <span className="phone-num">
            Follow Us and get a chance to win 80% off
          </span>
        </div>
        <div className="right-icons">
          <span className="phone-num">Follow Us :</span>
          <Image src={InstaNav} alt="Instagram" />
          <Image src={youTubeNav} alt="Youtube" />
          <Image src={fBookNav} alt="Facebook" />
          <Image src={twitterNav} alt="Twitter" />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
