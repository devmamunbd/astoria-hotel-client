import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#EEEEEE] ">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
        <div>
          <footer className="mt-auto">Footer</footer>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
