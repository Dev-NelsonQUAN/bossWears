import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './CardLoading.css'

const LongerCardLoading = () => {
  return (
    <div className="longerCardLoadingBody">
      <Skeleton height={30} width={200} />  
      <Skeleton height={20} width={100} /> 
    </div>
  );
};

export default LongerCardLoading;
