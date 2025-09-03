"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Building,
  Wrench,
  Calendar,
  Smartphone,
} from "lucide-react";
import { config } from "@/config/constants";

const Projects = () => {
  const projects = [
    {
      title: "Bandar",
      subtitle: "Adventure Management Platform",
      icon: Globe,
      features: [
        "Vendor Mobile App",
        "Customer Web & Mobile booking",
        "Admin Panel",
      ],
      tech: ["React.js", "Sequelize", "Serverless Functions", "Node.js"],
      link: config.bandarUrl,
    },
    {
      title: "BHL",
      subtitle: "Transport Management System",
      icon: MapPin,
      features: [
        "Admin Panel with role-based access",
        "GPS tracking & real-time WebSockets monitoring",
        "Trip workflows",
      ],
      tech: ["React.js (Vite)", "Redux Toolkit", "MongoDB", "WebSocket"],
      link: config.bhlUrl,
    },
    {
      title: "Cribzzz",
      subtitle: "Property Management Platform",
      icon: Building,
      features: [
        "Interactive property search with Google Maps API",
        "Responsive UI using Ant Design",
        "Supported CMS feature planning & documentation",
      ],
      tech: ["React.js", "Google Maps API", "Ant Design"],
      link: config.cribzzzUrl,
    },
    {
      title: "Super Solutions",
      subtitle: "Service Marketplace",
      icon: Wrench,
      features: [
        "Dynamic dashboards & admin workflows",
        "Integrated reviews & testimonial features",
        "Optimized UI performance & responsiveness",
      ],
      tech: ["React.js", "Node.js", "APIs"],
      link: config.superSolutionsUrl,
    },
    {
      title: "RespondSVP",
      subtitle: "Event Management Platform",
      icon: Calendar,
      features: [
        "RSVP system with event creation & guest tracking",
        "Multi-role authentication",
        "Admin panel for monitoring events & users",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: config.respondSvpUrl,
    },
    {
      title: "Vidola",
      subtitle: "Mobile Service Marketplace",
      icon: Smartphone,
      features: [
        "CMS with role-based access & approval workflows",
        "Scalable Redux architecture",
        "Responsive UI with secure booking & transactions",
      ],
      tech: ["React.js", "Redux", "Node.js", "REST APIs"],
      link: config.vidolaUrl,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-section-bg-light dark:bg-section-bg-dark"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-bold mb-4">
            <span className="text-gradient">Projects & Work Showcase</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            A curated selection of platforms I have built — covering mobile
            apps, management systems, service platforms, and event solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 card-hover-effect">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-card-foreground">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-card-foreground leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    {project.link && project.link !== "#" && (
                      <div className="pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
                        >
                          View Project
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
