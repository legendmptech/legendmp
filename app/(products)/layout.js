import ProductNavBar from "../components/ProductNavBar";
import LogoTakeMeIcon from "../components/Icons/LogoTakeMeIcon";
import Image from "next/image";

export const metadata = {
  title: "TAKEME - Take notes & Organize",
  description: "Take notes and Organize Effectively",
};

export default function TakeMEAppLayout({ children, params }) {
  //   console.log(params);
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
          />
        }
        Logo={
          <div className="w-full flex flex-col items-center gap-3 mb-10">
            <Image
              src={"/images/take-me/logo120x120.png"}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <b>TakeMe | take notes</b>
          </div>
        }
      />
    </section>
  );
}
