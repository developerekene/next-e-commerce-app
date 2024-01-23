"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Router from "next/router";
import Link from "next/link";

interface FeaturedProductsI {
  allData: Array<object>;
}
const FeaturedProducts: React.FunctionComponent<FeaturedProductsI> = ({
  allData,
}) => {
  const router = useRouter();
  function mapThroughAllData() {
    if (allData === undefined) {
      return (
        <div>
          <span>The data coming from API is returning undefined</span>
        </div>
      );
    } else {
      return allData.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Link
              href={{
                pathname: "/details",
                query: {
                  title: item.title,
                },
              }}
              className="container-f"
              // onClick={() => router.push("/details", { title: "Mr" })}
            >
              {/* <Image src={item.thumbnail} alt="image from endpoint" width={300} height={150}/> */}
              <p className="title-data">{item.title}</p>
              <p className="desc-data">{item.category}</p>
              <div className="item-list">
                <p className="price-data">{item.price}</p>
                <p className="dper-data">{item.discountPercentage}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }
  return (
    <div className="featured-p">
      <div>
        <p className="align-p">Featured Products</p>
        <h2 className="align-b">BESTSELLER PRODUCTS</h2>
        <p className="align-text">
          Problems trying to resolve the conflict between{" "}
        </p>

        <div className="map-data">{mapThroughAllData()}</div>
        <div className="map-data">{mapThroughAllData()}</div>
        <div className="featured-btn">
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
    </div>
  );
};

export default FeaturedProducts;
