import { motion } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const AnimatedBubbles = () => {
  const bubbles: Bubble[] = [
    { id: 1, size: 120, x: 10, y: 20, delay: 0, duration: 8 },
    { id: 2, size: 80, x: 80, y: 60, delay: 2, duration: 10 },
    { id: 3, size: 150, x: 20, y: 80, delay: 4, duration: 12 },
    { id: 4, size: 100, x: 70, y: 30, delay: 6, duration: 9 },
    { id: 5, size: 60, x: 90, y: 70, delay: 1, duration: 7 },
    { id: 6, size: 130, x: 30, y: 50, delay: 3, duration: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.2, 0.3, 0.2],
            y: [0, -20, -40, -20],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 via-green-400/20 to-blue-600/30 rounded-full blur-sm" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300/20 via-green-300/10 to-blue-500/20 rounded-full blur-md animate-pulse" />
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -100],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
