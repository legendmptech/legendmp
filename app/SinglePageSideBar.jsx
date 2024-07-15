"use client";
import React from "react";
import LogoIcon from "./components/Icons/LogoIcon";
import Link from "next/link";

function SinglePageSideBar({ navList }) {
  const handleSidebarClose = () => {
    document.getElementById("singlePageSidebar").checked = false;
  };
  return (
    <div className="drawer-side" style={{ zIndex: 100 }}>
      <label
        htmlFor="singlePageSidebar"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-100">
        <LogoIcon className="mb-5" />
        {/* Sidebar content here */}
        {navList?.map((item, i) => {
          return (
            <li className="" key={i} onClick={handleSidebarClose}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SinglePageSideBar;
