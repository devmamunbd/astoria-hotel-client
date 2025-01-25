import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-bgPrimary ">
        <div>
          <nav>Navbar</nav>
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
