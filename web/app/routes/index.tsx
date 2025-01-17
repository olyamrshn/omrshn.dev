import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import anime from "animejs"
import { useEffect } from "react"
import Snowfall from "../components/Snowfall"
import "../styles/app.css"
import {
  faInstagram,
  faGithub,
  faXTwitter,
  faSpotify,
  faDiscord,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"

function MainComponent() {
  useEffect(() => {
    anime({
      targets: ".text-animate",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(200),
      easing: "easeOutElastic(1, .6)",
    })

    anime({
      targets: ".icon-animate",
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(100, { start: 500 }),
      easing: "spring(1, 60, 10, 0)",
    })
  }, [])

  const links = [
    { icon: faGithub, href: "https://github.com/olyamrshn" },
    { icon: faXTwitter, href: "https://twitter.com/leatbabies" },
    { icon: faDiscord, href: "https://discord.com/users/704485765010161966" },
    { icon: faGoogle, href: "mailto:olyamrshn@gmail.com" },
    {
      icon: faSpotify,
      href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7",
    },
    { icon: faInstagram, href: "https://www.instagram.com/olmrshn" },
  ]

  return (
    <div className="min-h-screen p-8 flex flex-col max-w-xl mx-auto text-left items-start justify-center text-black dark:text-white space-y-2">
      <Snowfall />
      <p className="text-animate">
        Hi there! I'm a frontend developer based in Madrid
        <span className="text-lg pl-1">𓍯𓂃</span>
      </p>
      <p className="text-animate w-11/12 tracking-tighter">
        {" "}
        Enjoy contributing to{" "}
        <Link
          to="/cv"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          open source projects
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>{" "}
        and keeping{" "}
        <Link
          to="/diary"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          a dev-live journal
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>{" "}
        in my spare time.
      </p>
      <div className="flex flex-row gap-6 mt-10 self-start">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-inherit opacity-70 hover:opacity-50 transition-opacity duration-300 icon-animate no-underline [&_svg]:!text-inherit [&_svg]:!fill-current"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: MainComponent,
})
