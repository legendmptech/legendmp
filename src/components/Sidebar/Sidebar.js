import "../../styles/styles.css";
import Link from "next/link";

function Sidebar({ isOpen, toggleDrawer }) {
  const toggle = () => toggleDrawer(!isOpen);
  return (
    // <div
    //   className={`w-2/3 h-full bg-black fixed top-0 left-0 md:flex ${
    //     isOpen ? "openDrawer" : "closeDrawer"
    //   } z-50 rounded-r-lg pt-28 md:openDrawer`}
    // >
    //   <div className="w-full flex flex-col justify-start items-center">
    //     <Link href="/" className="drawer_item" onClick={toggle}>
    //       Home
    //     </Link>
    //     <Link href="/products" className="drawer_item" onClick={toggle}>
    //       Products
    //     </Link>
    //     <Link href="/blog" className="drawer_item" onClick={toggle}>
    //       Blog
    //     </Link>
    //     <Link href="/about" className="drawer_item" onClick={toggle}>
    //       About
    //     </Link>
    //   </div>
    // </div>
    <div className="w-64 h-full bg-red-400 fixed top-0 left-0">
      <div className="flex flex-col items-center pt-5">
        <h1>TakeMe</h1>
        <div className="w-full flex flex-col justify-start items-center pt-8">
          <Link href="/product/take-me" className="drawer_item">
            Overview
          </Link>
          <Link href="/product/take-me" className="drawer_item">
            Tutorials
          </Link>
          <Link href="/product/take-me/terms" className="drawer_item">
            Terms and Conditions
          </Link>
          <Link href="/product/take-me/privacy" className="drawer_item">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
