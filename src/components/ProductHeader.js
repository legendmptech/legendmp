"use client";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { SETTINGS } from "@/config";
import Link from "next/link";
import Image from "next/image";

export default function ProductHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Sidebar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <nav className="fixed md:hidden left-0 top-0 flex w-full h-16 px-5 justify-between items-center border-b-2 backdrop-blur-2xl z-40">
        <Link href="/products">
          <Image
            src="/images/take-me/take-me_500.png"
            alt="Legendmp Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
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
