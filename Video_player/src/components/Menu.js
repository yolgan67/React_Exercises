import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    const playVideo = (e) => {
      console.log(e.target.value);
      this.props.chooseVideo(e.target.value);
    };
    return (
      <div>
        <form onClick={playVideo}>
          <input type="radio" name="btn" value="fast" id="fast" />
          <label htmlFor="fast">fast</label>
          <input type="radio" name="btn" value="slow" id="slow" />
          <label htmlFor="slow">slow</label>
          <input type="radio" name="btn" value="cute" id="cute" />
          <label htmlFor="cute">cute</label>
          <input type="radio" name="btn" value="eek" id="eek" />
          <label htmlFor="eek">eek</label>
        </form>
      </div>
    );
  }
}
