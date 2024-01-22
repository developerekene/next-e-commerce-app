"use client";

import React from "react";
import ProfilePic from "../images/png/userprofile.jpg";
import FullStar from "../images/png/fullstar.png";
import EmptyStart from "../images/png/emptystar.png";
import g1 from "../images/png/g1.png";
import g2 from "../images/png/g2.png";
import g3 from "../images/png/g3.png";
import g4 from "../images/png/g4.png";
import g5 from "../images/png/g5.png";
import g6 from "../images/png/g6.png";
import g7 from "../images/png/g7.png";
import g8 from "../images/png/g8.png";
import g9 from "../images/png/g9.png";
import Image from "next/image";

const WhatTheySay: React.FunctionComponent = () => {
  return (
    <div className="what-they-say">
      <div className="w-they-say">
        <h2 className="title-wts">What they say about us</h2>
        <div className="image-wts">
          <Image src={ProfilePic} alt="clock" />
        </div>
        <p className="desc-wts">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <p className="name-wts">Regina Miles</p>
        <p className="abouut-wts">Designer</p>
      </div>
      <div>
        <div className="display-what-ts">
          <div>
            <Image src={g1} alt="clock" />
          </div>
          <div>
            <Image src={g2} alt="clock" />
          </div>
          <div>
            <Image src={g3} alt="clock" />
          </div>
        </div>
        <div className="display-what-ts">
          <div>
            <Image src={g4} alt="clock" />
          </div>
          <div>
            <Image src={g5} alt="clock" />
          </div>
          <div>
            <Image src={g6} alt="clock" />
          </div>
        </div>
        <div className="display-what-ts">
          <div>
            <Image src={g7} alt="clock" />
          </div>
          <div>
            <Image src={g8} alt="clock" />
          </div>
          <div>
            <Image src={g9} alt="clock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;
