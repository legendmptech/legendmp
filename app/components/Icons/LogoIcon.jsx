import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoIcon = (props) => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_URL}
      className={`flex flex-row ${props?.className}`}
    >
      <Image priority src="/logo.png" height={30} width={30} alt="Logo" />
      <b>egendmp Technologies</b>
    </Link>
  );
};

export default LogoIcon;
