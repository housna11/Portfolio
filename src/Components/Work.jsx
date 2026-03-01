// import { useState } from "react";

// const projectsData = [
//   { name: "WorkUnity", description: "Gestion des Employés built with Laravel and MySQL", image: "", link: "https://github.com/housna11/Application-WorkUnity" },
//   { name: "Portfolio Website", description: "Responsive portfolio built with React and TailwindCSS.", image: "", link: "#" },
//   { name: "", description: "", image: "", link: "#" },
//   { name: "Blog Platform", description: "Full-stack blog with React + Laravel + MySQL.", image: "", link: "#" },
// ];

// export default function ProjectsCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prev = () => setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
//   const next = () => setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));

//   return (
//     <div id="work" className="w-full px-[8%] py-16 text-center">
//       <h4 className="text-lg text-gray-500 mb-2 font-Ovo">My Work</h4>
//       <h2 className="text-4xl md:text-5xl font-Ovo mb-10 text-[#749DD0]">Projects I’ve Built</h2>

//       <div className="relative flex items-center justify-center">
//         {/* Prev Button */}
//         <button
//           onClick={prev}
//           className="absolute left-0 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-xl font-bold flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           &lt;
//         </button>

//         <div className="flex items-center justify-center gap-6 overflow-hidden w-full">
//           {projectsData.map((project, index) => {
//             const isActive = index === activeIndex;
//             const scale = isActive ? "scale-100 z-10" : "scale-75 opacity-50 z-0";
//             return (
//               <div
//                 key={index}
//                 className={`transition-transform duration-500 transform ${scale} rounded-xl cursor-pointer w-64 md:w-80`}
//               >
//                 <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-xl" />
//                 {isActive && (
//                   <div className="bg-white dark:bg-darkHover p-4 rounded-b-xl shadow-lg">
//                     <h3 className="text-xl font-semibold">{project.name}</h3>
//                     <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
//                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#749DD0] hover:underline mt-2 inline-block">
//                       View Project
//                     </a>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={next}
//           className="absolute right-0 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white text-xl font-bold flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// }