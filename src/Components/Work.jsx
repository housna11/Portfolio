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
    description: "RESTful API built with Laravel for discovering and managing podcasts, episodes, and hosts, with secure authentication and role-based access.", 
    image: "/podcast.jpg", 
    link: "https://github.com/housna11/Podcast-Find-API",
    technologies: ["Laravel", "MySQL"]
  },
  { 
    name: "Blog Platform", 
    description: "Full-stack blog with React + Laravel + MySQL.", 
    image: "/blog.png", 
    link: "#",
    technologies: ["React", "Laravel"]
  },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );

  const next = () =>
    setActiveIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );

  return (
    <div id="work" className="w-full px-[8%] py-16 text-center">
      <h4 className="text-lg text-gray-500 mb-2 font-Ovo">My Work</h4>
      <h2 className="text-4xl md:text-5xl font-Ovo mb-10 text-[#749DD0]" data-aos="zoom-in-down">
        Projects I’ve Built
      </h2>

      <div className="relative flex items-center justify-center py-12">

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-xl font-bold flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          &lt;
        </button>

        <div className="flex items-center justify-center gap-8 w-full">
          {projectsData.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  transition-all duration-500 transform cursor-pointer
                  ${isActive ? "scale-105 z-10" : "scale-90 opacity-60"}
                  w-96
                `}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-2xl shadow-xl"
                />

                {isActive && (
                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {project.description}
                    </p>

                    <p className="text-sm text-gray-500 mb-2">
                      Technologies used
                    </p>

                    <div className="flex justify-center gap-3">
                      {project.technologies.map((tech, i) => (
                        <button
                          key={i}
                          className="px-4 py-1.5 text-white rounded-full text-sm font-medium 
                          bg-gradient-to-r from-[#749DD0] to-[#eb98eb]
                          transform transition-all duration-300 
                          hover:scale-110 hover:shadow-lg"
                        >
                          {tech}
                        </button>
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
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-0 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-xl font-bold flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          &gt;
        </button>

      </div>

      <div className="flex justify-center mt-10">
          <a
            href="https://github.com/housna11"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#749DD0] to-[#eb98eb] hover:scale-105 hover:shadow-xl transition-all duration-300">
            View more projects on GitHub
          </a>
      </div>
    </div>
  );
}