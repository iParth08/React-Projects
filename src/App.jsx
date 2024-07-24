import "./App.css";

import Navbar from "./components/common/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper flex flex-col gap-8 mt-[15vh]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
