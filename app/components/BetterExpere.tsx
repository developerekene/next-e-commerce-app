"use client";
import React from "react";
import Button from "./Button";

const BetterExpere: React.FunctionComponent = () => {
  return (
    <div className="better-main">
      <div className="better-inner">
        <h2 className="top-title">Designing Better Experience</h2>
        <h2 className="top-desc">Problems trying to resolve the conflict between </h2>
        <h2 className="desc-inner">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </h2>
        <p className="cash">$16.48</p>
        <div className="btn-b">
          <Button
            onClick={() => {}}
            bgColor={"#23A6F0"}
            textColor={"#ffffff"}
            title="ADD YOUR CALL TO ACTION"
            bRadius={5}
          />
        </div>
      </div>
    </div>
  );
};

export default BetterExpere;
