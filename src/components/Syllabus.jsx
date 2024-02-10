import React from "react";
import "./Syllabus.css";

function Syllabus() {

  return (
    <div className="w-full">
      <p className="text-2xl font-bold py-5">Syllabus</p>
      <div className="flex justify-center items-center w-full gap-5 overflow-x-scroll syllabus-container">
        <div className="flex flex-col bg-purple-200 px-20 py-5 rounded-xl gap-2 ">
          <p className="font-bold text-justify text-lg">week 1</p>
          <p className="text-justify text-lg">
            Introduction to Web Development
          </p>
          <p className="text-justify text-md">
            Overview of web development, setting up development environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
