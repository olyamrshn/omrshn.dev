import { createServerFn } from "@tanstack/start"

export const $index = createServerFn({ method: "GET" }).handler(async () => {
  return { message: "test" }
})
