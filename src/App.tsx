import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TerminalSection from './components/TerminalSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 82, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 82, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Mouse follower glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 82, 255, 0.15) 0%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
        animate={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 82, 255, 0.5) 2px, rgba(0, 82, 255, 0.5) 4px)',
          }}
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TerminalSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
