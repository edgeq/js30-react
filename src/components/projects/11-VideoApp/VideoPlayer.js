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
    // accessed via ref in <video>
    this.media.paused ? this.media.play() : this.media.pause();
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  updateButton() {
    const media = document.querySelector(".viewer");
    const toggle = document.querySelector(".toggle");
    const icon = media.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
  }

  skip(playtime) {
    this.media.currentTime += playtime;
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

  handleProgress(time, duration) {
    // console.log(`${time} of ${duration}`);
    const progressBar = document.querySelector(".progress__filled");
    const percent = (time / duration) * 100;
    // console.log(`${percent.toFixed(2)}% played`);
    progressBar.style.flexBasis = `${percent}%`;
  }

  scrub(e) {
    const progress = document.querySelector(".progress");
    const scrubTime =
      (e.nativeEvent.offsetX / progress.offsetWidth) * this.media.duration;
    this.media.currentTime = scrubTime;
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
    let mousedown = false;

    return (
      <div className="player">
        <video
          className="player__video viewer"
          src={video}
          ref={media => (this.media = media)}
          onClick={this.handlePlay}
          onTimeUpdate={() =>
            this.handleProgress(this.media.currentTime, this.media.duration)
          }
        ></video>
        <div className="player__controls">
          <div
            className="progress"
            // inline bind when clicked.
            onClick={this.scrub.bind(this)}
            // set mouseDown to true
            onMouseDown={() => (mousedown = true)}
            // set mouseDown to false
            onMouseUp={() => (mousedown = false)}
            // if mouseMove AND mouseDown, call scrub()
            onMouseMove={e => mousedown && this.scrub(e)}
          >
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
