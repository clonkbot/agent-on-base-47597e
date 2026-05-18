import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Transactions', value: 127843, suffix: '', prefix: '' },
  { label: 'ETH Processed', value: 2847, suffix: '', prefix: '' },
  { label: 'Uptime', value: 99.97, suffix: '%', prefix: '' },
  { label: 'Active Since', value: 2024, suffix: '', prefix: '' },
];

function AnimatedNumber({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(increment * step));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-mono">
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-y border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-[#0052FF] transition-colors">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
