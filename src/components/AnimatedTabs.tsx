import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

let tabs = [
  { id: "dev", label: "Dev" },
  { id: "data", label: "Data" },
  { id: "other", label: "Other" },
];

const skills: any = {
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

export function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="container w-full h-full p-0 flex flex-col">
      <div className="w-full grow overflow-hidden relative  rounded-xl">
        <AnimatePresence initial={false}>
          <motion.div
            className="w-full pb-2 flex flex-wrap gap-2 absolute top-0 "
            key={activeTab}
          >
            {skills[activeTab].map((skill: string, index: number) => (
              <motion.div
                key={skill}
                className="relative rounded-full text-xs font-semibold uppercase dark:bg-white dark:text-black bg-black text-white px-3 py-1 font-poppins"
                initial={{
                  translateX: -500,
                  // translateY:
                  //   -1000 + index * Math.floor(2000 / skills[activeTab].length),
                }}
                animate={{
                  translateX: 0,
                  translateY: 0,
                }}
                exit={{
                  translateX: 500,
                }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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
