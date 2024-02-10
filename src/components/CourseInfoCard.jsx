import React from "react";
import VerticalLine from "./VerticalLine";

function CourseInfoCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex relative justify-evenly shadow-xl rounded-xl px-5 py-10 w-1/2 bg-purple-200">
        <div className="flex flex-col justify-center items-center gap-5">
          <p>duration</p>
          <p>7 weeks</p>
        </div>
        <VerticalLine />
        <div className="flex flex-col justify-center items-center gap-5">
          <p>Location</p>
          <p>7 weeks</p>
        </div>
        <VerticalLine />
        <div className="flex flex-col justify-center items-center gap-5">
          <p>Enrollment status</p>
          <p>7 weeks</p>
        </div>
      </div>
    </div>
  );
}

export default CourseInfoCard;
