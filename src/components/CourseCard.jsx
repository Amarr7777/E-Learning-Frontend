import React from "react";
import { setCourse } from "../redux/courseSlice";
import { useDispatch } from "react-redux";
function CourseCard({ course }) {
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(setCourse({...course}))
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border shadow-xl my-5 mx-20">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
            <div className="flex flex-col h-full">
              <p className="pt-2 mb-1 font-semibold">{course.courseName}</p>
              <h5 className="font-bold">{course.instructor}</h5>
              <p className="mb-1">{course.description} </p>
              <p className="mb-12">{course.duration} </p>

              <a
                className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                href="/details"
                onClick={handleClick}
              >
                Read More
                <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
              </a>
            </div>
          </div>
          <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
            <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
              <div className="relative flex items-center justify-center h-full">
                <img
                  className="relative z-20 w-full pt-6"
                  src= {course.thumbnail}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
