import React from "react";
import img from "../assets/img/imgdiscuse.png";

export default function ImgRight() {
  const bgImg: object = {
    backgroundImage: `url(${img})`,
  };
  return <section style={bgImg} className="hidden md:block bg-cover"></section>;
}
