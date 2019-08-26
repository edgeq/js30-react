import React, { Component } from "react";

class VideoPlayer extends Component {
  static defaultProps = {
    back: -10,
    forward: 15
  };
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      volMin: 0,
      volMax: 1,
      volume: 1,
      playbackRate: 1,
      pbrMin: 0.5,
      pbrMax: 2
    };
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

  skip(playtime) {
    const media = document.querySelector(".viewer");
    media.currentTime += playtime;
  }

  handleRangeSlider(val, name) {
    const media = document.querySelector(".viewer");
    media[name] = val;
    console.log(val, name);
    switch (name) {
      case "volume":
        this.setState({ volume: val });
        break;
      case "playbackRate":
        this.setState({ playbackRate: val });
        break;
      default:
        break;
    }
  }

  render() {
    const { video, forward, back } = this.props;
    const {
      isPlaying,
      volMin,
      volMax,
      volume,
      playbackRate,
      pbrMin,
      pbrMax
    } = this.state;
    // console.log(video);
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
            min={volMin}
            max={volMax}
            step="0.05"
            value={volume}
            ref={vol => (this.vol = vol)}
            onChange={() =>
              this.handleRangeSlider(this.vol.value, this.vol.name)
            }
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min={pbrMin}
            max={pbrMax}
            step="0.1"
            value={playbackRate}
            ref={rate => (this.rate = rate)}
            onChange={() =>
              this.handleRangeSlider(this.rate.value, this.rate.name)
            }
          />
          <button className="player__button" onClick={() => this.skip(back)}>
            « 10s
          </button>
          <button className="player__button" onClick={() => this.skip(forward)}>
            25s »
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
