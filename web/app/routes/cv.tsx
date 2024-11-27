import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Link as LinkIcon } from "lucide-react"

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
})

function RouteComponent() {
  const experience = [
    {
      title: "Learn Anything (2023 - Present)",
      description: [
        "An open-source educational platform featuring thousands of curated learning topics",
      ],
      link: "https://github.com/learn-anything/learn-anything",
    },
    {
      title: "Zuleika Jewelry (2024 - Present)",
      description: [
        "A comprehensive e-commerce solution including custom interface, product management, and inventory tracking for a jewelry store on Shopify platform",
      ],
      link: "https://github.com/olyamrshn/zuleika-jewelry",
    },
    {
      title: "The Pakt (2024)",
      description: [
        "Protocol for creating and managing escrow contracts for task-based funding",
      ],
      link: "https://github.com/thepakt/app.thepakt.com",
    },
  ]

  const achievements = [
    {
      title: "Winner, TON Paris Hackathon (October 2024)",
      subtitle: "Frontend Developer - TON Todo Escrow Application",
      link: "https://x.com/ton_france/status/1851538025810952193",
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
      title: "Complete CSS: A course by Piccalilli",
      subtitle: "in progress",
      link: "https://piccalil.li",
    },
    {
      title: "Animations.dev",
      link: "https://animations.dev",
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
                  className="text-sm px-4 py-2 bg-inherit
                    border border-neutral-800/30 rounded-lg transition-all duration-300
                    hover:from-neutral-800/30 hover:to-neutral-800/30 hover:bg-neutral-800/10 dark:hover:bg-white/10
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
      link?: string
    }
  }) => (
    <div className="mb-6">
      <h3 className="text-sm font-regular whitespace-normal text-left">
        {item.link ? (
          <a
            href={item.link}
            className="hover:opacity-60 text-black dark:text-white transition-opacity duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon className="w-4 h-4" />
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      {item.subtitle && (
        <p className="text-sm opacity-70 whitespace-normal text-left">
          {item.subtitle}
        </p>
      )}
      {item.description && (
        <p className="text-sm mt-2 opacity-70 whitespace-normal text-left">
          {item.description}
        </p>
      )}
    </div>
  )

  return (
    <div className=" text-black dark:text-white mx-auto my-4 max-w-2xl user-select-none">
      <div className=" text-black dark:text-white mx-auto max-w-screen-md px-4 text-left">
        <h1 className="text-base font-regular mb-3">Marshennikova Olga</h1>

        <Section title="PROFESSIONAL EXPERIENCE">
          {experience.map((item, index) => (
            <ExperienceItem
              key={index}
              item={{
                title: item.title,
                description: item.description?.join(" "),
                link: item.link,
              }}
            />
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
      </div>
    </div>
  )
}
