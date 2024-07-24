import React from "react";

const ProjectCard = ({image, title, desc, techs, live, git}) => {
  return (
    <div className="project-card w-[22rem] min-h-[25rem] bg-zinc-800 shadow-lg">
      <div className="image-box h-[13rem] w-[22rem] bg-green-400 relative">
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
        <div className="overlay absolute w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] text-white text-2xl flex justify-center items-center">
          <a
            className="bg-green-500 text-xl rounded-full px-4 py-2"
            href={live}
            target="_blank"
          >
            Live
          </a>
          <span className="px-4">/</span>
          <a
            className="text-xl rounded-full px-4 py-2 bg-white text-green-500"
            href={git}
            target="_blank"
          >
            Git Repo
          </a>
        </div>
      </div>
      <div className="desc px-4 py-2">
        <div className="title text-lg text-green-500 mb-2">{title}</div>
        <div className="desc text-sm mb-2">{desc}</div>
        <div className="techs flex flex-wrap gap-2">
          {techs.map((tech) => (
            <div className=" w-[fit-content] h-[35px] text-sm border-2 border-white rounded-full px-2 py-1">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
