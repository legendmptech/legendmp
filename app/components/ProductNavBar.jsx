import Link from "next/link";
import React from "react";

const ProductNavBar = ({ child, navList, Logo, LogoSmall }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* DRAWER CONTENT */}
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <div className="bg-white border-b-2 w-full lg:hidden p-1 flex justify-between items-center sticky top-0 left-0">
          {LogoSmall}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            |||
          </label>
        </div>
        {child}
      </div>
      {/* DRAWER SIDEBAR */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {Logo}
          <div className="">
            {navList?.map((item, key) => (
              <li key={key}>
                <Link href={item?.link}>{item?.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProductNavBar;
