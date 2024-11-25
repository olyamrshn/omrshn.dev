import { Link, createFileRoute } from "@tanstack/react-router"
import { monthData } from "~/data/monthData"

function NotesComponent() {
  return (
    <div className="text-center text-md flex flex-col items-center justify-center">
      <h1 className="pt-10">NOTES</h1>
      <ul className="mt-5 space-y-5">
        {Object.keys(monthData).map((year) => (
          <li key={year}>
            <Link
              to={`/notes/${year}`}
              className={`hover:opacity-60 transition-opacity duration-300 ${
                year === "2025" ? "opacity-40" : ""
              }`}
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Route = createFileRoute("/notes")({
  component: NotesComponent,
})
