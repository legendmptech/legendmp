import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div style={{ backgroundColor: "black", width: "100%" }}>
        <div className="banner-left-container">
          <h1 className="banner-text">
            Our mission is to create innovative technology that revolutionizes
            the way we live and enhances the Human Experience
          </h1>
        </div>
        <div className="banner-right-container"></div>
      </div>
    </main>
  );
}
