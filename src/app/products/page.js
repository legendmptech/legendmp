import ProductCard from "@/components/Cards/ProductCard";
import React from "react";

function Products() {
  return (
    <main className="page">
      <h1>Legendmp Products</h1>
      <div className="flex-container">
        <ProductCard
          title={"TakeMe App"}
          description={
            "An Application to take notes & organize our thoughts effectively"
          }
          label={"Mobile Application"}
          route_link="/product/take-me/"
          img_link={"/images/take-me/take-me_500.png"}
        />
      </div>
    </main>
  );
}

export default Products;
