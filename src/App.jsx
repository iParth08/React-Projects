import "./App.css";

import Navbar from "./components/common/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper flex flex-col gap-8 p-8 mt-[10vh]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
