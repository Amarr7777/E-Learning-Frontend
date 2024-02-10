import React from "react";

function Progress() {
  return (
    <div
      style={{ height: "300px" }}
      className="flex justify-center items-center p-5 w-1/2 shadow-xl shadow-purple-200 rounded-md bg-white text-black"
    >
      <div className="w-full">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">
            Overall progress
          </span>
          <span className="ml-auto font-semibold leading-normal text-sm">
            50%
          </span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div
              className="bg-purple-200 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"
                style={{ width: "50%" }} 
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
