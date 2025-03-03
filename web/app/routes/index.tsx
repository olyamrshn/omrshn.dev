import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import anime from "animejs"
import { useEffect } from "react"
import "../styles/app.css"
import {
  faInstagram,
  faGithub,
  faXTwitter,
  faDiscord,
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
    { icon: faDiscord, href: "https://discord.com/users/704485765010161966" },
<<<<<<< HEAD
    { icon: faGoogle, href: "mailto:olyamrshn@gmail.com" },
    {
      icon: faSpotify,
      href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7",
    },
    { icon: faInstagram, href: "https://www.instagram.com/olmrshn" },
=======
    { icon: faXTwitter, href: "https://twitter.com/leatbabies" },
    { icon: faInstagram, href: "https://www.instagram.com/olyamrshn" },
>>>>>>> d22e683 (.)
  ]

  return (
    <div className="min-h-screen p-8 flex flex-col max-w-xl mx-auto text-left items-start justify-center text-black dark:text-white space-y-2">
      <p className="text-animate">
        Hi, I'm a frontend developer based in Madrid.
        <span className="text-lg pl-1">𓍯𓂃</span>
      </p>
      <p className="text-animate w-11/12 group tracking-tighter">
        Love contributing to impactful projects and building Telegram mini apps.{" "}
        Here is my CV with some{" "}
        <Link
          to="/cv"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          open source projects
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>{" "}
        I've worked on.
      </p>
      <p className="text-animate w-11/12 tracking-tighter">
        I also share playlists on{" "}
        <a
          href="https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          Spotify
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>{" "}
        and track films on{" "}
        <a
          href="https://letterboxd.com/olyamrsh"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          Letterboxd
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
        .
      </p>
      <p className="text-animate w-11/12 tracking-tighter">
        Currently open to collaboration, feel free to{" "}
        <a
          href="mailto:olyamrshn@gmail.com"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          send me an email
        </a>{" "}
        or{" "}
        <a
          href="https://x.com/leatbabies"
          className="relative text-black dark:text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer inline-block group"
        >
          DM me on X
        </a>
        .
      </p>
      <div className="flex flex-row gap-6 mt-[2em] self-start">
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
