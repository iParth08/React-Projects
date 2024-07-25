import React from "react";
import ProjectCard from "../../utils/ProjectCard";

const Projects = () => {
  const Projects = [
    {
      image: "/images/blog.png",
      title: "SpaceBlog - Write your thoughts",
      desc: "CRUD & Filter features with JWT authentication. Database integrated to persist your thoughts.",
      techs: ["React", "Tailwind", "Express", "MongoDB", "JWT"],
      live: "https://react-blog-client-gamma.vercel.app/",
      git: "https://github.com/iParth08/React-Blog",
    },
    {
      image: "/images/shoot.png",
      title: "Shoot the DOTS",
      desc: "CANVAS based classic shooting game with 3 different levels and 2 special moves. Packed with soud effects, animations and music.",
      techs: ["HTML5 - Canvas", "CSS3", "Javascript", "ES6+", "Physics"],
      live: "https://iparth08.github.io/Game-Shoot-the-dots/",
      git: "https://github.com/iParth08/Game-Shoot-the-dots",
    },
    {
      image: "images/notes.png",
      title: "Markdown Parser",
      desc: "A simple notes taking app with CRUD features and markdown support. It has local storage, so your enteries are not lost on refresh.",
      techs: ["React", "Tailwind", "Javascript", "Markdown-Parser"],
      live: "https://iparth08.github.io/markdown-notes/",
      git: "https://github.com/iParth08/markdown-notes",
    },
  ];
  return (
    <div className="container flex-col px-10">
      <div className="text-3xl flex justify-center items-center">Projects</div>
      <h2 className="text-2xl mb-4">Fun Projects</h2>
      <div className="fun-projects flex justify-between">
        <ProjectCard {...Projects[0]} />
        <ProjectCard {...Projects[1]} />
        <ProjectCard {...Projects[2]} />
      </div>
    </div>
  );
};

export default Projects;
