import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LogoIcon from "./components/Icons/LogoIcon";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children, params }) {
  console.log(params);
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
    <html lang="en" data-theme="light">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <body
        className={`${openSans.className} selection:bg-black selection:text-white`}
      >
        <NavBar child={children} navList={navList} Logo={<LogoIcon />} />
        <Footer />
      </body>
    </html>
  );
}
