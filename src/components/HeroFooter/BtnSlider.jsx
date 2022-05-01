/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import leftArrow from "../../assets/arrow-lefth.svg";
import rightArrow from "../../assets/arrow-right.svg";
import "../HeroFooter/heroFooter.css";

export default function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "herobtn-slide next" : "herobtn-slide prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
