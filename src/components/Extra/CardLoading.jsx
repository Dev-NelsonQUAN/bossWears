import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './CardLoading.css'

const CardLoading = () => {

  return (
    <div className="loadingMainCardWrapper">
      <Skeleton height={150} width={150} />
      <Skeleton height={30} width={100} />
      <Skeleton height={30} width={100} />
    </div>
  );
};

export default CardLoading;
