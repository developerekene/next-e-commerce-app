"use client";

import React from "react";
import Button from "./Button";

const FeaturedProducts: React.FunctionComponent = () => {
  return (
    <div className="featured-p">
      <div>
        <p className="align-p">Featured Products</p>
        <h2 className="align-b">BESTSELLER PRODUCTS</h2>
        <p className="align-text">
          Problems trying to resolve the conflict between{" "}
        </p>
        {/* <div>
          <span>content from api here</span>
        </div> */}
        <Button
          title="LOAD MORE PRODUCTS"
          bgColor="#ffffff"
          bWidth={1}
          bColor="#23A6F0"
          bRadius={5}
          textColor="#23A6F0"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
