import React from "react";
import CourseCard from "../components/CourseCard";
import srcData from "../constants/index.json";
import { EyeOff } from "react-feather";

function CoursesList({ searchText }) {
  let render;
  const filteredItems = srcData.filter(
    (item) =>
      item.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchText.toLowerCase())
  );
  if (filteredItems.length > 0) {
    render = filteredItems.map((course, index) => {
      return <CourseCard key={course.id} course={course} />;
    });
  } else {
    render = (
      <div className="flex flex-col items-center justify-center p-5">
        <EyeOff stroke="gray" width="40%" height="5%" />
        <p className="text-lg text-gray-400">No results </p>
      </div>
    );
  }

  return <>{render}</>;
}

export default CoursesList;
