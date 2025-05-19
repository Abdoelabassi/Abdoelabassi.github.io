import React from "react";
import { Video } from "@imagekit/react";

interface VideoCompProps {
  videoPath: string;
  videoTitle: string;
  urlEndpoint: string;
  poster: string;
  className?: string;
}
const VideoComp: React.FC<VideoCompProps> = ({
  videoPath,
  videoTitle,
  urlEndpoint,
  poster,
  className,
}) => {
  return (
    <>
      <Video
        urlEndpoint={urlEndpoint}
        src={videoPath}
        controls
        poster={poster}
        alt={videoTitle}
        className={className}
      />
    </>
  );
};

export default VideoComp;
