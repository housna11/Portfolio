import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const tools = [
    { name: 'React.js', icon: '/reactjs.png' },
    { name: 'Laravel', icon: '/laravel.jpeg' },
    { name: 'PHP', icon: '/php.png' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'Postman', icon: '/postman.png' },
    { name: 'GitHub', icon: '/github.jpeg' },
    { name: 'Jira', icon: '/jira.png' },
    { name: 'Git', icon: '/git.jpeg' },
    { name: 'Figma', icon: '/figma.png' },
  ];

  const data = [
    {
      name: 'Languages',
      icon: '/code-icon.png',
      description: 'HTML, CSS, JavaScript, React.js, PHP, Laravel',
    },
    {
      name: 'Education',
      icon: '/edu-icon.png',
      description: 'Specialized Technician Diploma in Computer Development',
    },
    {
      name: 'Projects',
      icon: '/project-icon.png',
      description: 'I have developed more than 10 web projects',
    },
  ];

  return (
    <div id="about" className="w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Outfit text-[#749DD0]" data-aos="zoom-in-down">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-16">
        <div className="max-w-max mx-auto relative">
          <img src='/profil.jpg' alt="Profile" className="w-48 sm:w-80 rounded-3xl max-w-none" />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src="/dev.png" alt="Dev" className="w-full animate-spin_slow" />
            <img src="/dev-icon.png" alt="Dev icon" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a Junior Full-Stack Developer passionate about building web applications. I’ve worked on several full-stack projects using React.js and Laravel, and I’m eager to keep learning new technologies.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li
                key={item.name}
                data-aos="flip-left"
                data-aos-duration="1000"
                className="border-r-4 border-[#749DD0] rounded-xl p-6 cursor-pointer bg-[#749DD0]/10 md:bg-transparent hover:bg-[#749DD0]/10 hover:-translate-y-1 hover:scale-105 active:bg-[#749DD0]/10 active:scale-95 transform transition duration-500 relative overflow-visible">
                <img src={item.icon} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo">Technologies & Tools I Use</h4>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
  {tools.map((tool) => (
    <li
      key={tool.name}
      className="
        flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer transform transition duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:-translate-y-1 active:scale-105 active:shadow-lg">
      <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
    </li>
  ))}
</ul>
        </div>
      </div>
    </div>
  );
}