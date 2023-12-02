import Image from "next/image";
import Link from "next/link";

function ProductCard({ title, desc, label, route_link, img_link }) {
  return (
    <Link
      href={"route_link"}
      className="py-4 w-4/5 sm:w-1/3 flex flex-col items-center gap-2 hover:no-underline text-black"
      style={{ boxShadow: "0 0 2px rgba(0, 0, 0, 0.4)" }}
    >
      <div className="pb-0 pt-2 px-4 flex flex-col items-center">
        <h3 className="font-bold text-large text-black">{label}</h3>
        <p className="text-tiny uppercase font-bold">{title}</p>
        <p className="text-center text-gray-500">{desc}</p>
      </div>
      <Image
        alt="Card background"
        src={img_link}
        width={250}
        height={250}
        className="w-40 h-40 object-cover rounded-xl"
        priority
      />
    </Link>
  );
}

export default ProductCard;
