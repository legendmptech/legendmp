import Image from "next/image";
import Link from "next/link";

function ProductCard({ title, description, label, route_link, img_link }) {
  return (
    <Link href={route_link} className="card">
      <p className="card_title">{title}</p>
      <div style={{ width: "100%", height: "70%", padding: "5px 5px 0 5px" }}>
        <Image
          src={img_link}
          alt="Legendmp Logo"
          width={500}
          height={500}
          priority
        />
      </div>
      <p className="card_label">{label}</p>
      <p className="card_description">{description}</p>
    </Link>
  );
}

export default ProductCard;
