import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0052FF] to-[#00D4FF] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/90" />
            </div>
            <span className="font-black text-xl tracking-tight">AGENT</span>
          </motion.div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#0052FF] transition-colors font-mono">
              DOCS
            </a>
            <a href="#" className="text-gray-500 hover:text-[#0052FF] transition-colors font-mono">
              GITHUB
            </a>
            <a href="#" className="text-gray-500 hover:text-[#0052FF] transition-colors font-mono">
              TWITTER
            </a>
            <a href="#" className="text-gray-500 hover:text-[#0052FF] transition-colors font-mono">
              DISCORD
            </a>
          </div>
        </div>

        {/* Base logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-xs font-mono">POWERED BY</span>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="currentColor">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10c5.522 0 10-4.477 10-10S15.522 0 10 0zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
              <text x="24" y="14" fontSize="12" fontWeight="bold">BASE</text>
            </svg>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            Requested by{' '}
            <a
              href="https://twitter.com/0xderion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0052FF] transition-colors"
            >
              @0xderion
            </a>
            {' '}&middot;{' '}
            Built by{' '}
            <a
              href="https://twitter.com/clonkbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0052FF] transition-colors"
            >
              @clonkbot
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
