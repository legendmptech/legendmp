import ServicePlanCard from "@/app/components/Cards/ServicePlanCard";
import React from "react";

function page(props) {
  return (
    <main>
      <ServicePlanCard planName={"Basic"} price={"1999"} />
    </main>
  );
}

export default page;
