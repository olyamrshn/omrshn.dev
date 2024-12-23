import { Link, Outlet, createFileRoute } from "@tanstack/react-router"
import { monthData } from "~/data/monthData"
import { useRouter } from "@tanstack/react-router"
import BackLink from "~/components/BackLink"

function NotesComponent() {
  const router = useRouter()
  const segments = router.state.location.pathname.split("/")
  const isRoot = segments.length === 2

  return (
    <div className="text-left text-md flex flex-col justify-center items-center relative">
      {isRoot && (
        <>
          <BackLink to="/diary" label="Diary" />
          <h1 className="pt-10">NOTES</h1>
          <ul className="mt-5 space-y-5">
            {Object.keys(monthData).map((year) => (
              <li key={year}>
                <Link
                  to={`/notes/${year}`}
                  className="opacity-50 hover:opacity-80 transition-opacity duration-300"
                >
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute("/notes/")({
  component: NotesComponent,
})
