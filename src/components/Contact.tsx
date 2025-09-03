"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px-6 lg:px-12 text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-400 mt-3">
            Have a project in mind? Let’s work together to bring your ideas to
            life
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <Card className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </Card>

          {/* Right: Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">krishnathakat2001@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">Ahmedabad, India</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/krishnathakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krishna-thakar-110683219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:krishnathakat2001@gmail.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-gray-400">
        <p>
          Made with <span className="text-red-500">❤️</span> by Krishna Thakar
        </p>
        <p className="text-sm mt-2">
          © 2024 Krishna Thakar. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
