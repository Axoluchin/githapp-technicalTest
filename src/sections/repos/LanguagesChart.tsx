'use client'

import { Pie, PieChart } from 'recharts'

import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Badge } from '@/components/ui/badge'

export interface LanguagesChartProps {
  data: Record<string, number>
}

export default function LanguagesChart({ data }: LanguagesChartProps) {
  const values = Object.keys(data).map((key, index) => ({
    language: key,
    value: data[key],
    fill: `hsl(var(--chart-${(index % 5) + 1}))`,
  }))

  const chartConfig = {} satisfies ChartConfig

  if (values.length < 1) return null

  return (
    <div className="xl:grid xl:grid-cols-2 items-center xl:space-x-8">
      <ChartContainer
        config={chartConfig}
        className="aspect-square min-h-[100px] sm:min-h-[250px] min-w-[100px] lg:min-w-[200px]"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
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
      <div className="flex flex-wrap gap-2 p-2">
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
  )
}
