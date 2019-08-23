import React, { Component } from "react";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
    this.handlePlay = this.handlePlay.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.skip = this.skip.bind(this);
  }

  handlePlay() {
    const media = document.querySelector(".viewer");
    media.paused ? media.play() : media.pause();
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  updateButton() {
    const media = document.querySelector(".viewer");
    const toggle = document.querySelector(".toggle");
    const icon = media.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
  }

  skip() {
    const media = document.querySelector(".viewer");
  }

  render() {
    const { video } = this.props;
    const { isPlaying } = this.state;
    console.log(video);
    return (
      <div className="player">
        <video
          className="player__video viewer"
          src={video}
          onClick={this.handlePlay}
        ></video>
        <div className="player__controls">
          <div className="progress">
            <div className="progress__filled"></div>
          </div>
          <button
            className="player__button toggle"
            title="Toggle Play"
            onClick={this.handlePlay}
          >
            {!isPlaying ? "►" : "❚ ❚"}
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value="1"
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value="1"
          />
          <button data-skip="-10" className="player__button">
            « 10s
          </button>
          <button data-skip="25" className="player__button">
            25s »
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
