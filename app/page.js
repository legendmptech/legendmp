import ServicesComp from "./components/ServicesComp";
import RatingsComp from "./components/RatingsComp";
import ServicePlanCard from "./components/Cards/ServicePlanCard";
import { servicePricing } from "./data/ui";
import ProductsComp from "./components/ProductsComp";
import Link from "next/link";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoLogoAndroid } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const metadata = {
  title:
    "Legendmp Technologies | We Provide Mobile & Web app development services",
  description:
    "Legendmp Technologies is a Software company. We serve Mobile and Web applications to our client.",
};

export default function Home() {
  const businessWebsitePricing = servicePricing?.business_websites;
  const dynamicWebsitePricing = servicePricing?.dynamic_websites;
  const ecommerWebsitePricing = servicePricing?.ecommerce_websites;
  const androidappPricing = servicePricing?.android_app_services;
  return (
    <main className="page pb-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="hero mb-10">
          <p className="text-5xl md:text-6xl lg:text-7xl text-white" id="home">
            Get Your Business Website <br /> @ just{" "}
            <Link
              href={"#businesswebsite_section"}
              className="link link-hover text-white text-6xl md:text-7xl lg:text-8xl"
              style={{ color: "white" }}
            >
              ₹ 1,999
            </Link>
          </p>
        </div>
        <div className="animated-text w-full px-3 pb-5 border-b-2 max-w-2xl mb-5 md:mb-10">
          <p className="text-2xl sm:text-3xl text-white bg-black rounded-md p-2 w-fit flex items-center gap-2">
            We are
            <VscWorkspaceTrusted />
          </p>
          <span className="text-4xl sm:text-5xl md:text-6xl text-black z-0"></span>
        </div>
        <h1 className="text-center mb-10 md:mb-15 mt-5" id="pricing">
          PRICING
        </h1>
        <Link href="#ecommerce-section" id="websites">
          <p className="btn btn-info">
            Make Payment Only When Your Website is live on Internet
            <FaArrowAltCircleRight />
          </p>
        </Link>
        <div className="w-full max-w-5xl">
          <h2 className="text-center mt-3" id="businesswebsite-section">
            Business Websites
          </h2>
          <p className="text-center mb-5">
            Your business websites comes with{" "}
            <strong>6 MONTHS FREE HOSTING</strong>
          </p>
          <div className="w-full px-4 flex flex-col md:flex-row gap-3 items-center md:items-stretch">
            <ServicePlanCard {...businessWebsitePricing?.basic} />
            <ServicePlanCard {...businessWebsitePricing?.startup} />
            <ServicePlanCard {...businessWebsitePricing?.enterprise} />
          </div>
          <hr className="mt-3" />
          <hr />
          <hr className="mb-20" />
          <h2 className="text-center mt-3" id="dynamicwebsite-section">
            Dynamic Websites
          </h2>
          <p className="text-center mb-4">
            Content of the Webpage changes periodically like Youtube, Blog
            etc... NOTE : for E-Commerce website{" "}
            <Link href={"#ecommerce-section"}>click here</Link>
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full px-5 flex flex-col md:flex-row gap-3 mb-20 max-w-3xl items-center md:items-stretch">
              <ServicePlanCard {...dynamicWebsitePricing?.basic} />
              <ServicePlanCard {...dynamicWebsitePricing?.enterprise} />
            </div>
          </div>
          <h2 className="text-center mt-3" id="ecommerce-section">
            E-Commerce Websites
          </h2>
          <p className="text-center mb-4">
            Content of the Webpage changes periodically like Youtube, Ecommerce,
            Blog etc...
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full px-5 flex flex-col md:flex-row gap-3 mb-20 max-w-3xl items-center md:items-stretch">
              <ServicePlanCard {...ecommerWebsitePricing?.basic} />
              <ServicePlanCard {...ecommerWebsitePricing?.enterprise} />
            </div>
          </div>
          <h2
            className="text-center mt-3 flex gap-3 items-center justify-center"
            id="androidapp-section"
          >
            Android Mobile Apps <IoLogoAndroid color="green" size={50} />
          </h2>
          <p className="text-center mb-4">
            The Below pricing may change based on your requirements
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full px-5 flex flex-col md:flex-row gap-3 mb-20 max-w-3xl items-center md:items-stretch">
              <ServicePlanCard {...androidappPricing?.offline_apps} />
              <ServicePlanCard {...androidappPricing?.online_apps} />
            </div>
          </div>
        </div>

        <ServicesComp />
        <div className="px-5" id="contactus">
          <h1>Contact Us</h1>
          <h2 className="text-center mt-5">
            Call us : <br />
            <Link href={"tel:+919025802851"} target="_blank">
              +91-9025802851
            </Link>
          </h2>

          <h2 className="text-center mt-5">
            Email Id : <br />
            <Link href={"mailto:s_mohan_prasath@legendmp.com"} target="_blank">
              s_mohan_prasath@legendmp.com
            </Link>
          </h2>
        </div>
      </div>

      {/* COMPONENTS */}

      {/* MORE DETAILS COMPONENT USED IN RENEWAL BTN COMPONENT */}
      <dialog id="more_details_modal" className="modal">
        <div className="modal-box">
          <b>
            <p>Annual Renewal ₹3000 (includes)</p>
          </b>
          <p className="mt-5">+ Maintenace</p>
          <p>+ Hosting</p>
          <p>+ Domain</p>
          <p>+ Customer Support</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
