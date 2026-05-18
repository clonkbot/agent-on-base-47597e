import { motion } from 'framer-motion';
import AgentOrb from './AgentOrb';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 relative">
      {/* Circuit decorations */}
      <CircuitLines />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
          <span className="text-xs md:text-sm font-mono text-[#0052FF] tracking-wider uppercase">
            Autonomous Agent · Live on Base
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
            AGENT
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00D4FF]">
            ON BASE
          </span>
        </motion.h1>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring' }}
          className="my-12"
        >
          <AgentOrb />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          An autonomous AI entity operating 24/7 on the Base blockchain.
          <span className="text-[#0052FF]"> Self-sovereign. </span>
          <span className="text-white">Intelligent. </span>
          <span className="text-[#00D4FF]">Unstoppable.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group relative px-8 py-4 bg-[#0052FF] text-white font-bold tracking-wide overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,82,255,0.5)]">
            <span className="relative z-10">CONNECT WITH AGENT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="px-8 py-4 border border-gray-700 text-gray-300 font-bold tracking-wide hover:border-[#0052FF] hover:text-[#0052FF] transition-all">
            VIEW ACTIVITY LOG
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#0052FF] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left circuit */}
      <svg className="absolute left-0 top-1/4 w-48 md:w-64 h-96 opacity-20" viewBox="0 0 200 400">
        <motion.path
          d="M 0 200 H 50 V 100 H 100 V 50 H 150"
          stroke="#0052FF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.circle
          cx="150"
          cy="50"
          r="6"
          fill="#0052FF"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
        />
        <motion.path
          d="M 0 250 H 80 V 300 H 120"
          stroke="#0052FF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg>

      {/* Right circuit */}
      <svg className="absolute right-0 top-1/3 w-48 md:w-64 h-96 opacity-20" viewBox="0 0 200 400">
        <motion.path
          d="M 200 150 H 150 V 200 H 100 V 250 H 50"
          stroke="#0052FF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.circle
          cx="50"
          cy="250"
          r="6"
          fill="#0052FF"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.8 }}
        />
      </svg>
    </div>
  );
}
