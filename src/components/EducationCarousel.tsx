import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const EducationCarousel = () => {
  const educationData = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Gujarat Technological University (GTU)",
      period: "2019 – 2023",
      grade: "CGPA: 8.8 / 10",
      focus: "Focused on Data Structures, Web Development, and Software Engineering.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: School,
      degree: "Higher Secondary Certificate (12th)",
      institution: "Gujarat State Board",
      period: "2017 – 2019",
      grade: "Percentage: 70.0%",
      focus: "Science Stream with Mathematics, Physics, Chemistry and Computer Science.",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: BookOpen,
      degree: "Secondary School Certificate (10th)",
      institution: "Gujarat State Board",
      period: "2015 – 2017",
      grade: "Percentage: 84.0%",
      focus: "Foundation in Mathematics, Science, and English with excellent academic performance.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="education" className="section-dark py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {educationData.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 animate-slide-up h-full">
                      <div className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          {/* Content */}
                          <div className="space-y-3">
                            <h3 className="text-lg font-bold text-foreground leading-tight">
                              {edu.degree}
                            </h3>
                            <p className="text-blue-400 font-medium text-sm">
                              {edu.institution}
                            </p>
                            <div className="space-y-1">
                              <span className="block text-muted-foreground text-sm">
                                {edu.period}
                              </span>
                              <span className="block text-orange-400 font-semibold text-sm">
                                {edu.grade}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {edu.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EducationCarousel;
