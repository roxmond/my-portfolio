import { useEffect } from "react";
import { useState } from "react";
import video1 from '@/public/clouds_bg.mp4';
import video2 from '@/public/lights_bg.mp4';
import video3 from '@/public/waves_bg.mp4';




export const BgVideo = () => {
{/* 
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
      const videos = [
        {video1},
        {video2},
        {video3},
      ];
  
      const randomVideoIndex = Math.floor(Math.random() * videos.length);
      const randomVideoUrl = videos[randomVideoIndex];
  
      setVideoUrl(randomVideoUrl);
    }, []);
  */}
    return (
        <video autoPlay="autoplay" muted loop="loop" id="myVideo">
                <source src={video1} type="video/mp4" />
            </video>
    )
  };
