import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function BottomContactBar(props) {
  return (
    <div className="w-full fixed left-0 bottom-0" style={{ zIndex: 101 }}>
      <div className="w-full flex justify-between items-end p-3">
        <div
          className="lg:hidden bg-blue-800 p-3 rounded-full hover:cursor-pointer hover:bg-green-700 transition-colors"
          id="callBtn"
        >
          <a href={"tel:9025802851"} target="_blank">
            <IoCall size={35} color="white" />
          </a>
        </div>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=9025802851&text=Hello%20Legendmp%20Technologies!%20I%20am%20"
          }
          target="_blank"
        >
          <div className="flex justify-center rounded-md bg-green-700 items-center p-2 px-3 gap-3 shadow-md shadow-black">
            <FaWhatsapp size={25} color="white" />{" "}
            <p className="text-white text-xl">CHAT</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomContactBar;
