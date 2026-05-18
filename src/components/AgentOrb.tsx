import { motion } from 'framer-motion';

export default function AgentOrb() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#0052FF]/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-[#0052FF]/30"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-[#0052FF]/40"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.2, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Main orb */}
      <motion.div
        className="absolute inset-12 rounded-full bg-gradient-to-br from-[#0052FF] via-[#003399] to-[#001133]"
        animate={{
          boxShadow: [
            '0 0 60px rgba(0, 82, 255, 0.6), inset 0 0 60px rgba(0, 82, 255, 0.3)',
            '0 0 100px rgba(0, 82, 255, 0.8), inset 0 0 80px rgba(0, 82, 255, 0.5)',
            '0 0 60px rgba(0, 82, 255, 0.6), inset 0 0 60px rgba(0, 82, 255, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inner core */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0052FF]"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Eye/Core center */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
        </motion.div>
      </motion.div>

      {/* Data particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI) / 4) * 100, 0],
            y: [0, Math.sin((i * Math.PI) / 4) * 100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-2"
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeDasharray="10 20"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}
