import React, { useState } from "react";
import HoverTip from "../utils/HoverTip";

const PasswordGenerator = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Password Generator",
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

  



  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-sky-500">
        Project 2 : &nbsp;
        <span className="text-white underline underline-offset-4">
          Password Generator
        </span>
      </h2>

      {/* Project Box */}
      <div
        className="mt-5 flex flex-col justify-center items-center h-[32rem] max-w-[90%] mx-auto relative"
        style={{ backgroundColor: "white" }}
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

        <div className="text-3xl font-bold text-orange-500">Coming Soon</div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
