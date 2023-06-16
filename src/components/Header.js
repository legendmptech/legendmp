"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import "../styles/styles.css";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { SETTINGS } from "@/config";
import Drawer from "./Drawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <nav className="fixed left-0 top-0 flex w-full h-16 px-5 justify-between items-center border-b-2 backdrop-blur-2xl z-40">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Legendmp Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <div className="hidden md:flex flex-row gap-3">
          <Link href="/" className="l_nav_item">
            Home
          </Link>
          <Link href="/products" className="l_nav_item">
            Products
          </Link>
          <Link href="/blog" className="l_nav_item">
            Blog
          </Link>
          <Link href="/about" className="l_nav_item">
            About
          </Link>
        </div>
        <div style={{ cursor: "pointer" }} className="md:hidden">
          {isDrawerOpen ? (
            <RiCloseFill size={SETTINGS.ICON_MEDIUM} onClick={toggleDrawer} />
          ) : (
            <RiMenu3Fill size={SETTINGS.ICON_MEDIUM} onClick={toggleDrawer} />
          )}
        </div>
      </nav>
    </>
  );
}
