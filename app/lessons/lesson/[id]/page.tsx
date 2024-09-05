import LessonTemplate from "@/components/lessons/LessonTemplate";
import React from "react";

export default function LearningPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      <LessonTemplate id={params.id} />
    </div>
  );
}
