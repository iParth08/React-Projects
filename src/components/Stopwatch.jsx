import React, { useState, useRef, useEffect } from "react";
import HoverTip from "../utils/HoverTip";
import bgVideo from "../assets/video_3.mp4";

const Stopwatch = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Currency Converter",
    description: [
      "CSS-child Selector : Different styles for different children of same parent",
      "CSS-Bg-Video : Cover fit video as background",
      "Z-index : -1 to cover video as background",
      "setInterval : to update states on every 100ms",
      "State Management : It is good to render as less frequently as possible",
      "Render from Map : map data from logs array to HTML elements",
      "useRef : to provide current reference to interval",
      "Conditional Classes : use of conditional classes for styling",
      "Padding 0 : to pad 0 to the left of the string",
    ],
  };

  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [time, setTime] = useState({
    mili: 0,
    sec: 0,
    min: 0,
  });

  const pad0 = (num) => String(num).padStart(2, "0");
  const intervalTicket = useRef(null);

  useEffect(() => {
    let logString = localStorage.getItem("logs");
    logString && setLogs(JSON.parse(logString));
  }, [isRunning]);

  const start = () => {
    setTime((prev) => {
      let newMili = prev.mili + 100;
      let newSec = prev.sec;
      let newMin = prev.min;
      if (newMili >= 1000) {
        newMili = 0;
        newSec++;

        if (newSec >= 60) {
          newSec = 0;
          newMin++;
        }
      }

      return { mili: newMili, sec: newSec, min: newMin };
    });
  };
  const toggleAction = () => {
    setIsRunning(!isRunning);

    if (isRunning) {
      clearInterval(intervalTicket.current);
    } else {
      intervalTicket.current = setInterval(start, 100);
    }
  };

  const resetTime = () => {
    setTime({
      mili: 0,
      sec: 0,
      min: 0,
    });
    clearInterval(intervalTicket.current);
    setIsRunning(false);
    setLogs(() => {
      let newLogs = [];
      localStorage.setItem("logs", JSON.stringify(newLogs));
      return newLogs;
    });
  };

  const logTime = () => {
    setLogs((prev) => {
      let newLogs = [time, ...prev];
      localStorage.setItem("logs", JSON.stringify(newLogs));
      return newLogs;
    });
  };

  const playClass = `bg-green-500 hover:bg-green-700 text-3xl text-white font-bold py-5 px-5 rounded-full mt-5`;
  const pauseClass = `bg-yellow-500 hover:bg-yellow-700 text-3xl text-white font-bold py-5 px-5 rounded-full mt-5`;

  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-teal-500 mb-10">
        Project 4 : &nbsp;
        <span className="text-white underline underline-offset-4">
          Stop Watch
        </span>
      </h2>

      {/* Project Box */}
      <div className="mt-5 flex flex-col justify-center items-center h-[32rem] max-w-[90%] mx-auto relative bg-cover bg-no-repeat">
        {/* Video Background */}
        <video className="time-bg-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
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
        <div className="h-[auto] w-[45rem] bg-[rgba(0,0,0,0.5)] border-4 border-teal-300 rounded-2xl px-5 py-3 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-white">
            {`${pad0(time.min)}:${pad0(time.sec)}:${pad0(time.mili)}`}
          </div>

          <div className="w-[80%] flex justify-center items-center gap-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              onClick={() => logTime()}
            >
              Log Time
            </button>
            <button
              className={isRunning ? pauseClass : playClass}
              onClick={() => toggleAction()}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            <button
              className="bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-5"
              onClick={() => resetTime()}
            >
              Reset
            </button>
          </div>
          <div className="text-2xl italic font-bold text-teal-200 w-full mt-5">
            {logs.length > 0 && "Recent Time Logs :"}
            <hr style={{ color: "white", width: "100%", height: "3px" }} />
            <section className="time-section flex flex-wrap gap-4 max-h-[5rem] overflow-y-auto">
              {logs.map((log, index) => (
                <p key={index}>
                  {`${pad0(log.min)}:${pad0(log.sec)}:${pad0(log.mili)}`}
                </p>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
