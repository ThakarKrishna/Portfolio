import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "krishnathakat2001@gmail.com",
      link: "mailto:krishnathakat2001@gmail.com",
      description: "Send me a direct message",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "krishna-thakar-110683219",
      link: "https://www.linkedin.com/in/krishna-thakar-110683219",
      description: "Connect professionally",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, India",
      link: "#",
      description: "Available for remote work",
    },

    {
      icon: Calendar,
      title: "Availability",
      value: "Open to opportunities",
      link: "#",
      description: "Ready for new challenges",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-primary/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          target={
                            info.title === "Email" || info.title === "Phone"
                              ? "_self"
                              : "_blank"
                          }
                          rel={
                            info.title === "Email" || info.title === "Phone"
                              ? ""
                              : "noopener noreferrer"
                          }
                          className="text-primary hover:text-primary/80 transition-colors font-medium block mb-1"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium mb-1">
                          {info.value}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>{" "}
      {/* <footer className="mt-16 border-t pt-6 text-center text-muted-foreground">
        <p>
          Made with <span className="text-red-500">❤️</span> by Krishna Thakar
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Krishna Thakar. All rights reserved.
        </p>
      </footer> */}
    </section>
  );
};

export default Contact;
