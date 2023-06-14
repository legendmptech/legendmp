import Image from "next/image";
import Link from "next/link";
import "../styles/styles.css";
export default function Header() {
  return (
    <nav className="fixed left-0 top-0 flex w-full h-16 px-5 justify-between items-center border-b-2 backdrop-blur-2xl lg:static lg:w-auto z-50">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Legendmp Logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <div className="flex flex-row gap-3">
        <Link href="/" className="l_nav_item">
          Home
        </Link>
        <Link href="/products" className="l_nav_item">
          Products
        </Link>
        <Link href="/blog" className="l_nav_item">
          Blog
        </Link>
        <Link href="/about" className="l_nav_item">
          About
        </Link>
      </div>
    </nav>
  );
}
