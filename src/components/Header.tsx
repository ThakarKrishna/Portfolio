import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close mobile menu after clicking
    setIsOpen(false);

    // Button flash effect
    const button = document.querySelector(
      `button[data-section="${sectionId}"]`
    ) as HTMLElement;
    if (button) {
      button.style.transform = "scale(0.95)";
      button.style.transition = "transform 0.1s ease";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    }
  };

  const navItems = [
    "home",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Name */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold overflow-hidden shadow-lg"
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/krishna.jpg"
                alt="Krishna Thakar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>

            <span className="text-xl font-bold text-foreground">
              Krishna Thakar
            </span>
          </motion.div>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((section, index) => (
              <motion.button
                key={section}
                data-section={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-all duration-200 cursor-pointer relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:w-full"></div>
              </motion.button>
            ))}
          </nav>

          {/* Right side links (desktop) */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="/krishna-resume.pdf"
              download
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/krishna-thakar-110683219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {/* Nav Links */}
              <div className="flex flex-col space-y-3">
                {navItems.map((section) => (
                  <button
                    key={section}
                    data-section={section}
                    onClick={() => scrollToSection(section)}
                    className="text-foreground text-center hover:text-primary transition-all duration-200"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border my-4"></div>

              {/* Theme Toggle Only */}
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
