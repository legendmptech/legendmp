import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <footer className="footer p-10 bg-base-200 text-base-content">
        {/* <aside className="items-center grid-flow-row">
          <div>
            <LogoIcon />
            <i>we provice software solutions</i>
          </div>
        </aside> */}
        <nav>
          <header className="footer-title">Site Map</header>
          <Link href={"/"} className="link link-hover">
            Home
          </Link>
          <Link href={"/products-and-services"} className="link link-hover">
            Products & Services
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact Us
          </Link>
          <Link href={"/about"} className="link link-hover">
            About Us
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Products</header>
          <Link href={"/products-and-services"} className="link link-hover">
            Products & Services
          </Link>
          <Link href={"/product/take-me"} className="link link-hover">
            TAKEME APP
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href={"/terms"} className="link link-hover">
            Terms of use
          </Link>
          <Link href={"/privacy"} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={"/refund-policy"} className="link link-hover">
            Refund policy
          </Link>
          <Link href={"/return-policy"} className="link link-hover">
            Return policy
          </Link>
        </nav>
      </footer>
      <footer className="footer justify-center px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <nav className="md:place-self-center md:justify-self-end">
          <aside className="items-center grid-flow-col mb-3 j">
            <Image priority src="/logo.png" height={36} width={36} alt="Logo" />
            <p className="mt-1">
              &copy; {new Date().getFullYear()} Legendmp Technologies. All
              rights reserved.
            </p>
          </aside>
          <div className="grid grid-flow-col gap-4">
            <Link href={"https://instagram.com/legendmp_tech"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/legendmp-tech"}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </Link>
            <Link
              href={"https://www.youtube.com/@legendmp_tech"}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
