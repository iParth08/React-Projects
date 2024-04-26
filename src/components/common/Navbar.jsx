import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState("green-500");
  const [drop, setDrop] = useState("none");

  //custom class value for active and hover
  const activeClass = `underline underline-offset-8 text-${color} decoration-4`;
  const hoverClass = "hover:underline ";

  return (
    <div
      className="w-full h-[10vh] bg-zinc-800 text-white flex justify-between items-baseline py-4 px-20 fixed top-0 left-0"
      style={{ zIndex: 200 }}
    >
      <h2 className="text-4xl font-bold">
        <span className={`pr-4 text-${color}`}>React</span>
        Projects
      </h2>

      <h3 className="zeyada-regular text-4xl">by SPD</h3>
      <nav className="flex gap-10 text-xl overflow-visible relative">
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
            to="contact"
            className={(e) => (e.isActive ? activeClass : hoverClass)}
          >
            CONTACT
          </NavLink>
        </span>
        <details>
          <summary onClick={() => setDrop(drop === "none" ? "block" : "none")}>
            PROJECTS
          </summary>
        </details>
        <div
          className="drop-down absolute top-12 right-0"
          style={{ display: drop }}
        >
          <ul>
            <li>
              <NavLink
                to="projects/RandomBgColor"
                onClick={() => setColor("orange-500")}
                className={"hover:text-orange-500"}
              >
                P1_BgColor Changer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects/PasswordGenerator"
                onClick={() => setColor("blue-500")}
                className={"hover:text-blue-500"}
              >
                P2_Password Generator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects/CurrencyConvertor"
                onClick={() => setColor("green-500")}
                className={"hover:text-green-500"}
              >
                P3_Currency Convertor
              </NavLink>
            </li>

            <li>
              <NavLink
                to="projects/Stopwatch"
                onClick={() => setColor("teal-500")}
                className={"hover:text-teal-500"}
              >
                P4_Stop Watch
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
