"use client";

import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Globe,
  MapPin,
  Building,
  Wrench,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bandar",
      subtitle: "Adventure Management Platform",
      features: [
        "Vendor Mobile App with real-time promotions & discounts",
        "Customer Web & Mobile booking with secure payments",
        "Admin Panel for vendor approvals, payments & listings",
      ],
      tech: ["React.js", "Sequelize", "Serverless Functions", "Node.js"],
      icon: Globe,
      link: "https://customer-stg.bandar.co.in/",
    },
    {
      title: "BHL",
      subtitle: "Transport Management System",
      features: [
        "Admin Panel with role-based access",
        "GPS tracking & real-time WebSockets monitoring",
        "Trip workflows & optimized fleet management",
      ],
      tech: ["React.js (Vite)", "Redux Toolkit", "MongoDB", "WebSocket"],
      icon: MapPin,
      link: "https://cribzzzz.com/",
    },
    {
      title: "Cribzzz",
      subtitle: "Property Management Platform",
      features: [
        "Interactive property search with Google Maps API",
        "Responsive UI using Ant Design",
        "Supported CMS feature planning & documentation",
      ],
      tech: ["React.js", "Google Maps API", "Ant Design"],
      icon: Building,
      link: "https://example.com/cribzzz",
    },
    {
      title: "Super Solutions",
      subtitle: "Service Marketplace",
      features: [
        "Dynamic dashboards & admin workflows",
        "Integrated reviews & testimonial features",
        "Optimized UI performance & responsiveness",
      ],
      tech: ["React.js", "Node.js", "APIs"],
      icon: Wrench,
    },
    {
      title: "RespondSVP",
      subtitle: "Event Management Platform",
      features: [
        "RSVP system with event creation & guest tracking",
        "Multi-role authentication (Admin, Host, Guest)",
        "Admin panel for monitoring events & users",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      icon: Calendar,
    },
    {
      title: "Vidola",
      subtitle: "Mobile Service Marketplace",
      features: [
        "CMS with role-based access & approval workflows",
        "Scalable Redux architecture for smooth state",
        "Responsive UI with secure booking & transactions",
      ],
      tech: ["React.js", "Redux", "Node.js", "REST APIs"],
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-center mb-5">
            <h2 className="text-section-title font-bold">
              <span className="text-gradient">Projects & Work Showcase</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated selection of platforms I have built — covering mobile
            apps, management systems, service platforms, and event solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border border-border/30 rounded-xl hover:shadow-lg transition-all h-full flex flex-col justify-between bg-white/5"
              >
                {/* Icon + Title */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
