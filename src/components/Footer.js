import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
            <h4 className="text-xl font-bold mb-4">Legendmp</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/products">Products</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
            <h4 className="text-xl font-bold mb-4">Products</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/products">All Products</Link>
              </li>
              <li className="mb-2">
                <Link href="/products/take-me">TakeMe</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Legendmp Business. All rights
              reserved.
            </p>
            <div className="flex">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
