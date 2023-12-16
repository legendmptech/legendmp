import ProductsComp from "@/app/components/ProductsComp";
import ServicesComp from "@/app/components/ServicesComp";
import React from "react";

export const metadata = {
  title:
    "Products and Services | Legendmp Technologies | We Provide Mobile & Web app development services",
  description:
    "Legendmp Technologies is a Software company. We serve Mobile and Web applications to our clients.",
};

function Products() {
  return (
    <main className="page">
      <div className="w-full max-w-3xl mb-10">
        <div className="page-head text-white text-center px-5 py-5">
          <h1 className="caption font-bold text-white mb-5">
            Products & Services We Offer
          </h1>
          <p className="text-gray-200">
            Experience the future of technology with Legendmp Technologies. Our
            services are not just about digital solutions; they&apos;re about
            transforming lives, fostering creativity, and driving meaningful
            connections. Embrace innovation with us, and let&apos;s shape a
            digital future together.
          </p>
        </div>
        {/* SERVICES SHOWCASE */}
        <ServicesComp />
        {/* PRODUCTS SHOWCASE */}
        <ProductsComp />
      </div>
    </main>
  );
}

export default Products;
