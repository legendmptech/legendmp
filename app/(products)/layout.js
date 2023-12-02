import NavBar from "@/app/NavBar";

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
  return <section>{children}</section>;
}
