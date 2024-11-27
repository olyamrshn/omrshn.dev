import { Link, createFileRoute } from "@tanstack/react-router"
import { monthData } from "~/data/monthData"

function YearComponent() {
  const { year } = Route.useParams()
  const yearData = monthData[year as keyof typeof monthData]

  if (!yearData) {
    return <div>Year not found</div>
  }

  return (
    <div className="text-center text-md flex flex-col items-center justify-center">
      <Link to="/notes" className="text-sm opacity-60 hover:opacity-100">
        ← Back to notes
      </Link>
      <h1 className="pt-10 opacity-50 hover:opacity-80 transition-opacity duration-300">
        {year}
      </h1>
      <ul className="mt-5 space-y-5">
        {Object.entries(yearData).map(([month, data]) => (
          <li key={month}>
            <Link
              to={`/notes/${year}/${month}`}
              className="hover:opacity-60 transition-opacity duration-300"
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Route = createFileRoute("/notes/$year/")({
  component: YearComponent,
})
