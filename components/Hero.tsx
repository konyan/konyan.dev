import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { displayedText } = useTypewriter("Building scalable systems & elegant UIs.", 40, 1000);

  // Parallax Logic
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const yRotate = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(yRotate, { stiffness: 500, damping: 50 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    x.set(xPos * 20); // Rotation Range X
    yRotate.set(yPos * 20); // Rotation Range Y
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      id="about"
    >
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-medium tracking-wide mb-4">KoNyan</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 text-neutral-900 dark:text-white">
              Hello, I'm <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 py-4">NYAN LIN TUN.</span>
            </h1>
            <div className="h-24 md:h-16 mb-8">
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light font-mono">
                {displayedText}<span className="animate-pulse text-accent">|</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <div className="order-1 md:order-2 flex justify-center perspective-1000" style={{ perspective: 1000 }}>
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 relative shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); yRotate.set(0); }}
            style={{
              rotateX: mouseY,
              rotateY: mouseX,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="absolute inset-2 rounded-full overflow-hidden bg-white dark:bg-black">
              <img
                src='/konyan.webp'
                alt="Konyan - Senior Full Stack Engineer specializing in React, React Native, and Next.js"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                loading="eager"
              />
            </div>
            {/* Decorative Orbit */}
            <div className="absolute -inset-4 border border-accent/20 rounded-full -z-10 animate-[spin_10s_linear_infinite]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
