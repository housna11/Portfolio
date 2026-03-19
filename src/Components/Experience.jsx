const experienceData = [
  {
    company: "OCP",
    location: "Youssoufia",
    role: "PFE Intern – Desktop Application Development (C#)",
    year: "March 2025 – April 2025",
    description: [
      "Designed and improved the user interface using WinForms.",
      "Developed database interactions with SQL Server (T-SQL, stored procedures).",
      "Implemented CRUD operations with transaction management.",
      "Optimized SQL queries using execution plans.",
      "Debugged and analyzed logs using the Visual Studio Debugger."
    ]
  },
  {
    company: "CMCP-International Paper",
    location: "Kénitra",
    role: "Application Support Intern",
    year: "August 2024 – September 2024",
    description: [
      "Provided daily application support to ensure efficient technical assistance.",
      "Participated in incident analysis and resolution of software issues.",
      "Collaborated with development teams to improve internal systems.",
      "Prepared reports documenting issues and implemented solutions.",
      "Assisted in training internal users on software tools."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <div id="experience" className="w-full px-4 md:px-[8%] py-16">

      <h4 className="text-center text-lg mb-2 font-Ovo">Experience</h4>

      <h2
        className="text-center text-3xl md:text-5xl font-Outfit mb-16 text-[#749DD0]"
        data-aos="zoom-in-down"
      >
        My Professional Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-[#749DD0]/30 md:-translate-x-1/2"></div>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
          >

            {/* dot */}
            <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#749DD0] rounded-full border-4 border-white md:-translate-x-1/2"></div>

            {/* card */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">

              <div
                className="bg-white rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 active:scale-105"
                style={{
                  boxShadow:
                    "0 5px 15px rgba(116,157,208,0.5), 0 5px 25px rgba(235,152,235,0.35)"
                }}
              >
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {exp.company} • {exp.location}
                </p>

                <p className="text-gray-400 text-xs mb-3">
                  {exp.year}
                </p>

                <ul className="text-gray-600 text-sm list-disc ml-4 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}