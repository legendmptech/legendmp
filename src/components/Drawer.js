import React from "react";
import "../styles/styles.css";
import Link from "next/link";

function Drawer({ isOpen, toggleDrawer }) {
  const toggle = () => toggleDrawer(!isOpen);
  return (
    <div
      className={`w-2/3 h-full bg-black fixed top-0 left-0 ${
        isOpen ? "openDrawer" : "closeDrawer"
      } z-50 pt-28 drawer`}
      style={{ zIndex: 52 }}
    >
      <div className="w-full flex flex-col justify-start items-center">
        <Link href="/" className="drawer_item" onClick={toggle} passHref>
          Home
        </Link>
        <Link
          href="/products"
          className="drawer_item"
          onClick={toggle}
          passHref
        >
          Products
        </Link>
        <Link href="/blog" className="drawer_item" onClick={toggle} passHref>
          Blog
        </Link>
        <Link href="/about" className="drawer_item" onClick={toggle} passHref>
          About
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
