import "video.js/dist/video-js.css";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import React from "react";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        volume={0.5}
        controls
        playing={false}
        pip
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
