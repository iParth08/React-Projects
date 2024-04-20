import React from "react";

const HoverTip = ({ project, description }) => {
  return (
    <div className="h-[20rem] w-[30rem] bg-white px-5 py-3 absolute top-5 right-5 shadow-lg border-8 border-green-500">
      <h3 className="text-2xl text-green-500">
        What to learn from : &nbsp;
        <span className="text-blue-500 text-2xl">{project}</span>
      </h3>
      <div className="text-lg text-slate-950 w-full h-[13rem] mt-3 overflow-y-auto">
        {description.map((line) => {
          const [key, value] = line.split(" : ");

          return (
            <p key={key}>
              <span className="text-blue-500 bold-sm">{key}</span> : <i>{value}</i>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default HoverTip;
