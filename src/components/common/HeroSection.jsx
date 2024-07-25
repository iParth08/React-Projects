import React from "react";
import Score from "../../utils/Score";

const HeroSection = () => {
  return (
    <div className="hero-wrap h-[80vh] mb-4 w-full flex flex-col justify-center items-center gap-4">
      <div className="hero-section h-[65vh] w-full flex justify-around ">
        <div className="details w-[50vw] h-[100%] m-8">
          <p className="text-3xl satisfy-regular">
            Hey there! I'm{" "}
            <span className="text-green-500">Shwet Prakash,</span> a passionate
          </p>
          <div className="vanish-text text-6xl mt-2">
            <h1>
              <span>
                Front-end <br />
                Back-end <br />
                Full-stack <br />
              </span>
            </h1>
          </div>
          <div className="wavy-text text-7xl h-[100px]">
            <h1>Developer</h1>
            <h1>Developer</h1>
          </div>

          <div className="w-3/4 mt-5 poppins-regular">
            <p className="text-slate-300">
              My creativity extends beyond code; I love crafting stories and
              getting lost in the vibrant worlds of anime.
              <p className="mt-5">
                Let's <a href="#"  target="_blank" className="border-4 border-green-500 hover:bg-green-500 hover:shadow-lg text-white text-md p-1 m-2  rounded-md cursor-pointer"> connect and create </a>
                something extraordinary.
              </p>
            </p>
          </div>
        </div>
        <div className="hero-image w-[40vw] flex justify-center items-center">
          <div className="holder relative">
            <span></span>
            <div
              className="hero h-[300px] w-[300px]"
              style={{ backgroundImage: "url(./character/shade.jpeg)" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="hero-bar w-[90%] flex justify-evenly border-t-2 border-white py-1">
        <Score label="Projects" value="05" />
        <Score label="Skills" value="08" />
        <Score label="Hours" value="30+" />
      </div>
    </div>
  );
};

export default HeroSection;
