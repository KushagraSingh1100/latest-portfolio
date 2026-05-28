import bingo from "../assets/bingo.png";
import amibot from "../assets/amibot.png";
import freework from "../assets/freework.jpg";
import rapid from "../assets/rapid.png";
import event from "../assets/event.png";
import transfer from "../assets/transfer.png";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const heading = useRef(null);
  const rightHeading = useRef(null);
  const projectPage = useRef(null);
  const projectGrid = useRef(null);
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
      gsap.from(rightHeading.current, {
        opacity: 0,
        x: 100,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",

        scrollTrigger: {
          trigger: rightHeading.current,
          start: "top 80%",
        },
      });
      gsap.from(".project-card", {
        y: 100,
        scale: 0.2,
        rotateY: 90,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.5,
        ease: "ease.in",
        scrollTrigger: {
          trigger: projectPage.current,
          start: "top 85%",
        },
      });
    },
    { scope: projectPage },
  );
  return (
    <div
      ref={projectPage}
      className="project-page w-full h-max bg-[#B8A8FF] flex flex-col justify-between items-center gap-10 p-10"
    >
      <div className="flex flex-row justify-between w-full relative">
        <h1
          ref={heading}
          className="text-[#1F1A2E] font-clash leading-none font-bold tracking-tight text-8xl"
        >
          Featured
        </h1>
        <h1 className="absolute font-caveat left-[22%] top-[0%] rotate-[-6deg] text-[#fa88c1] text-[5vw] drop-shadow-[0px_10px_100px_rgba(255,183,213,1)]">
          Projects
        </h1>
        <div
          ref={rightHeading}
          className="font-inter w-[25%] flex flex-col gap-3 items-start"
        >
          <p className="text-sm">
            A collection of projects I've worked on, showcasing my skills in
            frontend development, design and problem solving.{" "}
          </p>
          <a
            href=""
            className="w-max py-2 px-4 rounded-2xl flex items-center gap-2 bg-[#1F1A2E] text-white"
          >
            View All Projects <ArrowUpRight className="w-5" />
          </a>
        </div>
      </div>
      <div ref={projectGrid} className="w-[90%] grid grid-cols-3 gap-x-7 gap-y-3 perspective-[1000px]">
        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={transfer}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex-1 rounded-md pb-5 flex flex-col justify-between overflow-x-scroll no-scrollbar">
            <div>
              <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
                Transfer Buddy
              </h1>

              <p className="font-inter text-[#4B445A] mt-1 leading-6 text-[15px] line-clamp-4 w-[85%]">
                A browser-based file sharing platform built using PeerJS that
                enables fast and secure peer-to-peer file transfer without
                requiring uploads to a server.
              </p>
              <ChevronRight
                className="absolute right-7 bottom-3 text-black"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>

        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={rapid}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className=" flex-1 rounded-md pb-5 overflow-x-scroll no-scrollbar">
            <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
              Rapid Shortener
            </h1>

            <p className="font-inter text-[#4B445A] mt-1 leading-6 text-[15px] line-clamp-4 w-[85%]">
              A minimal and efficient URL shortener that converts long URLs into
              short shareable links with fast redirection.
            </p>
            <ChevronRight
              className="absolute right-7 bottom-3 text-black"
              strokeWidth={3}
            />
          </div>
        </div>

        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={freework}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className=" flex-1 rounded-md pb-5 overflow-x-scroll no-scrollbar">
            <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
              FreeWork
            </h1>

            <p className="font-inter text-[#4B445A] mt-1 leading-6 text-[15px] line-clamp-4 w-[85%]">
              A freelancing platform connecting clients and freelancers with
              project posting, bidding, collaboration, and communication
              features.
            </p>
            <ChevronRight
              className="absolute right-7 bottom-3 text-black"
              strokeWidth={3}
            />
          </div>
        </div>
        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={event}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className=" flex-1 rounded-md pb-5 overflow-x-scroll no-scrollbar">
            <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
              Event Pulse
            </h1>

            <p className="font-inter text-[#4B445A] mt-2 leading-6 text-[15px] line-clamp-4 w-[85%]">
              An event management system for institutions to organize, manage,
              and track college events, registrations, schedules, and
              announcements.
            </p>
            <ChevronRight
              className="absolute right-7 bottom-3 text-black"
              strokeWidth={3}
            />
          </div>
        </div>

        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={amibot}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="pt-4 flex-1 rounded-md pb-5 overflow-x-scroll no-scrollbar">
            <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
              AmiBot
            </h1>

            <p className="font-inter text-[#4B445A] mt-1 leading-6 text-[15px] line-clamp-4 w-[85%]">
              An AI-powered RAG chatbot designed to help students with
              assignments, document understanding, and contextual question
              answering using custom knowledge retrieval.
            </p>
            <ChevronRight
              className="absolute right-7 bottom-3 text-black"
              strokeWidth={3}
            />
          </div>
        </div>

        <div className="project-card relative h-[55vh] bg-[#f4f2fa] border border-[#DDD6CF] rounded-2xl flex flex-col gap-4 p-4 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={bingo}
              className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className=" flex-1 rounded-md pb-5 overflow-x-scroll no-scrollbar">
            <h1 className="font-clash text-[1.8rem] text-[#8c63ff] font-semibold">
              Bingo
            </h1>

            <p className="font-inter text-[#4B445A] mt-1 leading-6 text-[15px] line-clamp-4 w-[85%]">
              An environmental assistance platform featuring waste segregation
              detection, complaint filing, and community-driven tools.
            </p>
            <ChevronRight
              className="absolute right-7 bottom-3 text-black"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
