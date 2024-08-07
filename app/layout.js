import { Open_Sans } from "next/font/google";
import "./globals.css";
import SinglePageNavBar from "./SinglePageNavBar";
import LogoIcon from "./components/Icons/LogoIcon";

import Footer from "./Footer";
import Head from "next/head";
import BottomContactBar from "./components/BottomContactBar";
import Script from "next/script";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children, params }) {
  const navList = [
    {
      link: "#websites",
      title: "Website Services",
    },
    {
      link: "#ecommerce-section",
      title: "ECommerce Websites",
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16654525734"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16654525734');
          `,
        }}
      />
      <Script
        id="gtag-send-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Helper function to delay opening a URL until a gtag event is sent.
            // Call it in response to an action that should navigate to a URL.
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'ads_conversion_Contact_Us_1', {
                'event_callback': callback,
                'event_timeout': 2000,
                // <event_parameters>
              });
              return false;
            }
          `,
        }}
      />
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
