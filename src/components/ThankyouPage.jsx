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
    <div className="thankyou-page overflow-hidden h-screen w-full bg-[#1A1625] flex flex-col items-center justify-center">
      <div
        ref={card}
        className="w-[65%] h-[80%] rounded-3xl bg-[#B8A8FF] flex flex-row items-center"
      >
        <div className="flex flex-col justify-start items-start h-full gap-3 p-14">
          <div className="w-max p-4 py-2 rounded-xl bg-[#F6F1E9] font-inter">
            You've reached the end!
          </div>
          <div className="relative">
            <h1 className="font-clash text-[#1A1625] text-9xl font-bold">
              Thank
            </h1>
            <h1 className="text-start font-clash text-[#F6F1E9] text-9xl font-bold">
              You!
            </h1>
            <h1 className="font-caveat text-[#fe409f] font-semibold text-4xl -rotate-12 absolute right-0 bottom-24">
              for visiting my portfolio
            </h1>
            <p className="w-full pl-6 pt-2 font-inter">
              I appriciate you taking the time to explore my work and journey.
              Let's build something amazing together!
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
