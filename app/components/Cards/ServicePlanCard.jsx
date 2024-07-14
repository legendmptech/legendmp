import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import RenewalBtnComp from "./RenewalBtnComp";

export default function ServicePlanCard({
  planName,
  price,
  serviceList,
  highlight,
  imageLink,
  isShowDetailsBtnAvailable,
  quoteLink,
}) {
  return (
    <div
      className={`w-4/5 md:w-full hover:cursor-pointer  border-gray-400 p-7 hover:shadow-sm hover:shadow-black rounded-2xl ${
        highlight ? "bg-blue-800" : "bg-gray-100"
      }`}
      style={{ borderWidth: "1px" }}
    >
      <h2 className={`text-center ${highlight ? "text-white" : ""}`}>
        {planName} ₹{price}
      </h2>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse justify-evenly items-center gap-3 mt-4 flex-wrap">
        <Link
          href={quoteLink}
          target="_blank"
          className={`p-3 bg-white text-lg ${
            highlight ? "" : "outline-black outline-dotted"
          } mt-8 sm:mt-0 md:mt-8 w-fit`}
        >
          Get Quote
        </Link>
        <div className="flex flex-col">
          <ul className="my-4">
            {serviceList?.map((item, i) => (
              <p
                className={`py-1 ${
                  highlight ? "text-white" : ""
                } flex items-center gap-2`}
                key={i}
              >
                <b className="">
                  {" "}
                  <FaCheckCircle />{" "}
                </b>{" "}
                {item}
              </p>
            ))}
          </ul>
          <div>
            {isShowDetailsBtnAvailable && (
              <RenewalBtnComp highlight={highlight} />
            )}
          </div>
        </div>
        {imageLink && (
          <Image
            src={imageLink}
            width={256}
            height={256}
            className="md:w-[100px] md:h-[100px] w-[150px] h-[150px]"
          />
        )}
      </div>
    </div>
  );
}
