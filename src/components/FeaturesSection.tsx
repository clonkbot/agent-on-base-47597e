import { motion } from 'framer-motion';

const features = [
  {
    icon: '01',
    title: 'Autonomous Execution',
    description: 'Self-directed operations without human intervention. The agent makes decisions based on on-chain data and market conditions.',
    accent: '#0052FF',
  },
  {
    icon: '02',
    title: 'Base Native',
    description: 'Built specifically for the Base L2 ecosystem. Lightning-fast transactions with minimal fees, maximum efficiency.',
    accent: '#00D4FF',
  },
  {
    icon: '03',
    title: 'AI-Powered',
    description: 'Advanced machine learning models analyze patterns and execute strategies that evolve with market dynamics.',
    accent: '#0052FF',
  },
  {
    icon: '04',
    title: '24/7 Operations',
    description: 'Never sleeps, never stops. Continuous monitoring and execution across all market conditions.',
    accent: '#00D4FF',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="text-gray-600">CORE</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00D4FF]">
              CAPABILITIES
            </span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl font-light">
            Engineered for autonomous on-chain operations with unmatched precision and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-[#0052FF]/50 transition-all duration-500"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${feature.accent} 0%, transparent 50%)`,
                }}
              />

              {/* Number */}
              <div
                className="text-6xl md:text-7xl font-black absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ color: feature.accent }}
              >
                {feature.icon}
              </div>

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#0052FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0052FF] to-[#00D4FF]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
