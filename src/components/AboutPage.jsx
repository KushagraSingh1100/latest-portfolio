import kushagra from "../assets/kushagra.jpeg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutPage = () => {
  const heading = useRef(null);
  const image = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(heading.current, {
        opacity: 0,
        x: -100,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",

        scrollTrigger: {
          trigger: heading.current,
          start: "top 80%",
        },
      });

      gsap.from(".about", {
        opacity: 0,
        x: -100,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".about-us",
          start: "20% 10%",
        },
      });
      gsap.from(image.current, {
        opacity: 0,
        scale: 0.2,
        x: 100,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".about-us",
          start: "20% 10%",
        },
      });
    },
    { scope: ".about-us" },
  );

  return (
    <div className="about-us w-full flex justify-center bg-[#F6F1E9] overflow-x-hidden">
      <div className="w-[95%] min-h-screen lg:h-screen bg-[#F6F1E9] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0 px-4 py-10 md:p-10">
        <div className="flex flex-col justify-between w-full lg:w-[60%] gap-6">
          <h1
            ref={heading}
            className="text-[#4C358F] font-clash text-3xl sm:text-4xl lg:text-5xl"
          >
            About Me
          </h1>
          <div className="font-inter text-[#4B445A] flex flex-col gap-3 text-sm sm:text-base">
            <p className="about">
              I’m Kushagra Singh, a frontend developer and Computer Science
              engineering student passionate about building immersive,
              interactive, and visually engaging digital experiences.{" "}
            </p>
            <p className="about">
              {" "}
              I enjoy transforming ideas into clean and responsive interfaces
              using React, Tailwind CSS, GSAP, and modern web technologies. My
              focus lies in creating websites that not only function smoothly
              but also feel dynamic and memorable.{" "}
            </p>
            <p className="about">
              {" "}
              Beyond frontend development, I’m also exploring AI-powered
              applications, full-stack development, and creative user
              experiences. I love experimenting with animations, layouts, and
              aesthetics to craft interfaces that blend design with
              functionality.{" "}
            </p>
            <p className="about">
              {" "}
              Currently, I’m working on projects involving generative AI, NLP,
              and modern web applications while continuously improving my skills
              as a developer and designer.
            </p>
          </div>
        </div>
        <div>
          <img
            ref={image}
            className="rounded-lg w-52 sm:w-64 md:w-72 lg:w-80"
            src={kushagra}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
