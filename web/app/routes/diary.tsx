import { Link, createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <div className="text-center text-md flex flex-col items-center justify-center">
      <h1 className="pt-10">Diary</h1>
      <p className="mt-5 px-4 lg:w-1/3">
        This blog will feature short notes, Spotify songs, and photos that I'll
        strive to post every month. If you're reading this, I'm delighted that
        my thoughts have captured your interest! code is{" "}
        <a
          href="https://github.com/marshennikovaolga/dear-diary"
          className="italic text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
      </p>
      <img
        src="https://images.omrshn.dev/sea.jpeg"
        alt="deary cover"
        width={600}
        height={300}
        className="mt-8 max-w-full h-auto"
      />
      <Link
        to="/notes"
        className="mt-5 hover:opacity-60 transition-opacity text-white duration-300"
      >
        NOTES
      </Link>
      <p className="py-3 font-thin opacity-60">
        travel thoughts and reflections
      </p>
    </div>
  )
}

export const Route = createFileRoute("/diary")({
  component: RouteComponent,
})
