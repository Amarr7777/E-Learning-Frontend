import React from "react";
import "./Syllabus.css";

function Syllabus({ course }) {
  const syllabus = course.syllabus;
  console.log(syllabus);

  return (
    <div className="w-full max-h-max">
      <p className="text-2xl font-bold py-5">Syllabus</p>
      <div className="flex justify-center items-center w-full gap-5 overflow-x-scroll syllabus-container">
        {syllabus.map((course, key) => (
          <div key={key} className="flex flex-col bg-purple-200 px-20 py-5 rounded-xl gap-2">
            <p className="font-bold text-justify text-lg">week {course.week}</p>
            <p className="text-justify text-lg">{course.topic}</p>
            <p className="text-justify text-md">{course.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Syllabus;
