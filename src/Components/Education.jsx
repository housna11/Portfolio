const educationData = [
  {
    school: "Abouhayane Attaouhidi High School",
    degree: "High School Diploma (Baccalaureate)",
    year: "2019 - 2022",
    description: "Humanities stream.",
    aos: "fade-down-right"
  },
  {
    school: "MIAGE – School of Marketing and Applied Computer Science for Management",
    degree: "Specialized Technician Diploma",
    year: "2023 - 2025",
    description: "Major in Computer Development.",
    aos: "fade-up"
  },
  {
    school: "Simplon Maghreb",
    degree: "React.js & Laravel Bootcamp",
    year: "July 2025 - January 2026",
    description: "Intensive training in web development using React.js and Laravel.",
    aos: "fade-down-left"
  }
];

export default function EducationSection() {
  return (
    <div id="education" className="w-full px-4 md:px-[8%] py-16 text-center">
      <h4 className="text-lg mb-2 font-Ovo">Education</h4>
      <h2 className="text-3xl md:text-5xl font-Outfit mb-10 text-[#749DD0]" data-aos="zoom-in-down">
        My Education Journey
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            data-aos={edu.aos}
            className="bg-white rounded-3xl p-6 sm:p-8 mb-6 sm:mb-0 transform transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              boxShadow: "0 5px 15px rgba(116,157,208,0.5), 0 5px 25px rgba(235,152,235,0.35)"
            }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-gray-500 text-sm mb-2">{edu.school}</p>
            <p className="text-gray-400 text-xs mb-3">{edu.year}</p>
            <p className="text-gray-600 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}