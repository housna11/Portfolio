const educationData = [
  {
    school: "",
    degree: "",
    year: "2019 - 2022",
    description: "Formation en développement web, algorithmique et systèmes informatiques."
  },
  {
    school: "",
    degree: "Diplôme Technicien Spécialisé",
    year: "2022 - 2024",
    description: "Spécialisation en développement logiciel ."
  },
  {
    school: "",
    degree: "React & Laravel Bootcamp",
    year: "2023",
    description: "Apprentissage intensif des frameworks React.js et Laravel."
  }
];

export default function EducationSection() {
  return (
    <div id="education" className="w-full px-4 md:px-[8%] py-16 text-center">
      <h4 className="text-lg mb-2 font-Ovo">Education</h4>
      <h2 className="text-3xl md:text-5xl font-Outfit mb-10 text-[#749DD0]">
        My Education Journey
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-2">{edu.school}</p>
            <p className="text-gray-400 dark:text-gray-400 text-xs mb-3">{edu.year}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}