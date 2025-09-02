import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

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
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
            I’d love to hear from you! Whether it’s a project, job opportunity,
            or just a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Side: Profiles */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            {/* LinkedIn */}
            <Card className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm rounded-xl">
              <div className="mb-4 sm:mb-6 flex items-center">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Professional Profile
                </h3>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                View my complete work history and connect with me on LinkedIn:
              </p>
              <a
                href="https://www.linkedin.com/in/krishna-thakar-110683219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 transition-colors text-base sm:text-lg underline break-words"
              >
                linkedin.com/in/krishna-thakar-110683219
              </a>
            </Card>

            {/* Email */}
            <Card className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm rounded-xl">
              <div className="mb-4 sm:mb-6 flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Prefer email? Reach me directly:
              </p>
              <a
                href="mailto:krishnathakat2001@gmail.com"
                className="text-purple-300 hover:text-purple-200 transition-colors underline text-base sm:text-lg break-words"
              >
                krishnathakat2001@gmail.com
              </a>
            </Card>
          </div>

          {/* Right Side: Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 text-sm sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
