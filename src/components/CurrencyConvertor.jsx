import React, { useState } from "react";
import HoverTip from "../utils/HoverTip";

const CurrencyConvertor = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Currency Converter",
    description: [
      "CSS : custom slider styles {Experimental}",
      "CSS-Custom theme : Custom theme for conditional rendering",
      "Conditional Rendering : tooltip as well as copied password",
      "padding Number : padded zeroes for passwordlength",
      "passwordGenerator : function to generate password following some conditionals",
      "setInterval : hide copy pass after 3 seconds",
      "CopyToClip : how to copy text to clipboard",
      "useState : for password, passwordLength, includeUppercase, , includeNumbers, includeSymbols",
      "useCallback : for PasswordGenerator function to cache the function for optimized use",
      "useEffect : for autocalling functions on changes",
      "useRef : to ref to password for subtle manipulation",
    ],
  };

  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-green-500">
        Project 3 : &nbsp;
        <span className="text-white underline underline-offset-4">
          Currency Converter
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
        <div className="h-[20rem] w-[30rem] bg-white px-5 py-3"></div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
