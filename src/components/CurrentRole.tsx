import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code, Zap, Shield } from "lucide-react";
import { currentRole } from "@/config/constants";

const CurrentRole = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const responsibilityIcons = [
    { icon: Code, label: "Full Stack Development" },
    { icon: Zap, label: "Real-time Features" },
    { icon: Shield, label: "Code Quality & Security" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-bold mb-4">
              <span className="text-gradient">Current Role at OpenXcell</span>
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Leading development initiatives and building scalable solutions
              for enterprise applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Role Information */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Main Role Card */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card border-border shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div>
                        <CardTitle className="text-2xl text-card-foreground">
                          {currentRole.position}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{currentRole.company}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{currentRole.duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground text-lg leading-relaxed mb-6">
                      {currentRole.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-card-foreground">
                        Key Responsibilities
                      </h4>
                      <div className="space-y-3">
                        {currentRole.keyResponsibilities.map(
                          (responsibility, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <p className="text-card-foreground leading-relaxed">
                                {responsibility}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Elements */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Responsibility Icons */}
              <div className="grid grid-cols-1 gap-6">
                {responsibilityIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {index === 0 &&
                          "Building scalable web applications with modern technologies"}
                        {index === 1 &&
                          "Implementing WebSocket features for real-time functionality"}
                        {index === 2 &&
                          "Maintaining high code standards and security practices"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentRole;
