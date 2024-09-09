import { Lessons } from "@/data/lessons";
import { cn } from "@/lib/utils";
import { Calendar, Eye } from "lucide-react";
import React from "react";
import Footer from "../marketing/Footer";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const LessonTemplate = ({ id }: { id: string }) => {
  const lesson = Lessons.filter((temp) => temp.id == id)[0];
  return (
    <div className=" max-w-7xl mx-auto p-5 md:px-0">
      <div className="md:flex block mb-5 md:mb-0 items-center  justify-between">
        <h3>{lesson.title}</h3>
        <div>
          <div
            className={cn(
              " w-fit  md:text-sm text-xs  bg-transparent  text-background md:px-4 md:py-2 px-2 py-1 rounded-full",
              lesson.Type.includes("Vocabulary")
                ? " bg-green-700"
                : lesson.Type == "GrammarRules"
                ? "bg-purple-600"
                : lesson.Type == "SpeakingTips"
                ? " bg-blue-600"
                : null
            )}
          >
            {lesson.Type}
          </div>
        </div>
      </div>
      <p>{lesson.description}</p>

      <div className=" overflow-hidden rounded-3xl">{lesson.iframe}</div>

      <div className=" mt-14 flex items-center justify-between text-lg opacity-75">
        <div className="flex items-center gap-3">
          <div className=" text-sm">{lesson.dateAdded}</div>
          <div>
            <Calendar size={15} />
          </div>
        </div>
        <div className="flex items-center  gap-3">
          <div>
            <Eye size={15} />
          </div>
          <div className="text-sm">{getRandomInt(304)}k</div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LessonTemplate;
