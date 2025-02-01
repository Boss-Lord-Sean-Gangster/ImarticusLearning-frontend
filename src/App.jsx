import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Partners from './components/Partners'
import Curriculum from './components/Curriculum'
import Testimonials from './components/Testimonials'
import Questions from './components/Questions'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Course from './pages/Course'
import CourseCheckout from './pages/CourseCheckout'
import Lms from './pages/Lms'
import VideoLms from './pages/VideoLms'
import DocumentLms from './pages/DocumentLms'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/lms/:id" element={<Lms/>} />
            <Route path="/course" element={<Course />} /> 
           <Route path="/checkout/:id" element={<CourseCheckout />} />
           <Route path="/video/:id" element={<VideoLms />} />
           <Route path="/document/:id" element={<DocumentLms />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
