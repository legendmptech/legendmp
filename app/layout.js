import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LogoIcon from "./components/Icons/LogoIcon";
import Head from "next/head";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children, params }) {
  const navList = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/products-and-services",
      title: "Products & Services",
    },
    {
      link: "/contact",
      title: "Contact Us",
    },
    {
      link: "/about",
      title: "About Us",
    },
  ];
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <body
        className={`${openSans.className} selection:bg-black selection:text-white`}
      >
        {/* <NavBar child={children} navList={navList} Logo={<LogoIcon />} /> */}
        {children}
        <Footer />
        <div className="w-full fixed left-0 bottom-0 z-50">
          <div className="w-full flex justify-between items-start p-5 pr-8">
            <div
              className=" bg-blue-800 p-3 rounded-full hover:cursor-pointer hover:bg-green-700 transition-colors"
              id="callBtn"
            >
              <a href={"tel:+919025802851"} target="_blank">
                <IoCall size={40} color="white" />
              </a>
            </div>
            <div className="flex justify-center rounded-md bg-green-700 items-center p-2 px-5 gap-3 shadow-md shadow-black">
              <FaWhatsapp size={30} color="white" />{" "}
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=9025802851&text=Hello%20Legendmp%20Technologies!%20I%20am%20"
                }
                target="_blank"
              >
                <p className="text-white text-xl">CHAT</p>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
