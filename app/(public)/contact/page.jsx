export const metadata = {
  title: "Contact Us | Legendmp Technologies",
  description:
    "Call us : +91 7871448472 | Mail us : s_mohan_prasath@legendmp.com | Legendmp Technologies is a Software company. We serve Mobile and Web applications to our clients.",
};
export default function ContactUs() {
  return (
    <main className="page gap-10">
      <div className="page-head max-w-4xl px-5 py-7">
        <span className="text-center text-white">
          Ready to embark on a technological adventure with Legendmp
          Technologies? Have questions or need assistance? Reach out to us
          today!
        </span>
      </div>
      <div className="flex flex-col gap-4 px-5">
        <h1>Legendmp Technologies</h1>
        <div>
          <h3>Address</h3>
          <p>
            41/24, Anna Street, Anupparpalayam, Tirupur,
            <br />
            Tamil Nadu, India
          </p>
        </div>
        <div>
          <h3>Call Us</h3>
          <p>+91 7871448472</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Time Zone : UTC +5:30</p>
          <h3>Business Hours</h3>
          <p>Monday : 8:30 - 21:30</p>
          <p>Tuesday : 8:30 - 21:30</p>
          <p>Wednesday : 8:30 - 21:30</p>
          <p>Thursday : 8:30 - 21:30</p>
          <p>Friday : 8:30 - 21:30</p>
          <p>Saturday : 8:30 - 21:30</p>
          <p>Sunday : 8:30 - 21:30</p>
        </div>
      </div>
      <h2>Locate Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.60142857883!2d77.31807937467518!3d11.143032989028908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906927ec42f81%3A0x182185a919c5736f!2s41%2C%2024%2C%20Anna%20St%2C%20Velampalayam%2C%20Tiruppur%2C%20A.Thirumuruganpoondi%2C%20Tamil%20Nadu%20641652!5e0!3m2!1sen!2sin!4v1699547842552!5m2!1sen!2sin"
        className="w-2/3 h-[300px] md:h-[400px] md:1/2 max-w-4xl mb-8 md:mb-12"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
