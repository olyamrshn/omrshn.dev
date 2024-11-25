import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faGithub,
  faXTwitter,
  faSpotify,
  faDiscord,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"

function CVComponent() {
  const links = [
    { icon: faGithub, href: "https://github.com/olyamrshn" },
    { icon: faXTwitter, href: "https://twitter.com/leatbabies" },
    { icon: faDiscord, href: "https://discord.com/users/704485765010161966" },
    { icon: faGoogle, href: "mailto:olyamrshn@gmail.com" },
    {
      icon: faSpotify,
      href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7",
    },
    { icon: faInstagram, href: "https://www.instagram.com/olyamrshn" },
  ]

  return (
    <div className="min-h-screen p-8 flex flex-col max-w-xl mx-auto text-left items-start justify-center text-white space-y-2">
      <p>Hi there! I'm a frontend developer based in Madrid.</p>
      <p>
        {" "}
        Enjoy contributing to{" "}
        <Link
          to="/cv"
          className="text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          open source projects
        </Link>{" "}
        and keeping{" "}
        <Link
          to="/diary"
          className="text-white opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          a dev & live journal
        </Link>{" "}
        in my spare time.
      </p>
      <div className="flex flex-row gap-6 mt-8 self-start">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-xl text-white opacity-70 hover:opacity-90 transition-opacity duration-300"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: CVComponent,
})
