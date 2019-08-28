import React from "react";
import VideoPlayer from "./VideoPlayer";
import "./11-style.css";
import video from "./652333414.mp4";

const App = () => {
  return (
    <div className="VideoApp">
      <VideoPlayer video={video} />
    </div>
  );
};

export default App;
