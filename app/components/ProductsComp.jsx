import React from "react";
import ProductCard from "./Cards/ProductCard";

const ProductsComp = () => {
  return (
    <>
      <h1 className="font-bold text-center mt-8">Our Products</h1>
      <div className="w-full flex flex-col gap-2 items-center md:flex-row px-4">
        <ProductCard
          title={"TakeMe App"}
          desc={
            "An Application to take notes & organize our thoughts effectively"
          }
          label={"Mobile Application"}
          route_link="/product/take-me/privacy"
          img_link={"/images/take-me/take-me_500.png"}
        />
        <ProductCard
          title={"Legendmp Portfolios"}
          desc={
            "Our user-friendly platform allows you to create professional portfolio websites with ease."
          }
          label={"Online Website Builder"}
          route_link="https://portfolio.legendmp.com/"
          img_link={
            "https://storage.needpix.com/rsynced_images/website-design-build-and-service.jpg"
          }
        />
      </div>
    </>
  );
};

export default ProductsComp;
