import { Lessons } from "@/data/lessons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AllVocLessons = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex items-top justify-between">
        <div className="text-3xl font-bold">
          Learn Vocabulary From{" "}
          <span className="text-accent">Proffisonals</span>
        </div>
        <div className=" text-sm opacity-75 max-w-md">
          By learning vocabulary from professionals, you can significantly
          enhance your language skills. Their expertise and experience can
          provide you with accurate information, real-world applications, and
          effective teaching methods. Whether you choose to take language
          classes, seek private tutoring, join language exchange programs,
          attend workshops, or utilize online resources, the guidance of
          professionals can help you expand your vocabulary, improve your
          communication abilities, and open up new opportunities
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
      {Lessons.filter((item) => item.Type == "Vocabulary").map((item, i) => (
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

export default AllVocLessons;
