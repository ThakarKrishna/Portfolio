import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section id="home" className="hero-section relative overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/70"></div>

      <div className="container mx-auto px-6 py-32  h-full relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            className="space-y-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-hero font-bold leading-tight"
              variants={titleVariants}
            >
              <motion.span
                className="text-gradient animate-float"
                variants={letterVariants}
              >
                Krishna Thakar
              </motion.span>
              <br />
              <motion.span
                className="text-white"
                variants={letterVariants}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Full Stack Developer skilled in{" "}
              <b>React.js, Next.js, Node.js, Sequelize, and SQL</b>.
              I enjoy building scalable web applications with clean code,
              smooth performance, and intuitive user experiences.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            {/* LinkedIn */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="default"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 text-base font-medium rounded-lg transition-all duration-300 shadow-sm hover-glow"
                onClick={() => window.open("https://www.linkedin.com/in/krishna-thakar-110683219", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Let's Connect on LinkedIn
              </Button>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="default"
                className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-2.5 text-base font-medium rounded-lg transition-all duration-300 hover-glow"
                onClick={() => scrollToSection("contact")}

              >
                <Mail className="w-4 h-4 mr-2" />
                Send a Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;