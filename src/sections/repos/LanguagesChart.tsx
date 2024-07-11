"use client";

import { Bar, BarChart, Label, Pie, PieChart, Sector } from "recharts";

import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface LanguagesChartProps {
  data: Record<string, number>;
}

export default function LanguagesChart({ data }: LanguagesChartProps) {
  const values = Object.keys(data).map((key, index) => ({
    language: key,
    value: data[key],
    fill: `hsl(var(--chart-${(index % 5) + 1}))`,
  }));

  const chartConfig = {} satisfies ChartConfig;

  return (
    <div className="grid grid-cols-2 items-center">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square m-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={values}
            dataKey="value"
            nameKey="language"
            innerRadius={60}
            paddingAngle={values.length > 1 ? 5 : 0}
            strokeWidth={5}
          ></Pie>
        </PieChart>
      </ChartContainer>
      <div className="flex flex-wrap gap-2">
        {values.map((lan) => (
          <Badge
            style={{
              backgroundColor: lan.fill,
            }}
            key={lan.language}
          >
            {lan.language}
          </Badge>
        ))}
      </div>
    </div>
  );
}
