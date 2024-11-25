import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

function CVComponent() {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-white">
      <p className="text-lg mb-8 max-w-2xl text-start">
        Hey, I'm a frontend developer based in Madrid. I work on{" "}
        <Link
          to="/cv"
          className="text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          open source projects
        </Link>{" "}
        and write{" "}
        <Link
          to="/diary"
          className="text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          notes in my diary
        </Link>{" "}
        in my free time.
      </p>
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: CVComponent,
})
