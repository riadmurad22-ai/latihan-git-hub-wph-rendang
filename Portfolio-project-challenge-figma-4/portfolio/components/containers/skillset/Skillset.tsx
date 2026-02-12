import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";

/* images */
import css from "@/assets/img/tech/css.png";
import js from "@/assets/img/tech/js.png";
import mongodb from "@/assets/img/tech/mongodb.png";
import html from "@/assets/img/tech/html.png";
import react from "@/assets/img/tech/react.png";
import docker from "@/assets/img/tech/docker.png";
import express from "@/assets/img/tech/express.png";
import postgres from "@/assets/img/tech/postgres.png";
import CircleProgress from "./circle-progress/CircleProgress";

import type { IListSkill } from "./type";

const listSkill: IListSkill[] = [
  {
    icon: html,
    title: "HTML",
    percentage: 98,
  },
  {
    icon: css,
    title: "CSS",
    percentage: 90,
  },
  {
    icon: js,
    title: "Javascript",
    percentage: 88,
  },
  {
    icon: react,
    title: "React JS",
    percentage: 90,
  },
  {
    icon: mongodb,
    title: "Mongo DB",
    percentage: 70,
  },
  {
    icon: docker,
    title: "Docker",
    percentage: 78,
  },
  {
    icon: express,
    title: "Express JS",
    percentage: 89,
  },
  {
    icon: postgres,
    title: "PostgreSQL",
    percentage: 86,
  },
];

export default function Skillset() {
  return (
    <main className="py-16 bg-primary-200 text-foreground flex flex-col items-center">
      <Button
        size={"sm"}
        variant={"outline"}
        className="bg-transparent rounded-full px-4 mb-4"
      >
        <p className="text-sm">Skillset</p>
      </Button>

      <div className="px-8">
        <h1 className="font-bold text-2xl text-center">
          Skills That Build Great Interfaces
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 p-4 gap-4">
        {listSkill.map((skill) => {
          return (
            <div key={skill.title}>
              <CircleProgress skill={skill} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
