import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState("green-500");
  const [drop, setDrop] = useState("none");

  //custom class value for active and hover
  const activeClass = `border-${color} text-white border-2 px-4 py-2 rounded-full duration-300`;
  const hoverClass = `hover:text-${color} hover:border-white border-transparent border-2 px-4 py-2 rounded-full duration-300`;
  const resumeClass = `bg-${color} text-white hover:shadow-md hover:shadow-white px-4 py-2 rounded-full duration-300 ${drop} cursor-pointer`;

  return (
    <div
      className="w-full h-[12vh] bg-zinc-800 text-white flex justify-between items-baseline py-4 px-20 fixed top-0 left-0"
      style={{ zIndex: 200 }}
    >
      <h2 className="text-4xl font-bold">
        <span className={`text-${color}`}>Partho</span>
        folio
      </h2>

      {/* <h3 className="zeyada-regular text-4xl">by SPD</h3> */}
      <nav className="navbar flex md:gap-5 md:text-xl sm:text-md overflow-visible relative">
        <span>
          <NavLink
            to=""
            className={(e) => (e.isActive ? activeClass : hoverClass)}
          >
            HOME
          </NavLink>
        </span>
        <span>
          <NavLink
            to="projects"
            className={(e) => (e.isActive ? activeClass : hoverClass)}
          >
            PROJECTS
          </NavLink>
        </span>
        <span>
          <NavLink
            to="contact"
            className={(e) => (e.isActive ? activeClass : hoverClass)}
          >
            CONTACT
          </NavLink>
        </span>

        <span>
          <NavLink
            to="https://drive.google.com/file/d/1krdzXKCmkpwbAEuqXPkc6PcSOSjpnDqA/view"
            target="_blank"
            className={resumeClass}
          >
            RESUME
          </NavLink>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
