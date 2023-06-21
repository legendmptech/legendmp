import "@/app/globals.css";
import { Inter } from "next/font/google";
import ProductHeader from "@/components/ProductHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legendmp",
  description: "A SASS company",
};

export default function ProductLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[inter.className]}
        style={{ backgroundColor: "#faf7f7" }}
      >
        <div className="flex flex-row justify-start">
          <ProductHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
