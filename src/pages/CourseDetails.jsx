import React, { useEffect } from "react";
import CourseInfoCard from "../components/CourseInfoCard";
import Syllabus from "../components/Syllabus";
import { useSelector } from "react-redux";
import { selectCourse } from "../redux/courseSlice";

function CourseDetails() {
  const course = useSelector(selectCourse);
  return (
    <>
      <div
        className="flex flex-col p-10 py-20 gap-5 relative"
        style={{ background: "#b491c8", zIndex: 0 }}
      >
        <h1 className="font-bold text-8xl">{course.courseName}</h1>
        <h3 className="font-semibold text-6xl">{course.instructor}</h3>
        <p className="text-lg">{course.description}</p>
        <div className="flex gap-10 items-end">
          <button className="py-2 bg-purple-200 rounded-lg w-1/12">
            Enroll
          </button>
        </div>
        <CourseInfoCard />
        <Syllabus />
      </div>
    </>
  );
}

export default CourseDetails;
