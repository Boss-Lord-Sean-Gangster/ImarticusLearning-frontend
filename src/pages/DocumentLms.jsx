import React from 'react'
import { SideBar } from '../components/SideBar'
import { useParams } from 'react-router-dom'
import { DocumentContent } from '../components/DocumentContent';
import { DynamicSideBar } from '../components/DynamicSideBar';

const DocumentLms = () => {
    const courseId = useParams().id;
  return (
    <div>
        <DocumentContent courseId={courseId}/>
        <DynamicSideBar/>
    </div>
  )
}

export default DocumentLms