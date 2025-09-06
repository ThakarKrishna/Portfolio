import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Calendar, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { config } from "@/config/constants";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: config.email,
      description: "Send me a direct message",
      link: `mailto:${config.email}`,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      primary: config.linkedinUsername,
      description: "Connect professionally",
      link: config.linkedinUrl,
    },
    {
      icon: MapPin,
      title: "Location",
      primary: config.location,
      description: "Available for remote work",
      link: "#",
    },
    {
      icon: Calendar,
      title: "Availability",
      primary: "Open to opportunities",
      description: "Ready for new challenges",
      link: "#",
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-section-title font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Let's Connect</span>
          </motion.h2>
          <motion.p
            className="text-body text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 card-hover-effect">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            target={info.title === "Email" ? "_self" : "_blank"}
                            rel={
                              info.title === "Email"
                                ? ""
                                : "noopener noreferrer"
                            }
                            className="text-primary hover:text-primary/80 transition-colors font-medium block mb-1 break-words"
                          >
                            {info.primary}
                          </a>
                        ) : (
                          <p className="text-primary font-medium mb-1 break-words">
                            {info.primary}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <footer className="mt-24 border-t border-white/10 pt-12 text-center text-gray-400"> <p> Made with <span className="text-red-500">❤️</span> by Krishna Thakar </p> <p className="text-sm mt-2"> © 2025 Krishna Thakar. All rights reserved. </p> </footer>
    </section>
  );
};

export default Contact;
