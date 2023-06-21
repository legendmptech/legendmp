"use client";
import { useState, useRef } from "react";
import { ROUTES, SETTINGS } from "@/config";
import "../../styles/styles.css";
import Link from "next/link";
import {
  MdAssignment,
  MdDashboard,
  MdPrivacyTip,
  MdCallToAction,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function Sidebar({ isOpen, toggleDrawer }) {
  const toggle = () => toggleDrawer(!isOpen);
  const [selectedDrawerItem, setSelectedDrawerItem] = useState(
    ROUTES.OVERVIEW_PRODUCT
  );

  return (
    <div
      className={`w-64 h-full fixed top-0 left-0 bg-white z-50 ${
        isOpen ? "sidebarOpen" : "sidebarClose"
      } sidebar md:translate-x-0`}
    >
      <div className="flex flex-col items-center pt-5">
        <h1 className="font-medium">TakeMe</h1>
        <p style={{ textAlign: "center", fontSize: "14px", color: "gray" }}>
          A Note taking and Thoughts Organizing app
        </p>
        <div className="w-full flex flex-col justify-start items-center pt-8">
          <Link
            href="/product/take-me"
            className={`sidebar_item ${
              selectedDrawerItem === ROUTES.OVERVIEW_PRODUCT
                ? "sidebar_item_focused text-white"
                : ""
            }`}
            onClick={() => {
              setSelectedDrawerItem(ROUTES.OVERVIEW_PRODUCT);
              toggle();
            }}
          >
            {selectedDrawerItem !== ROUTES.OVERVIEW_PRODUCT && (
              <MdDashboard size={SETTINGS.ICON_SMALL} color={"#fff"} />
            )}
            {ROUTES.OVERVIEW_PRODUCT}
          </Link>
          <Link
            href="/product/take-me"
            className={`sidebar_item ${
              selectedDrawerItem === ROUTES.TUTORIAL_PRODUCT
                ? "sidebar_item_focused"
                : ""
            }`}
            onClick={() => {
              setSelectedDrawerItem(ROUTES.TUTORIAL_PRODUCT);
              toggle();
            }}
          >
            {selectedDrawerItem !== ROUTES.TUTORIAL_PRODUCT && (
              <FaChalkboardTeacher size={SETTINGS.ICON_SMALL} />
            )}
            {ROUTES.TUTORIAL_PRODUCT}
          </Link>
          <Link
            href="/product/take-me/terms"
            className={`sidebar_item ${
              selectedDrawerItem === ROUTES.TERMS_PRODUCT
                ? "sidebar_item_focused"
                : ""
            }`}
            onClick={() => {
              setSelectedDrawerItem(ROUTES.TERMS_PRODUCT);
              toggle();
            }}
          >
            {selectedDrawerItem !== ROUTES.TERMS_PRODUCT && (
              <MdAssignment size={SETTINGS.ICON_SMALL} />
            )}
            {ROUTES.TERMS_PRODUCT}
          </Link>
          <Link
            href="/product/take-me/privacy"
            className={`sidebar_item ${
              selectedDrawerItem === ROUTES.PRIVACY_PRODUCT
                ? "sidebar_item_focused"
                : ""
            }`}
            onClick={() => {
              setSelectedDrawerItem(ROUTES.PRIVACY_PRODUCT);
              toggle();
            }}
          >
            {selectedDrawerItem !== ROUTES.PRIVACY_PRODUCT && (
              <MdPrivacyTip size={SETTINGS.ICON_SMALL} />
            )}
            {ROUTES.PRIVACY_PRODUCT}
          </Link>
          <Link
            href="/product/take-me/privacy"
            className={`sidebar_item ${
              selectedDrawerItem === ROUTES.CONTACT_PRODUCT
                ? "sidebar_item_focused"
                : ""
            }`}
            onClick={() => {
              setSelectedDrawerItem(ROUTES.CONTACT_PRODUCT);
              toggle();
            }}
          >
            {selectedDrawerItem !== ROUTES.CONTACT_PRODUCT && (
              <MdCallToAction size={SETTINGS.ICON_SMALL} />
            )}
            {ROUTES.CONTACT_PRODUCT}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
