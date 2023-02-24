import React from "react";

export const Video = ({ src, opacity, height = "h-full", width = "w-full" }) => {
  return (
    <video className={`videoTag ${height} ${width} object-cover`} autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};
