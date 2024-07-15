import { Open_Sans } from "next/font/google";
import "./globals.css";
import SinglePageNavBar from "./SinglePageNavBar";
import LogoIcon from "./components/Icons/LogoIcon";

import Footer from "./Footer";
import Head from "next/head";
import BottomContactBar from "./components/BottomContactBar";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children, params }) {
  const navList = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "#pricing",
      title: "Pricing",
    },
    {
      link: "#websites",
      title: "Website Services",
    },
    {
      link: "#androidapp-section",
      title: "Mobile App Services",
    },
    {
      link: "#contactus",
      title: "Contact Us",
    },
  ];
  return (
    <html lang="en" data-theme="light" className="scroll-smooth scroll-p-20">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <body
        className={`${openSans.className} selection:bg-black selection:text-white`}
      >
        <SinglePageNavBar
          child={children}
          navList={navList}
          Logo={<LogoIcon />}
        />
        <Footer />
        <BottomContactBar />
      </body>
    </html>
  );
}
