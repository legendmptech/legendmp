import React from "react";
import FlexShowcase from "./FlexShowcase";

const ServicesComp = () => {
  return (
    <>
      <h1 className="text-center mt-5" id="services-section">
        Our Services
      </h1>
      <div className="flex flex-col max-w-4xl px-5">
        <FlexShowcase
          isReverse={false}
          img_link={"/lottie/mobile_app_build.json"}
          title={"Cutting Edge Mobile Applications"}
          caption={
            "Experience the power of our advanced mobile applications, meticulously crafted to enhance productivity and creativity. From intuitive note-taking apps to feature-rich business tools, our mobile solutions cater to diverse needs, making your digital experience efficient and enjoyable."
          }
        />
        <FlexShowcase
          isReverse={true}
          img_link={"/lottie/elementor_web.json"}
          title={" Effortless Website Creation"}
          caption={
            "Say goodbye to the complexities of website development. Our user-friendly platform allows you to create professional websites with ease. Whether you're an aspiring blogger, entrepreneur, or established business owner, our customizable templates and intuitive interface empower you to build your online presence effortlessly."
          }
        />
        <FlexShowcase
          isReverse={false}
          img_link={"/lottie/business.json"}
          title={"Tailored Business Solutions"}
          caption={
            "For businesses seeking growth and efficiency, our tailored mobile apps and web applications are the perfect solution. We understand the unique challenges businesses face, and our specialized digital tools are designed to streamline operations, engage customers, and drive success."
          }
        />
      </div>
    </>
  );
};

export default ServicesComp;
