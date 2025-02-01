import React from 'react'
import Video from '../components/Video'
import Section from '../components/Section';
import { CourseContent } from '../components/CourseContent';
import { SideBar } from '../components/SideBar';
import { useParams } from 'react-router-dom';

const Lms = () => {
   const courseId = useParams().id;
  return (
    <div>
        <SideBar/>
       <CourseContent courseId={courseId}/>
    </div>
  )
}

export default Lms