import { PENSION_FEATURES } from '@/content/home';
import { motion } from 'motion/react';
import Link from 'next/link';

export function PensionSection() {
  return (
    <section className="relative border-b border-gray-100 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">پانسیون معامله گری</h2>
          <div className="mx-auto mt-4 mb-4 h-0.5 w-24 bg-gray-300" />
          <p className="text-gray-500">محیطی ایده آل برای یک معامله گر حرفه ای</p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border border-gray-200 bg-gray-100">
              <span className="text-gray-400">Image</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-4"
            >
              {PENSION_FEATURES.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                >
                  <div className="ml-4 flex-shrink-0 rounded-full bg-white p-2 text-[#7A1D2E] shadow-sm">
                    <span className="block h-3 w-3 rounded-full bg-[#7A1D2E] opacity-50" />
                  </div>
                  <p className="text-lg font-medium text-[#7A1D2E]">{item}</p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mr-10 mt-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#"
                className="w-32 rounded-full border border-transparent bg-[#95c146] px-8 py-3 text-center text-base font-medium text-white transition-colors hover:bg-[#85ad3d]"
              >
                بیشتر
              </Link>
              <Link
                href="#"
                className="rounded-full border-2 border-orange-500 px-8 py-3 text-center text-base font-medium text-orange-500 transition-colors hover:bg-orange-50"
              >
                درخواست رزرو پانسیون
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
