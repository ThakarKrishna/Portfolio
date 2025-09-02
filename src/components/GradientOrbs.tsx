import { motion } from "framer-motion";

const GradientOrbs = () => {
    const orbs = [
        {
            id: 1,
            size: 200,
            left: "10%",
            top: "20%",
            gradient: "from-purple-500/20 via-pink-500/15 to-transparent",
            duration: 20,
            delay: 0,
        },
        {
            id: 2,
            size: 150,
            left: "80%",
            top: "60%",
            gradient: "from-blue-500/20 via-cyan-500/15 to-transparent",
            duration: 25,
            delay: 5,
        },
        {
            id: 3,
            size: 120,
            left: "70%",
            top: "10%",
            gradient: "from-orange-500/20 via-yellow-500/15 to-transparent",
            duration: 18,
            delay: 10,
        },
        {
            id: 4,
            size: 180,
            left: "20%",
            top: "70%",
            gradient: "from-green-500/20 via-emerald-500/15 to-transparent",
            duration: 22,
            delay: 3,
        },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} blur-xl`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.left,
                        top: orb.top,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default GradientOrbs;

