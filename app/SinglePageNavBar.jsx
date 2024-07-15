import Link from "next/link";
import React from "react";
import LogoIcon from "./components/Icons/LogoIcon";
import SinglePageSideBar from "./SinglePageSideBar";

const SinglePageNavBar = ({ child, navList, Logo }) => {
  return (
    <div className="drawer" style={{ zIndex: 100 }}>
      <input id="singlePageSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className="w-full navbar bg-base-200 md:flex md:justify-center sticky top-0 left-0"
          style={{ zIndex: 98 }}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="singlePageSidebar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="w-full max-w-5xl flex justify-between px-2">
            {Logo}
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navList?.map((item, i) => {
                  return (
                    <li className="" key={i}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <div className="">{child}</div>
      </div>
      <SinglePageSideBar navList={navList} />
    </div>
  );
};

export default SinglePageNavBar;
