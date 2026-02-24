"use client";
import type { IListSkill } from "../type";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const chartConfig = {
  percentage: {
    label: "percentage",
    color: "var(--primary-200)",
  },
} satisfies ChartConfig;

export default function CircleProgress({ skill }: { skill: IListSkill }) {
  const v = Math.max(0, Math.min(100, skill.percentage));

  const data = [
    { name: "progress", value: v },
    { name: "rest", value: 100 - v },
  ];

  return (
    <Card className="w-full flex flex-col justify-between items-center">
      <ChartContainer
        config={chartConfig}
        className="w-40 h-40 md:w-80 md:h-80 half-ratio"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={50}
              startAngle={90}
              endAngle={-270}
              stroke="none"
              isAnimationActive
            >
              <Cell className="fill-secondary" />
              <Cell className="fill-neutral-100" />

              <Label
                position="center"
                content={() => (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-slate-900"
                  >
                    <tspan className="text-xl font-extrabold">{v}%</tspan>
                  </text>
                )}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="flex gap-2 items-center">
        <Image alt="icon" src={skill.icon} className="w-8 h-8" />
        <p className="font-bold">{skill.title}</p>
      </div>
    </Card>
  );
}
