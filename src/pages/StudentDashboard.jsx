import React from "react";
import SideNAvBar from "../components/SideNAvBar";
import CompletedCourses from "../components/CompletedCourses";
import OngoingCourses from "../components/OngoingCourses";
import Progress from "../components/Progress";

function StudentDashboard() {
  return (
    // <SideNAvBar/>
    <div className="flex-col px-5 py-5">
      <div className="flex gap-10 py-5 px-96 items-center justify-center lg:flex-none">
        <CompletedCourses />
        <OngoingCourses />
      </div>
      <div className="flex  p-5 items-center justify-center lg:flex-none">
        <Progress />
      </div>
    </div>
  );
}

export default StudentDashboard;
