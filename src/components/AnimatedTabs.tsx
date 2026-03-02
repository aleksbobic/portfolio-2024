import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "dev", label: "Dev" },
  { id: "data", label: "Data" },
  { id: "other", label: "Other" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const skills: Record<TabId, string[]> = {
  dev: [
    "JavaScript",
    "React",
    "Vue",
    "Electron",
    "MobX",
    "Jest",
    "Cypress",
    "Python",
    "FastAPI",
    "Django",
    "ElasticSearch",
    "Docker",
    "SQL",
    "MongoDB",
    "NginX",
    "Git",
    "API",
  ],
  data: [
    "Scrapy",
    "Pandas",
    "Polars",
    "ETL Pipelines",
    "NetworkX",
    "Numpy",
    "SpaCy",
    "Plotly",
    "Data visualisation",
    "Information retrieval",
    "Study design",
    "Sci. paper research",
  ],
  other: [
    "Communicating Insights",
    "Presenting",
    "Teamwork",
    "Mentoring & training",
    "Project management",
    "Collaborating",
    "Scrum",
  ],
};

const skillVariants: Variants = {
  enter: (currentDirection: number) => ({
    translateX: currentDirection > 0 ? -500 : 500,
  }),
  center: {
    translateX: 0,
    translateY: 0,
  },
  exit: (currentDirection: number) => ({
    translateX: currentDirection > 0 ? 500 : -500,
  }),
};

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState<TabId>(tabs[0].id);
  const [direction, setDirection] = useState(1);

  function handleTabChange(nextTab: TabId) {
    if (nextTab === activeTab) {
      return;
    }

    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = tabs.findIndex((tab) => tab.id === nextTab);

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(nextTab);
  }

  return (
    <div className="container w-full h-full p-0 flex flex-col">
      <div className="w-full grow overflow-hidden relative  rounded-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="w-full pb-2 flex flex-wrap gap-2 absolute top-0 "
            key={activeTab}
            custom={direction}
          >
            {skills[activeTab].map((skill: string) => (
              <motion.div
                key={skill}
                className="relative rounded-full text-xs font-semibold uppercase dark:bg-white dark:text-black bg-black text-white px-3 py-1 font-poppins"
                custom={direction}
                variants={skillVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${
              activeTab === tab.id
                ? ""
                : "hover:dark:text-white/60 hover:text-black/60"
            } relative rounded-md px-3 py-1.5 text-sm font-semibold font-poppins dark:text-white text-black transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
