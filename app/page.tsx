"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Furniture from "./components/Furniture";
import FeaturedProducts from "./components/FeaturedProducts";
import BestServices from "./components/BestServices";
import FeaturedPost from "./components/FeaturedPost";
import WhatTheySay from "./components/WhatTheySay";
import BetterExpere from "./components/BetterExpere";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [allDataA, setAllDataA] = useState<any>();
  const [allDataB, setAllDataB] = useState<any>();

  async function dataFromApiA() {
    await axios
      .get("https://dummyjson.com/products/?limit=5")
      .then((response) => {
        if (response.status === 200) {
          setAllDataA(response.data.products);
        } else {
          console.log(
            `This works but retrning status code of: ${response.status}`
          );
        }
      })
      .catch((err) => {
        console.log("This is the Error:", err);
      });
  }
  async function dataFromApiB() {
    await axios
      .get("https://dummyjson.com/products/?limit=10&skip=5")
      .then((response) => {
        if (response.status === 200) {
          setAllDataB(response.data.products);
        } else {
          console.log(
            `This works but retrning status code of: ${response.status}`
          );
        }
      })
      .catch((err) => {
        console.log("This is the Error:", err);
      });
  }

  useEffect(() => {
    dataFromApiA();
    dataFromApiB()
  }, []);

  console.log("the data from API", allDataA);
  console.log("the data from API", allDataB);

  return (
    <>
      <Furniture />
      <FeaturedProducts allData={allDataA} />
      <BestServices />
      <FeaturedPost />
      <WhatTheySay />
      <BetterExpere />
    </>
  );
}
