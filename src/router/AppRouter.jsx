import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import CourseDetails from '../pages/CourseDetails.jsx';
import StudentDashboard from '../pages/StudentDashboard.jsx';
import CoursesList from '../pages/CoursesList.jsx';
function AppRouter() {
  const[searchText,setSearchText] = useState("")
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar setSearchText={setSearchText} />
        <Routes>
          <Route path="/" element={<CoursesList searchText={searchText} />} />
          <Route path="/details" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter