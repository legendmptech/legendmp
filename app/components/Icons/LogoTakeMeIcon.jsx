import Image from "next/image";
import React from "react";

const LogoTakeMeIcon = (props) => {
  return (
    <div className={`flex flex-row ${props?.className}`}>
      <Image priority src="/logo.png" height={30} width={30} alt="Logo" />
      <b>egendmp Technologies</b>
    </div>
  );
};

export default LogoTakeMeIcon;
