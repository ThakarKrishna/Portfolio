const TechnicalExpertise = () => {
  const skillCategories = [
    {
      title: "Frontend",
      cardClass: "skill-card-frontend",
      skills: [
        "React.js, Next.js, Redux Toolkit,",
        "Vite, Material UI, Ant Design,",
        "WebSockets, Responsive Design"
      ]
    },
    {
      title: "Backend",
      cardClass: "skill-card-backend",
      skills: [
        "Node.js, Express.js, Sequelize ORM,",
        "REST APIs, Azure Serverless",
        "Functions"
      ]
    },
    {
      title: "Databases & Tools",
      cardClass: "skill-card-database",
      skills: [
        "MySQL, MongoDB, Git, API",
        "Integration, Authentication & Role",
        "Based Access Management"
      ]
    }
  ];

  return (
    <section id="skills" className="section-light py-20 ">

      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-section-title font-bold mb-4">
            <span className="text-gradient">
              Technical Expertise
            </span>
          </h2>
        </div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.cardClass} rounded-2xl p-8 min-h-[200px] hover-lift animate-scale-in shadow-xl`}
              style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>
              <div className="space-y-1">
                {category.skills.map((skillLine, skillIndex) => (
                  <p key={skillIndex} className="text-lg leading-relaxed font-medium">
                    {skillLine}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Fluent in English, Hindi, and Gujarati. Experienced with Google Maps API, CMS Development, and Performance Optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;