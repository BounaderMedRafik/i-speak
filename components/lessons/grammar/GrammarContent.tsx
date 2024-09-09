import { Lessons } from "@/data/lessons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const GrammarContent = () => {
  return (
    <div className=" max-w-7xl mx-auto p-5 md:p-0">
      <div className="md:flex block items-top justify-between">
        <div className="text-3xl font-bold max-w-md">
          Master Grammar with Expert Guidance
        </div>
        <div className=" text-sm opacity-75 max-w-md">
          To truly master the intricacies of grammar and elevate your language
          skills to a professional level, there&apos;s no substitute for
          learning from the best. By seeking out expert guidance and engaging in
          structured, professional instruction, you can gain a deep
          understanding of grammatical principles, develop a keen eye for
          errors, and learn to communicate effectively and confidently in any
          setting. Whether you&apos;re aiming to enhance your writing abilities,
          improve your public speaking skills, or simply refine your language
          use, investing in professional grammar instruction can be a valuable
          and rewarding endeavor.
        </div>
      </div>
      <div>
        <LessonsList />
      </div>
    </div>
  );
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const LessonsList = () => {
  return (
    <div className=" pt-24 md:grid block gap-4 grid-cols-3">
      {Lessons.filter((item) => item.Type == "GrammarRules").map((item, i) => (
        <div key={i}>
          <LessonTemp
            id={item.id}
            title={item.title}
            iframe={item.iframe}
            Type={item.Type}
            thumbnail={item.thumbnail}
            duration={item.duration}
            dateAdded={item.dateAdded}
            watchedHours={getRandomInt(304)}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

const LessonTemp = ({
  id,
  title,
  iframe,
  Type,
  thumbnail,
  description,
  duration,
  dateAdded,
  watchedHours,
}: {
  id: string;
  title: string;
  iframe: React.ReactNode;
  Type: string;
  thumbnail: string;
  duration: string;
  description: string;
  dateAdded: string;
  watchedHours: number;
}) => {
  return (
    <Link href={`/lessons/lesson/${id}`}>
      <div className="pb-10 hover:opacity-75 transition-all hover:-translate-y-1">
        <div className=" w-full h-64 rounded-2xl overflow-hidden relative">
          <div
            className={cn(
              " w-fit absolute text-sm  bg-transparent right-4 top-4 text-background px-4 py-2 rounded-full",
              Type.includes("Vocabulary")
                ? " bg-green-700"
                : Type == "GrammarRules"
                ? "bg-purple-600"
                : Type == "SpeakingTips"
                ? " bg-blue-600"
                : null
            )}
          >
            {Type}
          </div>
          <div className="w-fit absolute text-xs bg-foreground text-background right-4 bottom-4 px-4 py-1 rounded-full">
            {duration}
          </div>
          <img
            className=" h-full w-full object-cover object-center"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className=" font-semibold mt-4 ">{title}</div>
        <div className="text-sm opacity-75 mt-3  line-clamp-3">
          {description}
        </div>
        <div className=" mt-3 text-sm opacity-60 flex  gap-4 items-center">
          <div>{watchedHours}K views</div>
          <div>―</div>
          <div>{dateAdded}</div>
        </div>
      </div>
    </Link>
  );
};

export default GrammarContent;
