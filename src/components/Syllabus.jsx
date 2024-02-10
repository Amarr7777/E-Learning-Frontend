import React from "react";
import "./Syllabus.css";

function Syllabus({ course }) {
  const syllabus = course.syllabus;
  console.log(syllabus);

  return (
    <div className="w-full">
    <p className="text-2xl font-bold py-5">Syllabus</p>
    <div className="flex flex-wrap justify-center items-center gap-5 overflow-x-scroll syllabus-container">
      {syllabus.map((course, key) => (
        <div key={key} className="flex flex-1  bg-purple-200 px-10 sm:px-20 py-5 rounded-xl gap-2">
          <div className="flex-col "
          style={{minHeight: '200px'}}>

          <p className="font-bold text-lg">Week {course.week}</p>
          <p className="text-lg">{course.topic}</p>
          <p className="text-md">{course.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Syllabus;
