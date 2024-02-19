import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Itinerary() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-20 text-6xl">ITINEARAY</h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="mb-5 font-sans text-2xl text-neutral-400"
      >
        June 21, 2024
      </p>
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="mb-6 text-5xl font-semibold"
      >
        FRIDAY
      </h1>
      <span
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="h-7 w-0.5 bg-neutral-500"
      />
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="mb-5 font-allison text-7xl text-gold"
      >
        marriage contract
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="mb-6 text-2xl font-semibold"
      >
        8:00 am - 10:00 am
      </p>
      <span
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="h-14 w-0.5 bg-neutral-500"
      />
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="mb-5 font-allison text-7xl text-gold"
      >
        wedding reception
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="text-2xl font-semibold"
      >
        11:00 am - until finish
      </p>
    </div>
  );
}
