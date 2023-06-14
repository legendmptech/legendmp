import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      {/* <div className="banner-container">
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg"
          alt="banner"
          fill={true}
          className="header_img"
          priority
        />
        <div className="banner-backdrop"></div>
      </div> */}
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
