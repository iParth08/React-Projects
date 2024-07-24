import React from "react";
import Score from "../../utils/Score";

const HeroSection = () => {
  return (
    <div className="hero-wrap h-[80vh] mb-4 w-full flex flex-col justify-center items-center gap-4">
      <div className="hero-section h-[65vh] w-full flex justify-around ">
        <div className="details w-[50vw] h-[100%]">
          dmnnfbsdnmbsdnfb akj kdsjfnfsdlk/fds;lkg dskfkdsjngldskgn
        </div>
        <div className="hero-image w-[40vw] flex justify-center items-center">
          <div className="holder relative">
            <span className="absolute"></span>
            <span className="absolute"></span>
            <span className="absolute"></span>
            <div className="hero h-[300px] w-[300px] bg-gray-900"></div>
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
