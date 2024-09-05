import { Lessons } from "@/data/lessons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SpeakingTipsContent = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex items-top justify-between">
        <div className="text-3xl font-bold max-w-md">
          Speak Properly with the best lessons from the best teachers
        </div>
        <div className=" text-sm opacity-75 max-w-md">
          To achieve effective and articulate communication, it's essential to
          learn from the experts. By seeking out the guidance of skilled and
          experienced teachers, you can develop a strong foundation in proper
          speech, pronunciation, and articulation. Through personalized
          instruction and targeted practice, you'll gain the confidence and
          ability to express yourself clearly and effectively in both formal and
          informal settings. Whether you're aiming to improve your public
          speaking skills, enhance your professional communication, or simply
          refine your everyday conversations, learning from the best teachers
          can make a significant difference in your ability to speak with
          clarity and confidence.
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
    <div className=" pt-24 grid gap-4 grid-cols-3">
      {Lessons.filter((item) => item.Type == "SpeakingTips").map((item, i) => (
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

export default SpeakingTipsContent;
