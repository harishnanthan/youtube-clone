import React, { Component } from "react";
import Ad from "./Ad.component";
import VideosComponent from "./Videos.component";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Ad/>
        <VideosComponent />
      </div>
    );
  }
}
