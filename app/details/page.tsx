"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  // console.log(searchParams.get('title'));

  return (
    <div>
      <span>{searchParams.get('title')}</span>
    </div>
  );
};

export default DetailsPage;
