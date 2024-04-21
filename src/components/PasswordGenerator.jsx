import React, { useCallback, useEffect, useRef, useState } from "react";
import HoverTip from "../utils/HoverTip";

const PasswordGenerator = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Password Generator",
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

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copy, setCopy] = useState("");
  const [showCopy, setShowCopy] = useState(false);

  //   Creates a reference for the password field, to manipulate using it
  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10); //only selection , not copy effect
    window.navigator.clipboard.writeText(password);
    setCopy(passwordRef.current.value);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 3000);
  };

  const PasswordGenerator = useCallback(() => {
    let genPassword = "";

    const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    const largeAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let passString = "";
    passString += smallAlpha;

    if (includeUppercase) passString += largeAlpha;
    if (includeNumbers) passString += numbers;
    if (includeSymbols) passString += symbols;

    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * passString.length + 1);
      genPassword += passString.charAt(index);
    }

    setPassword(genPassword);
  }, [passwordLength, includeUppercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    PasswordGenerator();
  }, [passwordLength, includeUppercase, includeNumbers, includeSymbols]);

  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-sky-500 mb-10">
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

        {/* Project Header */}
        <div className="text-zinc-500">
          {showCopy && (
            <p className="text-green-500 text-xl">
              Copied Pass = <span className="text-blue-500">{copy}</span>
            </p>
          )}
          <div className="flex gap-5 text-lg">
            <p>
              Uppercase :{" "}
              <span
                style={includeUppercase ? { color: "green" } : { color: "red" }}
              >{`${includeUppercase}`}</span>
            </p>
            <p>
              Numbers :{" "}
              <span
                style={includeNumbers ? { color: "green" } : { color: "red" }}
              >{`${includeNumbers}`}</span>
            </p>

            <p>
              Symbols :{" "}
              <span
                style={includeSymbols ? { color: "green" } : { color: "red" }}
              >{`${includeSymbols}`}</span>
            </p>
          </div>
        </div>

        {/* Project Code */}
        <div className="flex flex-col justify-center items-center h-auto w-[45rem] py-5 px-3 text-zinc-500 border-4 border-solid border-blue-500">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                placeholder="Your Password Here"
                name="password"
                id="password"
                value={password}
                ref={passwordRef} // using this ref password can be manipulated
                readOnly
                className="outline-none w-full py-5 px-4 bg-zinc-700 text-xl"
              />
              <button
                className="outline-none bg-blue-500 text-white py-5 px-4 text-xl shrink-0"
                onClick={copyToClipboard}
                type="button"
              >
                Copy
              </button>
            </div>
            <div className="text-[1.2rem] flex flex-col gap-5">
              <div className="flex gap-4 ml-5">
                <label htmlFor="length">
                  Length of Password
                  <span className="text-blue-500 px-4">
                    [
                    {(passwordLength < 10
                      ? "00"
                      : passwordLength < 100
                      ? "0"
                      : "") + passwordLength}
                    ]
                  </span>
                </label>
                <input
                  type="range"
                  name="length"
                  id="length"
                  min={8}
                  max={100}
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                />
              </div>

              <div className="flex justify-around">
                <span className="flex gap-4">
                  <input
                    type="checkbox"
                    name="uppercase"
                    id="uppercase"
                    onChange={() => setIncludeUppercase(!includeUppercase)}
                  />
                  <label htmlFor="uppercase">Uppercase</label>
                </span>

                <span className="flex gap-4">
                  <input
                    type="checkbox"
                    name="numbers"
                    id="numbers"
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                  />
                  <label htmlFor="numbers">Numbers</label>
                </span>

                <span className="flex gap-4">
                  <input
                    type="checkbox"
                    name="symbols"
                    id="symbols"
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                  />
                  <label htmlFor="symbols">Symbols</label>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
