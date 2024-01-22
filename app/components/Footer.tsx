"use client";

import React from "react";
import Image from "next/image";
import fb from "../images/png/fb-blue.png";
import insta from "../images/png/insta-blue.png";
import twitter from "../images/png/twitter-blue.png";
import Button from "./Button";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <span className="title">Bandage</span>
        <div className="icons-right">
          <div>
            <Image src={fb} alt="search" className="facebook" />
          </div>
          <div className="j-content">
            <Image src={insta} alt="cart" className="instagram" />
          </div>
          <div className="j-content">
            <Image src={twitter} alt="likes" className="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div>
          <h2 className="header-link">Company Info</h2>
          <p>
            <a href="" className="footer-link">
              About Us
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Carrier
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              We are hiring
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Blog
            </a>
          </p>
        </div>
        <div>
          <h2 className="header-link">Legal</h2>
          <p>
            <a href="" className="footer-link">
              About Us
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Carrier
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              We are hiring
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Blog
            </a>
          </p>
        </div>
        <div>
          <h2 className="header-link">Features</h2>
          <p>
            <a href="" className="footer-link">
              Business Marketing
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              User Analytic
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Unlimited Support
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Blog
            </a>
          </p>
        </div>
        <div>
          <h2 className="header-link">Resources</h2>
          <p>
            <a href="" className="footer-link">
              IOS & Android
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Watch a Demo
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              Customers
            </a>
          </p>
          <p>
            <a href="" className="footer-link">
              API
            </a>
          </p>
        </div>
        <div>
          <h2 className="header-link">Get In Touch</h2>

          <div className="footer-search">
            <input placeholder="Your Email" className="search-input" />
            <Button
              onClick={() => {}}
              bgColor={"#23A6F0"}
              textColor={"#ffffff"}
              title="Subscribe"
            />
          </div>
          <p>
            <a href="" className="footer-link">
              Lore imp sum dolor Amit
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-made">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
