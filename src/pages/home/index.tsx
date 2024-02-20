import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePage() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        x: -500,
        rotate: -30,
        transformOrigin: "bottom left",
        scrollTrigger: {
          trigger: ".box",
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
          // pin: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="h-fit w-full px-20 tracking-wide">
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="relative w-1/4">
          <p className="absolute -left-1/2 top-0 -rotate-90 text-nowrap text-2xl font-semibold text-neutral-300">
            JOIN THE CELEBRATION AS WE SAY "YES!"
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <div className="relative flex h-fit w-fit justify-center">
            <p className="absolute -left-5 top-5 z-10 text-center font-allison text-7xl text-gold">
              We're
              <br />
              Getting
              <br />
              Married!
            </p>
            <div className="relative w-2/3 border-b-4 border-l-4 border-neutral-500 p-5">
              <span className="absolute -left-4 top-0 block h-1/2 w-4 bg-neutral-50" />
              <img
                src="/img/home.jpg"
                alt="img-perwedding"
                className="w-full animate-fadeInTopRight shadow-md shadow-neutral-500"
              />
              <span className="absolute -bottom-4 right-0 block h-4 w-2/3 bg-neutral-50" />
            </div>
          </div>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-9xl">N + L</p>
          <p className="mt-10 text-3xl font-semibold">Nicole & Lionell</p>
        </div>
      </div>

      <div className="mt-10 flex min-h-screen w-full items-center justify-center font-semibold">
        <div className="box h-96 w-1/4">
          <div className="relative h-fit w-full translate-y-32">
            <img
              src="/img/home-date.jpg"
              alt="bg-home"
              className="-translate-x-1/3 rotate-12 scale-[160%] rounded-sm object-cover opacity-80 shadow-lg shadow-neutral-500 grayscale"
            />
            <h1 className="absolute -top-5 right-0 rotate-3 text-nowrap font-allison text-5xl text-neutral-600">
              127 days to go
            </h1>
          </div>
        </div>

        <div className="w-1/2 text-center">
          <p className="font-allison text-3xl text-gold">The Date</p>
          <h1 className="mb-8 mt-5 text-3xl">
            JUNE <span className="text-[2.6rem]">22, 2024</span>
          </h1>
          <p className="font-allison text-3xl text-gold">Ceremony</p>
          <h2 className="mb-8 mt-5 text-3xl">
            BLUE WATER RESORT
            <br />
            PALMERON, PA 18701
          </h2>
          <p className="font-allison text-3xl text-gold">Reception</p>
          <h2 className="mt-5 text-3xl">RECEPTION TO FOLLOW</h2>
        </div>

        <div className="relative w-1/4">
          <h1 className="absolute top-1/2 -translate-y-1/2 -rotate-90 text-nowrap text-7xl font-light text-neutral-300">
            SAVE THE DATE
          </h1>
        </div>
      </div>
    </div>
  );
}
