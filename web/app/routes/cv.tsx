import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faGithub,
  faTwitter,
  faSpotify,
  faDiscord,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
})

function RouteComponent() {
  const links = [
    { icon: faInstagram, href: "https://www.instagram.com/olyamrshn" },
    { icon: faGithub, href: "https://github.com/olyamrshn" },
    { icon: faTwitter, href: "https://twitter.com/leatbabies" },
    {
      icon: faSpotify,
      href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7",
    },
    { icon: faDiscord, href: "https://discord.com/users/704485765010161966" },
    { icon: faGoogle, href: "mailto:olyamrshn@gmail.com" },
  ]

  const experience = [
    {
      title: "Learn Anything | Frontend Dev (2023 - Present)",
      points: [
        "frontend development for an open-source educational platform featuring thousands of curated learning topics",
        "Implemented core features including user notes, task management, and advanced search functionality",
      ],
    },
    {
      title: "Zuleika Jewelry | Frontend Dev (2024 - Present)",
      points: [
        "Developed and launched a comprehensive e-commerce interface for a jewelry store on Shopify platform",
        "Implemented responsive product galleries, collection displays, and detailed product cards",
      ],
    },
  ]

  const achievements = [
    {
      title: "Winner, TON Paris Hackathon (October 2024)",
      subtitle: "Frontend Developer - TON Todo Escrow Application",
      description:
        "frontend development of a Telegram mini-app connecting entrepreneurs with investors via a task-based escrow system. A secure platform allowing entrepreneurs to structure projects into funded tasks while protecting investor assets through blockchain-based escrow functionality.",
      points: [
        "Implemented intuitive UI for project creation and investment workflows",
        "Built dispute resolution interface with automated moderator chat system",
        "Collaborated on smart contract integration with backend team",
      ],
    },
  ]

  const additionalEducation = [
    {
      title:
        "Yandex Practicum | Frontend Full Development Course - 2022 (1 year)",
      points: [
        "Frontend development fundamentals",
        "React and modern web technologies",
      ],
    },
    {
      title: "Animations.dev",
      points: [
        "Advanced web animations",
        "CSS and JavaScript animation techniques",
      ],
    },
  ]

  const SkillsSection = () => {
    const skills = {
      "Core Technologies": ["TypeScript", "REST API", "Three.js"],
      "Frameworks & Libraries": [
        "React.js",
        "Next.js",
        "React Native",
        "TailwindCSS",
        "Tanstack Query",
        "Framer Motion",
      ],
    }

    return (
      <section className="my-4">
        <h2 className="text-base font-regular mb-4 text-left">
          TECHNICAL SKILLS
        </h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm mb-3 text-left">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20
                    border border-purple-500/30 rounded-lg transition-all duration-300
                    hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50
                    hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    )
  }

  const Section = ({
    title,
    children,
  }: {
    title: string
    children: React.ReactNode
  }) => (
    <section className="my-4">
      <h2 className="text-base font-regular mb-4 text-left">{title}</h2>
      {children}
    </section>
  )

  const ExperienceItem = ({
    item,
  }: {
    item: {
      title: string
      subtitle?: string
      description?: string
      points?: string[]
    }
  }) => (
    <div className="mb-6">
      <h3 className="text-sm font-regular whitespace-normal text-left">
        {item.title}
      </h3>
      {item.subtitle && (
        <p className="text-sm opacity-70 whitespace-normal text-left">
          {item.subtitle}
        </p>
      )}
      {item.description && (
        <p className="text-sm mt-2 whitespace-normal text-left">
          {item.description}
        </p>
      )}
      {item.points && (
        <ul className="text-sm list-disc pl-4 mt-2 opacity-70">
          {item.points.map((point, index) => (
            <li key={index} className="whitespace-normal mb-2 text-left">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <div className="text-white mx-auto my-4 max-w-3xl user-select-none">
      <div className="text-white mx-auto max-w-screen-md px-4 text-left">
        <h1 className="text-base font-regular mb-3">Marshennikova Olga</h1>

        <Section title="PROFESSIONAL EXPERIENCE">
          {experience.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </Section>

        <Section title="ACHIEVEMENTS">
          {achievements.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </Section>

        <Section title="COURSES">
          {additionalEducation.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </Section>

        <SkillsSection />

        <div className="flex flex-row justify-center gap-6 mt-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xl hover:text-purple-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
