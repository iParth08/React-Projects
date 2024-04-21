import React, { useState } from "react";
import HoverTip from "../utils/HoverTip";

const RandomBgColor = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Random Color Generator",
    description: [
      "useState : for background color",
      "colorArray : array of colors to choose from",
      "surpriseMe : function to generate random color",
      "map : use of map to generate color-buttons",
      "randomColorGenerator : function to generate random color using hsl color style",
      "tailwind : positioning, border, overflow, shadow, text, etc.",
      "toggleTooltip : function to toggle this tooltip",
      "js : map, slice, html-list rendering",
    ],
  };

  const [color, setColor] = useState("LightPink");
  const colorArray = [
    "Salmon",
    "Crimson",
    "DeepPink",
    "Coral",
    "OrangeRed",
    "Khaki",
    "Plum",
    "Orchid",
    "RebeccaPurple",
    "SlateBlue",
    "LimeGreen",
    "Teal",
    "MediumAquamarine",
    "SteelBlue",
    "BurlyWood",
    "SaddleBrown",
    "DarkSlateGray",
  ];

  const randomColorGenerator = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100) + "%";
    const lightness = Math.floor(Math.random() * 100) + "%";
    const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
    setColor(randomColor);
  };

  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-orange-500 mb-10">
        Project 1 : &nbsp;
        <span className="text-white underline underline-offset-4">
          Random Color Generator
        </span>
      </h2>

      {/* Project Box */}
      <div
        className="mt-5 flex flex-col justify-center items-center h-[32rem] max-w-[90%] mx-auto relative"
        style={{ backgroundColor: color }}
      >
        {/* ToolTip */}
        <div
          className="tooltip h-7 w-7 rounded-full bg-white flex justify-center items-center absolute -top-3 -right-3"
          onClick={() => setTooltip(!tooltip)}
        >
          🐾
        </div>
        {
          /* Tooltip */

          tooltip && (
            <HoverTip
              project={projectData.project}
              description={projectData.description}
            />
          )
        }

        {/* Project Code */}
        <h3 className="text-3xl font-bold text-white">
          Screen Color : {color}
        </h3>
        <div className="button-box absolute bottom-3 px-6 py-2 flex justify-start items-center gap-4 bg-white rounded-xl overflow-x-auto max-w-[90%]">
          <button
            className="px-4 py-2 text-md rounded-2xl"
            style={{ backgroundColor: "black" }}
            onClick={() => randomColorGenerator()}
          >
            Surprise Me
          </button>
          {colorArray.map((clr) => (
            <button
              key={clr}
              className="px-4 py-2 text-md rounded-2xl"
              style={{ backgroundColor: clr }}
              onClick={() => setColor(clr)}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomBgColor;
