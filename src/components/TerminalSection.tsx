import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const terminalLines = [
  { type: 'system', text: '[AGENT] Initializing neural network...' },
  { type: 'success', text: '[OK] Connection to Base mainnet established' },
  { type: 'info', text: '[INFO] Scanning mempool for opportunities...' },
  { type: 'data', text: '[DATA] Block #18,247,891 analyzed' },
  { type: 'success', text: '[EXEC] Transaction 0x7f3a...executed' },
  { type: 'info', text: '[INFO] Gas optimization: 47% savings achieved' },
  { type: 'system', text: '[AGENT] Learning patterns updated' },
  { type: 'success', text: '[OK] Strategy alpha-7 deployed successfully' },
];

function TypewriterLine({ text, type, delay }: { text: string; type: string; delay: number }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  const colorClass = {
    system: 'text-[#0052FF]',
    success: 'text-green-400',
    info: 'text-gray-400',
    data: 'text-[#00D4FF]',
  }[type] || 'text-white';

  return (
    <div className={`font-mono text-xs md:text-sm ${colorClass}`}>
      {displayText}
      {showCursor && <span className="animate-pulse">_</span>}
    </div>
  );
}

export default function TerminalSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00D4FF]">
              LIVE FEED
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Real-time activity stream from the agent's consciousness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Terminal window */}
          <div className="bg-[#0d0d12] border border-gray-800 rounded-lg overflow-hidden shadow-2xl shadow-[#0052FF]/10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-gray-500">agent@base:~</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Terminal content */}
            <div className="p-4 md:p-6 min-h-[300px] md:min-h-[350px] space-y-2">
              <div className="text-xs md:text-sm font-mono text-gray-600 mb-4">
                {">"} Connecting to agent consciousness...
              </div>
              {terminalLines.map((line, i) => (
                <TypewriterLine
                  key={i}
                  text={line.text}
                  type={line.type}
                  delay={1000 + i * 800}
                />
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
                className="pt-4"
              >
                <span className="font-mono text-xs md:text-sm text-gray-500">{">"} </span>
                <span className="font-mono text-xs md:text-sm text-white animate-pulse">_</span>
              </motion.div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0052FF]/10 to-[#00D4FF]/10 blur-3xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
