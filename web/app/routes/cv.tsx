import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { LinkIcon } from "lucide-react"
import BackLink from "~/components/BackLink"

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
})

function RouteComponent() {
  const [projectState, setProjectState] = React.useState<"current" | "past">(
    "current",
  )

  const projects = {
    current: [
      {
        title: "Learn Anything",
        description:
          "An open-source educational platform featuring thousands of curated learning topics",
        image: "https://images.omrshn.dev/learn-anything.jpeg",
        link: "https://github.com/learn-anything/learn-anything",
      },
      {
        title: "Solbond",
        description: "Digital marketplace for buying and selling digital goods",
        image: "https://images.omrshn.dev/solbond.jpeg",
        link: "https://github.com/solbond/solbond-clean",
      },
    ],
    past: [
      {
        title: "The Pakt",
        description:
          "Protocol for creating and managing escrow contracts for task-based funding",
        image: "https://images.omrshn.dev/pakt.jpeg",
        link: "https://github.com/thepakt/app.thepakt.com",
      },
            {
        title: "Zuleika Jewelry",
        description:
          "A comprehensive e-commerce solution including custom interface, product management, and inventory tracking for a jewelry store on Shopify platform",
        image: "https://images.omrshn.dev/zuleika-store.jpeg",
        link: "https://github.com/olyamrshn/zuleika-jewelry",
      },
    ],
  }

  const achievements = [
    {
      title: "Winner, TON Paris Hackathon (October 2024)",
      subtitle: "TON Todo Escrow Application",
      link: "https://x.com/ton_france/status/1851538025810952193",
      description:
        "frontend development of a Telegram mini-app connecting entrepreneurs with investors via a task-based escrow system. A secure platform allowing entrepreneurs to structure projects into funded tasks while protecting investor assets through blockchain-based escrow functionality.",
    },
  ]

  const additionalEducation = [
    {
      title: "Yandex Practicum | 2022 (1 year)",
      subtitle: "Frontend & Backend basics Development Course",
    },
    {
      title: "Complete CSS: A course by Piccalilli",
      subtitle: "in progress",
      link: "https://piccalil.li",
    },
    {
      title: "Animations.dev",
      subtitle: "Advanced web animations",
      link: "https://animations.dev",
    },
  ]

  const SkillsSection = () => {
    const skills = {
      "CORE TECHNOLOGIES": ["TypeScript", "REST API", "Three.js"],
      "FRAMEWORKS & LIBRARIES": [
        "Next.js",
        "React Native",
        "TailwindCSS",
        "Tanstack Query",
        "Framer Motion",
      ],
    }

    return (
      <section className="my-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm mb-3 text-left">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 bg-inherit
                    border border-neutral-600/30 rounded-lg transition-all duration-300
                    hover:from-neutral-600/30 hover:to-neutral-800/30 hover:bg-neutral-800/10 dark:hover:bg-white/10
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
    <section className="my-12">
      <h2 className="text-lg font-medium mb-6 text-left tracking-wide">
        {title}
      </h2>
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
    <div className="mb-8">
      <h3 className="text-base font-medium mb-2 text-left">
        {item.link ? (
          <a
            href={item.link}
            className="hover:opacity-60 transition-opacity duration-300 flex items-center gap-2"
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
        <p className="text-sm opacity-80 mb-2 leading-relaxed text-left">
          {item.subtitle}
        </p>
      )}
      {item.description && (
        <p className="text-sm mt-3 leading-relaxed opacity-90 text-left max-w-prose">
          {item.description}
        </p>
      )}
    </div>
  )

  return (
    <div className="mx-auto pt-2 my-[2.5em] max-w-2xl user-select-none">
      <div className="mx-auto max-w-screen-md px-4 text-left">
        <BackLink to="/" label="Main page" />
        <Section title="PROJECTS">
          <div className="flex w-full mb-6 border border-neutral-600/30 rounded-md overflow-hidden">
            <button
              onClick={() => setProjectState("current")}
              className={`flex-1 px-4 py-2 transition-all ${
                projectState === "current"
                  ? "dark:bg-white dark:text-black bg-black text-white"
                  : "dark:bg-neutral-900 dark:text-white bg-white text-black "
              }`}
            >
              <span className="font-medium">CURRENT</span>
            </button>
            <button
              onClick={() => setProjectState("past")}
              className={`flex-1 px-4 py-2 transition-all ${
                projectState === "past"
                  ? "dark:bg-white dark:text-black bg-black text-white"
                  : "dark:bg-neutral-900 dark:text-white bg-white text-black "
              }`}
            >
              <span className="font-medium">PAST</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {projects[projectState].map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="relative rounded-xl overflow-hidden border-[1px] dark:border-white/10 border-black/10
                  hover:border-2 hover:border-pink-500 transition-all duration-300 group
                  hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-[1.85/1] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-mono font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-light tracking-tight font-mono">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
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
