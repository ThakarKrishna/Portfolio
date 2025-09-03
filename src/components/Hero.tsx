import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedBubbles from "./AnimatedBubbles";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
      <div className="absolute inset-0 bg-background/80"></div>

      {/* Animated Bubbles */}
      <AnimatedBubbles />

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
                className="text-foreground font-sm"
                variants={letterVariants}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* GitHub Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Full Stack Developer skilled in{" "}
              <b>React.js, Next.js, Node.js, Sequelize, and SQL</b>. I enjoy
              building scalable web applications with clean code, smooth
              performance, and intuitive user experiences.
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
            {/* Download Resume */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="default"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-2.5 text-base font-medium rounded-lg transition-all duration-300 shadow-sm hover-glow"
                onClick={() => window.open("/krishna-resume.pdf", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
            <motion.a
              href="https://github.com/ThakarKrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 border border-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/krishna-thakar-110683219"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* Email Icon */}
              <motion.a
                href="#contact"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
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
