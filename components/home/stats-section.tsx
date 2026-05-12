import { STATS } from '@/content/home';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function StatsSection() {
  return (
    <section className="relative bg-[#95c146] py-12 text-white">
      <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#28998b] shadow">
        <ChevronDown className="h-5 w-5 text-white" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-x-reverse divide-[#b4d673] md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="cursor-default py-4 text-center"
            >
              <div className="mb-2 text-5xl font-bold drop-shadow-sm">{stat.num}</div>
              <div className="text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
