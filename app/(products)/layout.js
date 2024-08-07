import ProductNavBar from "../components/ProductNavBar";
import Image from "next/image";

export const metadata = {
  title: "TAKEME - Take notes & Organize",
  description: "Take notes and Organize Effectively",
};

export default async function ProductLayout({ children, params }) {
  const navList = [
    {
      link: "/product/take-me/privacy",
      title: "Privacy Policy",
    },
    {
      link: "/product/take-me/terms",
      title: "Terms of Use",
    },
  ];
  return (
    <section>
      <ProductNavBar
        child={children}
        navList={navList}
        LogoSmall={
          <Image
            src={"/images/take-me/logo120x120.png"}
            width={70}
            height={70}
            className="rounded-lg"
            alt="product logo"
          />
        }
        Logo={
          <div className="w-full flex flex-col items-center gap-3 mb-10">
            <Image
              src={"/images/take-me/logo120x120.png"}
              width={100}
              height={100}
              className="rounded-lg"
              alt="product logo"
            />
            <b>TakeMe | take notes</b>
          </div>
        }
      />
    </section>
  );
}
