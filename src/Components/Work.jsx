import { useState } from "react";

const projectsData = [
  { 
    name: "WorkUnity", 
    description: "L’application WorkUnity est une plateforme web créée avec Laravel pour faciliter la gestion des informations du personnel.",
    image: "/employes.png", 
    link: "https://github.com/housna11/Application-WorkUnity",
    technologies: ["Laravel", "MySQL"]
  },
  { 
    name: "Podcast-Finder", 
    description: "RESTful API built with Laravel for discovering and managing podcasts, episodes, and hosts, with secure authentication et roles.", 
    image: "/podcast.jpg", 
    link: "https://github.com/housna11/Podcast-Find-API",
    technologies: ["Laravel", "MySQL"]
  },
  { 
    name: "Daily Habits Tracker", 
    description: "Application web pour suivre les routines quotidiennes et améliorer les habitudes, avec suivi individuel et du groupe.", 
    image: "/Daily.png", 
    link: "https://github.com/housna11/Daily-Habits-Tracker",
    technologies: ["React.js"]
  },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex(prev => (prev === 0 ? projectsData.length - 1 : prev - 1));

  const next = () =>
    setActiveIndex(prev => (prev === projectsData.length - 1 ? 0 : prev + 1));

  return (
    <div id="work" className="w-full px-4 md:px-[8%] py-16 text-center">

      <h4 className="text-lg mb-2 font-Ovo">My Work</h4>

      <h2 className="text-3xl md:text-5xl font-Outfit mb-10 text-[#749DD0]">
        Projects I’ve Built
      </h2>

      <div className="relative w-full h-[380px] md:h-[440px] flex items-center justify-center">

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-1 md:left-2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-lg md:text-xl flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer"
        >
          &lt;
        </button>

        {/* Cards */}
        <div className="relative w-full h-[380px] md:h-[440px] flex items-center justify-center">

          {projectsData.map((project, index) => {

            const position = index - activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="absolute transition-all duration-500 cursor-pointer"
                style={{
                  transform: `
                    translateX(${position * 90}px) 
                    scale(${index === activeIndex ? 1 : 0.82})
                  `,
                  opacity: Math.abs(position) > 2 ? 0 : index === activeIndex ? 1 : 0.4,
                  zIndex: 10 - Math.abs(position),
                }}
              >

                <div
                  className="w-64 sm:w-72 md:w-96 bg-white dark:bg-gray-900 overflow-hidden rounded-t-2xl rounded-b-xl"
                  style={{
                    boxShadow: "0 5px 10px rgba(116,157,208,0.3), 0 5px 20px rgba(235,152,235,0.15)"
                  }}
                >

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 md:h-56 object-cover"
                  />

                  {index === activeIndex && (
                    <div className="p-4 text-center">

                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {project.name}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
                        {project.description}
                      </p>

                      <p className="text-xs md:text-sm text-gray-500 mb-1">
                        Technologies used
                      </p>

                      <div className="flex justify-center gap-2 flex-wrap">

                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-white rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-[#749DD0] to-[#eb98eb]"
                          >
                            {tech}
                          </span>
                        ))}

                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 text-[#749DD0] hover:underline"
                      >
                        View Project
                      </a>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-1 md:right-2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-lg md:text-xl flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer"
        >
          &gt;
        </button>

      </div>

      <div className="flex justify-center mt-10">

        <a
          href="https://github.com/housna11"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 md:px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#749DD0] to-[#eb98eb] hover:scale-105 hover:shadow-xl transition"
        >
          View more projects on GitHub
        </a>

      </div>

    </div>
  );
}