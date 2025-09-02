import currentRoleIllustration from "@/assets/current-role-illustration.jpg";

const CurrentRole = () => {
  return (
    <section className="section-dark py-20 ">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-section-title font-bold mb-4">
            <span className="text-gradient">Current Role at OpenXcell</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="w-full lg:w-3/2">
            <h3 className="text-xl font-bold text-foreground mb-1">
              Senior Software Engineer (Full Stack Developer)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              OpenXcell • Mar 2023 – Present
            </p>

            {/* Divider Line */}
            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>

            {/* Bullet Points */}
            <ul className="space-y-3 text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Leading development of scalable web applications using{" "}
                <span className="font-medium text-foreground">React.js, Next.js, Node.js, Sequelize, and Azure</span>.
              </li>
              <li>
                Built real-time WebSocket features for{" "}
                <span className="font-medium text-foreground">live alerts & notifications</span>,
                improving responsiveness across enterprise apps.
              </li>
              <li>
                Ensuring{" "}
                <span className="font-medium text-foreground">code quality, security, and timely delivery </span>
                while collaborating with cross-functional teams.
              </li>
            </ul>
          </div>

          {/* Illustration */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={currentRoleIllustration}
                alt="Team collaboration illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentRole;