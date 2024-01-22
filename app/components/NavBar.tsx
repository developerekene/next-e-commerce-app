"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import userNav from "../images/png/user.png";
import likeNav from "../images/png/like.png";
import searchNav from "../images/png/search.png";
import cartNav from "../images/png/cart.png";
import dropDownNav from "../images/png/dropdown.png";
import Link from "next/link";

const NavBar: React.FunctionComponent = () => {
  // --> declearing use states
  const [cart, setCart] = useState<number>(1);
  const [likes, setLikes] = useState<number>(1);
  // --> end of use states

  return (
    <nav className="nav-main">
      <div className="inner-con">
        <div className="contact-m">
          <div className="e-inner">
            <span className="title">Bandage</span>
          </div>
          <nav className="mini-nav">
            <ul className="mini-nav-ul">
              <li className="li-style">
                <Link className="a-tag" href="/">
                  Home
                </Link>
              </li>
              <li className="shop">
                <Link className="a-tag" href="/details">
                  Shop
                </Link>
                <Image src={dropDownNav} alt="" />
              </li>
              <li className="li-style">
                <Link className="a-tag" href="#">
                  About
                </Link>
              </li>
              <li className="li-style">
                <Link className="a-tag" href="#">
                  Blog
                </Link>
              </li>
              <li className="li-style">
                <Link className="a-tag" href="#">
                  Contact
                </Link>
              </li>
              <li className="li-style">
                <Link className="a-tag" href="#">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="r-nav">
          <div className="login-register">
            <div>
              <Image src={userNav} alt="User" />
            </div>
            <a href="#" className="l-r">
              Login / Register
            </a>
          </div>
          <div className="icons-right">
            <div>
              <Image src={searchNav} alt="search" className="cursor" />
            </div>
            <div className="j-content">
              <Image src={cartNav} alt="cart" className="cursor" />
              <span className="numb">{cart}</span>
            </div>
            <div className="j-content">
              <Image src={likeNav} alt="likes" className="cursor" />
              <span className="numb">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
