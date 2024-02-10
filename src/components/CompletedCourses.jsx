import React from "react";

function CompletedCourses() {
  return (
    <div 
    style={{ height: "300px" }}
    className="flex flex-col content-center justify-center items-center gap-5 p-5 w-1/2 shadow-xl shadow-purple-200 rounded-xl bg-white text-white">
      <div>
        <p className="font-bold text-black text-center">
          Courses completed so far
        </p>
      </div>
      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-purple-200">
        <p className=" ont-bold  text-black text-center ">5</p>
      </div>
    </div>
  );
}

export default CompletedCourses;
