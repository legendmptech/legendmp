import React from "react";
import "../styles/styles.css";
import Link from "next/link";

function Drawer({ isOpen, toggleDrawer }) {
  const toggle = () => toggleDrawer(!isOpen);
  return (
    <div
      className={`w-2/3 h-full bg-black fixed top-0 left-0 ${
        isOpen ? "openDrawer" : "closeDrawer"
      } z-50 rounded-r-lg pt-28`}
    >
      <div className="w-full flex flex-col justify-start items-center">
        <Link href="/" className="drawer_item" onClick={toggle}>
          Home
        </Link>
        <Link href="/products" className="drawer_item" onClick={toggle}>
          Products
        </Link>
        <Link href="/blog" className="drawer_item" onClick={toggle}>
          Blog
        </Link>
        <Link href="/about" className="drawer_item" onClick={toggle}>
          About
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
