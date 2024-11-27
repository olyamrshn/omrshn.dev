import * as React from "react"
import { createFileRoute, Outlet } from "@tanstack/react-router"

function NotesLayout() {
  return (
    <div className="text-center text-md flex flex-col items-center justify-center">
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute("/notes/_layout")({
  component: NotesLayout,
})
