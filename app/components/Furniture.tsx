"use client";

import React, { useState } from "react";

const Furniture: React.FunctionComponent = () => {
  // --> declearing use states
  const [leftItemCount, setLeftItemCount] = useState<number>(5);
  const [likes, setLikes] = useState<number>(1);
  // --> end of use states

  return (
    <div className="furniture">
      <div className="left-f">
        <span className="items-f">{leftItemCount} Items</span>
        <h2 className="fr-f">FURNITURE</h2>
        <p className="read-f">Read More</p>
      </div>
      <div>
        <div className="right-t">
          <span className="items-f">{leftItemCount} Items</span>
          <h2 className="fr-ff">FURNITURE</h2>
          <p className="read-f">Read More</p>
        </div>
        <div className="right-bottom">
          <div className="r-one">
            <span className="items-f">{leftItemCount} Items</span>
            <h2 className="fr-ff">FURNITURE</h2>
            <p className="read-f">Read More</p>
          </div>
          <div className="r-two">
            <span className="items-f">{leftItemCount} Items</span>
            <h2 className="fr-ff">FURNITURE</h2>
            <p className="read-f">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
