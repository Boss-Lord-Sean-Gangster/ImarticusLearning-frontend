import React from 'react'
import { VideoContent } from '../components/VideoContent'
import { useParams } from 'react-router-dom'
import { SideBar } from '../components/SideBar';
import { DynamicSideBar } from '../components/DynamicSideBar';

const VideoLms = () => {
    const videoId = useParams().id;
  return (
    <div>
        <DynamicSideBar/>
        <VideoContent videoId={videoId}/>
    </div>
  )
}

export default VideoLms