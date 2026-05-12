import { motion } from 'motion/react';

export function CorporateClientsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">برخی از مشتریان سازمانی ما</h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`flex cursor-default items-center justify-center border border-gray-200 bg-gray-50 shadow-sm transition-shadow hover:shadow-md
                ${i === 5 ? 'h-20 w-48 rounded-full' : 'h-32 w-40 rounded-3xl'}
              `}
            >
              <span className="text-xs text-gray-400">Client Logo</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
