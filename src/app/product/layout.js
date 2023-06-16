import "@/app/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductHeader from "@/components/ProductHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legendmp",
  description: "A SASS company",
};

export default function ProductLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className]}>
        <div className="flex flex-row justify-start">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
