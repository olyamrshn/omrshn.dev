import { createFileRoute } from "@tanstack/react-router"
import { monthData } from "~/data/monthData"
import Month from "~/components/Month"

export const Route = createFileRoute("/notes/$year/$month")({
  component: MonthComponent,
})

function MonthComponent() {
  const { year, month } = Route.useParams()
  console.log("Route params:", { year, month })

  const yearData = monthData[year as keyof typeof monthData]
  console.log("Year data:", yearData)

  if (!yearData) {
    console.log("Year not found")
    return <div>Year not found</div>
  }

  const monthInfo = yearData[month]
  console.log("Month info:", monthInfo)

  if (!monthInfo) {
    console.log("Month not found")
    return <div>Month not found</div>
  }

  const months = Object.keys(yearData)
  const currentIndex = months.indexOf(month)
  const prevMonth = currentIndex > 0 ? months[currentIndex - 1] : undefined
  const prevMonthName = prevMonth
    ? yearData[prevMonth]?.title.split(" ")[0]
    : undefined

  const nextMonth =
    currentIndex < months.length - 1 ? months[currentIndex + 1] : undefined
  const nextMonthName = nextMonth
    ? yearData[nextMonth]?.title.split(" ")[0]
    : undefined

  return (
    <div className="pt-10">
      <Month
        title={monthInfo.title}
        content={monthInfo.content}
        images={monthInfo.images}
        prevMonth={prevMonth ? `${year}/${prevMonth}` : undefined}
        nextMonth={nextMonth ? `${year}/${nextMonth}` : undefined}
        prevMonthName={prevMonthName}
        nextMonthName={nextMonthName}
        year={year}
      />
    </div>
  )
}
