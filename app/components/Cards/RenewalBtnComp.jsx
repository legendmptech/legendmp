"use client";

import { useRef, useState } from "react";

export default function RenewalBtnComp({ highlight }) {
  const text = useRef(null);
  return (
    <main className="">
      <button
        className={`link underline text-blue-800 ${
          highlight ? "text-white" : ""
        }`}
        onClick={() => {
          document.getElementById("more_details_modal").showModal();
        }}
      >
        more details
      </button>
    </main>
  );
}
