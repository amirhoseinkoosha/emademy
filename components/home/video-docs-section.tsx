import { APARAT_EMBED_URL } from '@/content/home';
import { motion } from 'motion/react';

export function VideoDocsSection() {
  return (
    <section className="bg-[#f0f2f5] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video w-full overflow-hidden rounded-3xl border border-gray-800 bg-black shadow-xl"
          >
            <iframe
              src={APARAT_EMBED_URL}
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full border-0"
              title="توضیحات دکتر کوشا درباره عمادمی"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl border border-dashed border-green-500 bg-white/50 p-6 text-center">
              <h3 className="text-xl font-bold leading-relaxed text-gray-800">
                توضیحات دکتر کوشا در مورد
                <br />
                سرویس ها و خدمات عمادمی
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
