import React from "react";
import { ResultPop } from "./Main";

const Result = ({
  dateLeaveEnds,
  dateWorkResume,
  newOutstandingDays,
}: ResultPop) => {
  return (
    <div className="bg-[#000066] sm:h-[230px]  h-[350px] px-4  rounded-xl ">
      <div className="flex flex-col items-center">
        <h1 className="text-[white] text-[1.8em] font-bold text-center">
          <span className="text-[#ED008C]">RES</span>ULT
        </h1>
        <div className="bg-[#ED008C] w-[80px] h-[3px]"></div>
      </div>
      <div className="text-xl mt-6 space-y-3 bg-white shadow-md rounded-xl shadow-[#ED008C] p-5 ">
        <p className="text-[#ED008C]">
          Date leave ends:{" "}
          <span className="text-[#000066] font-bold">{dateLeaveEnds}</span>
        </p>
        <p className="text-[#ED008C]">
          Date Work Resumes:{" "}
          <span className="text-[#000066] font-bold">{dateWorkResume}</span>
        </p>
        <p className="text-[#ED008C]">
          New Outstanding days:{" "}
          <span className="text-[#000066] font-bold">{newOutstandingDays} days</span>

        </p>
      </div>
    </div>
  );
};

export default Result;
