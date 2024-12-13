import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { monthData } from "~/data/monthData"
import BackLink from "~/components/BackLink"
import Cake from "~/components/Cake"

function YearComponent() {
  const { year } = Route.useParams()
  const yearData = monthData[year as keyof typeof monthData]

  if (!yearData) {
    return <div>Year not found</div>
  }

  return (
    <div className="text-md flex flex-col items-center justify-center relative">
      <div className="w-fit">
        <BackLink to="/notes" label="Notes" />
        <h1 className="pt-[5em] opacity-50 hover:opacity-80 transition-opacity duration-300">
          {year}
        </h1>
        <ul className="mt-5 space-y-5">
          {Object.entries(yearData).map(([month, data]) => (
            <li key={month}>
              <Link
                to={`/notes/${year}/${month}`}
                className="hover:opacity-60 transition-opacity duration-300 flex items-center gap-2"
              >
                {month === "december" && <Cake />}
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/notes/$year/")({
  component: YearComponent,
})
