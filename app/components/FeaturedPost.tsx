"use client";

import React from "react";

import ImageOne from "../images/png/img1.png";
import ImageTwo from "../images/png/img2.png";
import ImageThree from "../images/png/img3.png";
import ArrowN from "../images/png/arrow-next.png";
import ClockN from "../images/png/clock.png";
import ChartN from "../images/png/chartoutlined.png";
import Image from "next/image";
import Button from "./Button";

const FeaturedPost: React.FunctionComponent = () => {
  // Array for looping through the items
  const FeaturedArray = [
    {
      header: `Loudest à la Madison #1 
            (L'integral)`,
      desc: `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
      date: `22 April 2021`,
      comments: `10 comments`,
      icon: ImageOne,
    },
    {
      header: `Loudest à la Madison #1 
            (L'integral)`,
      desc: `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
      date: `22 April 2021`,
      comments: `10 comments`,
      icon: ImageTwo,
    },
    {
      header: `Loudest à la Madison #1 
            (L'integral)`,
      desc: `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
      date: `22 April 2021`,
      comments: `10 comments`,
      icon: ImageThree,
    },
  ];

  // Function to loop through the item array
  const ItemsFunction = () => {
    return FeaturedArray.map((item, index: number) => {
      return (
        <div key={index}>
          <div className="f-home">
            <div>
              <Image src={item.icon} alt="item image" />
            </div>
            <div className="content-f-inner">
              <span className="g-btn">Google</span>
              <span className="t-btn">Trending</span>
              <span className="n-btn">News</span>
            </div>
            <div className="content-desc">
              <h3 className="header-f">{item.header}</h3>
              <h3 className="desc-f">{item.desc}</h3>
            </div>
            <div className="date-comment">
              <div className="diplay-f">
                <div>
                  <Image src={ClockN} alt="clock" />
                </div>
                <span className="text-fa">{item.date}</span>
              </div>
              <div className="diplay-f">
                <div>
                  <Image src={ChartN} alt="chart" />
                </div>
                <span className="text-fa">{item.comments}</span>
              </div>
            </div>
            <div className="base-f">
              <a href="" className="learn-more">Learn More</a>
              <div>
                <Image src={ArrowN} alt="chart" className="arrow-f"/>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="f-post">
      <div>
        <p className="f-posts">Practice Advice</p>
        <h2 className="f-titles">Featured Posts</h2>
        <div className="items-map">{ItemsFunction()}</div>
      </div>
    </div>
  );
};

export default FeaturedPost;
