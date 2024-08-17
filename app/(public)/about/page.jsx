export const metadata = {
  title: "About Us | Legendmp Technologies",
  description:
    "How we Started ? Our Mission & Goals | Legendmp Technologies is a Website Development company. We serve Mobile and Web applications to our clients.",
};
function AboutPage() {
  return (
    <main className="page">
      <div className="w-full max-w-2xl">
        <div className="page-head px-5 py-7">
          <span className="caption text-white">
            Our mission is to create innovative technology that revolutionize
            the way we live and Enhance the human experience
          </span>
        </div>
        <div className="px-5 py-7">
          <div className="w-full max-w-2xl my-5">
            <h2>How we started ? </h2>
            <p>
              At LegendMP Technologies, we are driven by passion and innovation.
              Founded by Mohan Prasath S on April 30, 2022, our journey began
              with a vision – to create new technology for the betterment of
              human life. With a dedicated team of experts, we have been
              consistently pushing the boundaries of what&apos possible in the
              digital realm.
            </p>
          </div>
          <div>
            <h2>Core Values</h2>
            <div className="px-5">
              <ul>
                <li>
                  <b>Innovation</b> We constantly explore new horizons, pushing
                  the envelope of technology to create innovative solutions.
                </li>
                <li>
                  <b>Customer-Centric Approach</b> Your satisfaction is our
                  priority. We strive to exceed your expectations with every
                  product and service we offer.
                </li>
                <li>
                  <b>Integrity</b> Trust and honesty form the foundation of our
                  relationships, both with our clients and within our team.
                </li>
                <li>
                  <b>Continuous Growth</b> We believe in continuous learning and
                  evolution, adapting to the ever-changing technological
                  landscape.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
