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
    <section id="contact" className="relative py-20 px-6 overflow-hidden">


      <div className="container mx-auto max-w-7xl relative">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title font-bold text-white">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            I’d love to hear from you! Whether it’s a project, job opportunity,
            or just a chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side: Profiles */}
          <div className="space-y-8 animate-slide-up">
            {/* LinkedIn */}
            <Card className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm rounded-xl">
              <div className="mb-6 flex items-center">
                <Linkedin className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Professional Profile
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                View my complete work history and connect with me on LinkedIn:
              </p>
              <a
                href="https://www.linkedin.com/in/krishna-thakar-110683219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 transition-colors text-lg underline"
              >
                linkedin.com/in/krishna-thakar-110683219
              </a>
            </Card>

            {/* Email */}
            <Card className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm rounded-xl">
              <div className="mb-6 flex items-center">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Prefer email? Reach me directly:
              </p>
              <a
                href="mailto:krishnathakat2001@gmail.com"
                className="text-purple-300 hover:text-purple-200 transition-colors underline text-lg"
              >
                krishnathakat2001@gmail.com
              </a>
            </Card>
          </div>

          {/* Right Side: Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300"
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
