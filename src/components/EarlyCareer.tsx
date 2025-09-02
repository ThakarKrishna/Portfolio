import { Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Confiance Business Solutions Inc",
      role: "Software Engineer",
      duration: "Jan 2022 – Feb 2023",
      description:
        "Built and optimized booking/catering platform for African clients. Focused on scaling, UI design, and frontend performance improvements.",
    },
    {
      company: "DRC Systems",
      role: "Web Developer",
      duration: "Dec 2021 – May 2022",
      description:
        "Developed e-commerce, chat, and news applications with frontend + backend integrations.",
    },
    {
      company: "Smart Monkey",
      role: "Web Developer Internship",
      duration: "Dec 2020 – Dec 2021",
      description:
        "Learned and applied HTML, CSS, JavaScript by building CRUD systems, chat apps, and small games.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-[#b36b00] via-[#d1913c] to-[#e8b96a] text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Early Career Experience
        </h2>
        <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
          A journey of learning, growth, and hands-on experience in web
          development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
          bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex md:items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } flex-col md:flex-row`}
            >
              {/* Timeline Node */}
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 
                flex items-center justify-center w-10 h-10 
                bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full shadow-lg 
                left-1/2 -translate-x-1/2 top-0 md:top-auto">
                <Briefcase className="w-5 h-5 text-white" />
              </div>

              {/* Timeline Card */}
              <div
                className={`w-full md:w-5/12 p-6 bg-white text-gray-800 rounded-2xl shadow-lg 
                  transition hover:shadow-2xl mt-12 md:mt-0 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-pink-600 font-semibold">{exp.role}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
