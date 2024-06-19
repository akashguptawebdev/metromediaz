import React from "react";
import CustomButton from "../CustomButton/CustomButton";
const ServiceCards = ({cardImg , cardH , cardP}) => {
  return (
    <div className="">
      <div className="card w-52   h-96 border grid  p-3 bg-black text-white rounded-lg">
        <div className="img-card ">
          <img src={cardImg} alt="" className="w-full h-32 rounded-2xl"/>
        </div>

        <div className="card-title">
          <h1 className="font-extrabold text-center py-3 ">{cardH}</h1>
          <p className="text-slate-200 text-center">
           {cardP}
          </p>
        </div>

        <div className="mt-5  flex justify-center">
          <CustomButton btn="Click Me!" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
