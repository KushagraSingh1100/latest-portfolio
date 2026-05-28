import { MoveRight } from "lucide-react";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  const name = useRef(null);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${day} ${month}, ${year}`;

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const t2 = gsap.timeline();
      tl.from(name.current, {
        opacity: 0,

        filter: "blur(20px)",
        duration: 1.5,
        stagger: 0.06,
        ease: "elastic.out(0.1, 2)",
      });

      tl.to(
        name.current,
        {
          y: "-=15",
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.05,
            from: "random",
          },
          ease: "sine.inOut",
        },
        "-=1",
      );
      t2.from(".top", {
        y: -100,
        filter: "blur(20px)",
        duration: 1,
        stagger: 0.06,
        ease: "elastic.out(1, 1)",
      });
      t2.from(
        ".social-item",
        {
          y: 100,
          filter: "blur(20px)",
          duration: 1,
          stagger: 0.1,
          ease: "elastic.out(1, 1)",
        },
        "-=1",
      );
    },
    { scope: ".home-screen" },
  );

  return (
    <div className="home-screen p-1 h-screen bg-[#F6F1E9]">
      <div className="p-6 w-full h-full bg-[#1F1A2E] flex flex-col justify-between items-center">
        <div className="font-clash w-[90%] text-[#CFC8E8] flex flex-row justify-between items-center">
          <div>
            <h1 className="top">Creative</h1>
            <h1 className="top">Presentation</h1>
          </div>
          <h1 className="top flex gap-4 items-center">
            {formattedDate} <MoveRight />{" "}
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <h1 className="font-clash text-[#F8F7FC] text-[18vw] leading-none font-extrabold tracking-tight">
            Portfolio
          </h1>

          <h1
            ref={name}
            className="absolute font-caveat text-[#CFA1F6] text-[8vw] rotate-[-6deg] drop-shadow-[0px_10px_100px_rgba(255,183,213,1)]"
          >
            Kushagra Singh
          </h1>
        </div>
        <div className="w-full px-10 pb-2 flex flex-row justify-between items-center">
          <div className="social-item flex text-[#F8F7FC] flex-row gap-3 items-center">
            <a className="flex flex-row items-center gap-3" href="">
              <div className="bg-[#CFA1F6] p-3 rounded-full">
                <img className="w-6" src={linkedin} alt="" />
              </div>
              <p className="text-lg font-inter">Kushagra Singh</p>
            </a>
          </div>
          <div className="social-item flex text-[#F8F7FC] flex-row gap-3 items-center">
            <a className="flex flex-row items-center gap-3" href="">
              <div className="bg-[#CFA1F6] p-3 rounded-full">
                <img className="w-6" src={gmail} alt="" />
              </div>
              <p className="text-lg font-inter">kushagrasingh1100@gmail.com</p>
            </a>
          </div>
          <div className="social-item flex text-[#F8F7FC] flex-row gap-3 items-center">
            <a className="flex flex-row items-center gap-3" href="">
              <div className="bg-[#CFA1F6] p-3 rounded-full">
                <img className="w-6" src={instagram} alt="" />
              </div>
              <p className="text-lg font-inter">kushagraasinghh</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
