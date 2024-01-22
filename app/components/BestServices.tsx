"use client";

import React from "react";
import IconCard from "./IconCard";
import BookR from "../images/png/book-reader.png";
import CarbonB from "../images/png/carbonbook.png";
import Growth from "../images/png/growth.png";

const BestServices: React.FunctionComponent = () => {
  return (
    <div className="b-services">
      <div>
        <p className="align-p">Featured Products</p>
        <h2 className="align-b">THE BEST SERVICES</h2>
        <p className="align-text">
          Problems trying to resolve the conflict between
        </p>
        <div className="content-b">
          <IconCard
            header={"Easy Wins"}
            icon={BookR}
            desc={"Get your best looking smile now!"}
          />
          <IconCard
            header={"Concrete"}
            icon={CarbonB}
            desc={
              "Defalcate is most focused in helping you discover your most beautiful smile"
            }
          />
          <IconCard
            header={"Hack Growth"}
            icon={Growth}
            desc={"Overcame any hurdle or any other problem."}
          />
        </div>
      </div>
    </div>
  );
};

export default BestServices;
