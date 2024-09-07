import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import {
  ArrowRight,
  Award,
  Book,
  Languages,
  Laugh,
  LetterText,
  Smile,
  SpeakerIcon,
  Users,
} from "lucide-react";

const fets = [
  {
    title: "Vocabulary",
    desc: "this is where you will enlarge your dictionary of words of different topics. You can find helpful videos on how to pronounce them too!",
    icon: <Book />,
  },
  {
    title: "Grammar rules",
    desc: "This section offers you the best resources of master the English language rules and how to use them via a clear explanation videos. It's time to speak accurately!",
    icon: <LetterText />,
  },
  {
    title: " Speaking tips",
    desc: "dive into the valuable videos that give you practical tips to help you not only on speaking English fluently, but also effectively and confidently. Check the tips now!",
    icon: <Laugh />,
  },
  {
    title: "Ispeak Family",
    desc: "you are part of our family and we are pleased to share with you what's inside the walls of our center. Check Ispeak Center's classes, achievements and behind the scenes moments in this section. Become an Ispeaker!",
    icon: <Users />,
  },
];

const Feutres = () => {
  return (
    <section className="py-16 md:py-0 ">
      <div className="mx-auto max-w-7xl  ">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <div className="text-4xl uppercase font-black lg:mb-6 mx-auto max-w-full w-full lg:max-w-2xl lg:mx-0">
              lessons provided{" "}
              <span className=" italic pr-1 text-primary">specifically </span>{" "}
              for you
            </div>
          </div>
          <div className="relative w-full text-center  md:text-left  flex flex-col md:items-end items-center justify-end">
            <div className="text-sm font-normal text-center md:text-end  opacity-75 max-w-xs mb-5">
              Experience the personalized learning journey designed just for
              you.
            </div>
            <Link
              href={"/lessons"}
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              <div className="flex items-center gap-2">
                <div>CHECK LESSONS</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-7xl grid grid-cols-1  md:grid-cols-4 gap-5 px-7 md:px-0">
        {fets.map((item, i) => {
          return (
            <div
              key={i}
              className="  bg-gray-100 dark:bg-gray-900  cursor-default group p-6 rounded-2xl transition-all flex flex-col hover:bg-accent dark:hover:bg-accent hover:text-background "
            >
              <div className="  bg-accent text-background  transition-all group-hover:ml-6 group-hover:bg-background group-hover:text-accent p-5 size-fit rounded-full">
                {item.icon}
              </div>
              <div className="mt-4 text-2xl font-bold">{item.title}</div>
              <div className="mt-6 text-sm opacity-70">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feutres;
