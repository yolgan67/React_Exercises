import React from "react";
import { useParams } from "react-router-dom";
import { VIDEOS } from "./App.js";

export default function Videos() {
  let videos = useParams();
  // let element;
  // if (
  //   videos.type === "fast" ||
  //   videos.type === "slow" ||
  //   videos.type === "cute" ||
  //   videos.type === "eek"
  // ) {
  //   element = <video src={VIDEOS[videos.type]} autoPlay controls />;
  // } else {
  //   element = <h1> video not found </h1>;
  // }

  return (
    <div>
      {/* {element} */}
      <video src={VIDEOS[videos.type]} autoPlay controls />
    </div>
  );
}
