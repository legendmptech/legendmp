"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import "@/app/globals.css";
import React from "react";

function FlexShowcase({ title, caption, img_link, isReverse }) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-between gap-7 mt-4 ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="text-center md:w-1/2">
        <h2>{title}</h2>
        <p className="">{caption}</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-row justify-center content-center">
        <div className="w-2/3">
          <Player autoplay loop src={img_link}></Player>
        </div>
      </div>
    </div>
  );
}
export default FlexShowcase;
