import ServicesComp from "./components/ServicesComp";
import RatingsComp from "./components/RatingsComp";

export default function Home() {
  return (
    <main className="page pb-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="hero">
          <h1 className="max-w-prose text-white text-center">
            Streamlining Technology, Simplified by Legendmp Technologies
          </h1>
          <p className="max-w-prose text-gray-200 text-justify">
            At Legendmp Technologies, we are passionate about harnessing the
            power of technology to revolutionize lives and enhance human
            experiences. Our journey is marked by creativity, dedication, and a
            commitment to shaping a future where digital solutions simplify
            complexities and inspire innovation.
          </p>
        </div>
        <div>
          <h2 className="text-center mt-5">
            Why Choose Legendmp Technologies?
          </h2>
          <ServicesComp />
        </div>
        <div className="max-w-5xl flex flex-col align-middle mt-7">
          <h2 className="text-center font-bold">
            What our Customers Say About Us
          </h2>
          <RatingsComp />
        </div>
      </div>
    </main>
  );
}
