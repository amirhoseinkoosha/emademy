import { MENTORING_FEATURES } from '@/content/home';
import { motion } from 'motion/react';
import Link from 'next/link';

export function MentoringSection() {
  return (
    <section className="relative bg-[#222E3C] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-orange-500 sm:text-4xl">منتورینگ معامله گری</h2>
          <div className="mx-auto mt-4 mb-4 h-0.5 w-24 bg-orange-500/50" />
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-300">
            در دوره منتورینگ شما هر آنچه که آموخته اید را به طور عملی اجرا می کنید و نقاط ضعف و قوت شما توسط مربی های عمادمی
            کشف و به شما راه حل داده می شود.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-1"
          >
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-gray-700 bg-gray-800">
              <span className="text-gray-500">Image</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2"
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
              className="space-y-6"
            >
              {MENTORING_FEATURES.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start rounded-2xl border border-gray-700/50 bg-[#2a3847] p-5 transition-colors hover:bg-[#2f4052]"
                >
                  <div className="ml-4 mt-1 flex-shrink-0 rounded-full bg-white p-1 text-orange-500">
                    <span className="block h-4 w-4 rounded-full bg-orange-100" />
                  </div>
                  <p className="text-lg font-medium text-orange-400">{item}</p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mr-10 mt-12 flex justify-center gap-4 lg:justify-start">
              <Link
                href="#"
                className="rounded-full border border-transparent bg-[#95c146] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#85ad3d]"
              >
                بیشتر
              </Link>
              <Link
                href="#"
                className="rounded-full border border-orange-500 px-8 py-3 text-base font-medium text-orange-500 transition-colors hover:bg-orange-500/10"
              >
                درخواست رزرو
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
