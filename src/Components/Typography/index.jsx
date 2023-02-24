import React from "react";

const colors = {
  sky: "text-sky-600",
  gray: "text-gray-600",
  white: "text-white",
};

export const Typography = ({
  text,
  type = "paragraph",
  color = "gray",
  isLink = false,
  labelColor,
  underline = false,
}) => {

  const classes = {
    important: `text-2xl sm:text-5xl font-bold ${
      labelColor ? labelColor : colors[color]
    }`,
    big: `text-xl sm:text-4xl font-bold ${
      labelColor ? labelColor : colors[color]
    }`,
    title: `text-xl sm:text-4xl font-bold ${
      labelColor ? labelColor : colors[color]
    }`,
    subtitle: `text-base sm:text-2xl font-medium ${
      labelColor ? labelColor : colors[color]
    }`,
    paragraph: `text-sm sm:text-lg font-normal ${
      labelColor ? labelColor : colors[color]
    }`,
    paragraph_sm: `text-xs sm:text-base font-normal ${
      labelColor ? labelColor : colors[color]
    }`,
  };

  const decoration = isLink
    ? `cursor-pointer border-b-2 border-transparent hover:border-gray-400 transition-all duration-200`
    : "";

  let finalClassName = `${decoration} ${classes[type]} ${underline && 'underline'} overflow-hidden`;

  return type === "title" ? (
    <h1 className={finalClassName}>{text}</h1>
  ) : type === "subtitle" ? (
    <h2 className={finalClassName}>{text}</h2>
  ) : (
    <p className={finalClassName}>{text}</p>
  );
};
