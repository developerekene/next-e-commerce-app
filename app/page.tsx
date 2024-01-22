import Image from "next/image";
import styles from "./page.module.css";
import Furniture from "./components/Furniture";
import FeaturedProducts from "./components/FeaturedProducts";
import BestServices from "./components/BestServices";
import FeaturedPost from "./components/FeaturedPost";
import WhatTheySay from "./components/WhatTheySay";
import BetterExpere from "./components/BetterExpere";

export default function Home() {
  return (
    <>
      <Furniture />
      <FeaturedProducts />
      <BestServices />
      <FeaturedPost />
      <WhatTheySay />
      <BetterExpere />
    </>
  );
}
