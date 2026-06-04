import laptop from "../assets/laptop.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ThankyouPage = () => {
  const card = useRef(null);
  useGSAP(
    () => {
      gsap.from(card.current, {
        opacity: 0,
        scale: 0.2,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",

        scrollTrigger: {
          trigger: card.current,
          start: "top 80%",
        },
      });
    },
    { scope: ".thankyou-page" },
  );
  return (
    <div className="thankyou-page overflow-hidden min-h-screen w-full bg-[#1A1625] flex flex-col items-center justify-center px-4 py-8">
      <div
        ref={card}
        className="w-full max-w-[1400px] md:w-[90%] lg:w-[65%] min-h-max lg:h-[80%] rounded-3xl bg-[#B8A8FF] flex flex-col lg:flex-row items-center"
      >
        <div className="flex flex-col justify-start items-start h-full gap-3 p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="w-max p-3 md:p-4 py-2 rounded-xl bg-[#F6F1E9] font-inter text-sm md:text-base">
            You've reached the end!
          </div>
          <div className="relative w-full">
            <div className="flex flex-col sm:flex-row lg:flex-col">
              <h1 className="font-clash text-[#1A1625] text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">
                Thank
              </h1>

              <h1 className="text-start font-clash text-[#F6F1E9] text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">
                You!
              </h1>

              <h1 className="font-caveat text-[#fe409f] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl -rotate-12 absolute right-12 sm:right-24 lg:right-0 bottom-20 sm:bottom-14 md:bottom-20 lg:bottom-28">
                for visiting my portfolio
              </h1>
            </div>
            <p className="w-full pl-0 sm:pl-2 lg:pl-6 pt-4 text-sm sm:text-base md:text-lg font-inter">
              I appriciate you taking the time to explore my work and journey.
              Let's build something amazing together!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-4 lg:p-0">
          <img
            className="w-full max-w-[450px] xl:max-w-none hidden sm:block"
            src={laptop}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
