import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { config } from "@/config/constants";

const EarlyCareer = () => {
  const experiences = [
    {
      company: "Confiance Business Solutions Inc",
      role: "Software Engineer",
      dates: "Jan 2022 – Feb 2023",
      description:
        "Built and optimized booking/catering platform for African clients. Focused on scaling, UI design, and frontend performance improvements.",
      url: config.confianceUrl,
    },
    {
      company: "DRC Systems",
      role: "Web Developer",
      dates: "Dec 2021 – May 2022",
      description:
        "Developed e-commerce, chat, and news applications with frontend + backend integrations.",
      url: config.drcSystemsUrl,
    },
    {
      company: "Smart Monkey",
      role: "Web Developer Internship",
      dates: "Dec 2020 – Dec 2021",
      description:
        "Learned and applied HTML, CSS, JavaScript by building CRUD systems, chat apps, and small games.",
      url: config.smartMonkeyUrl,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#b36b00] via-[#d1913c] to-[#e8b96a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-section-title font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Early Career Experience
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My journey from internship to software engineering roles
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/80 to-primary/60"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="relative z-20">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center border-4 border-white shadow-lg">
                    <Briefcase className="w-4 h-4 text-white timeline-icon" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                  <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 card-hover-effect">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            {experience.url && experience.url !== "#" ? (
                              <a
                                href={experience.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors duration-200"
                              >
                                {experience.company}
                              </a>
                            ) : (
                              experience.company
                            )}
                          </h3>
                          <p className="text-primary font-medium">
                            {experience.role}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {experience.dates}
                          </p>
                        </div>
                        <p className="text-card-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarlyCareer;
