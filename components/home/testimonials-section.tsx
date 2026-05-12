import { AUDIO_TESTIMONIALS, TESTIMONIAL_QUOTES } from '@/content/home';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const next = () => setActiveTestimonial((prev) => (prev === TESTIMONIAL_QUOTES.length - 1 ? 0 : prev + 1));
  const prev = () => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIAL_QUOTES.length - 1 : prev - 1));

  return (
    <section className="bg-[#f0f2f5] pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="inline-block rounded-xl bg-[#95c146] px-4 py-1 text-2xl font-bold text-white">
            نظرات مشتریان ما را بشنوید
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 bg-transparent md:grid-cols-2">
          <div className="order-2 flex items-center justify-center md:order-1">
            <div className="flex aspect-[3/4] w-64 items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <span className="text-gray-400">Image</span>
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center space-y-8 md:order-2">
            {AUDIO_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-end text-right"
              >
                <h4 className="mb-1 text-lg font-bold text-gray-900">{t.name}</h4>
                <p className="mb-3 text-sm text-gray-500">{t.desc}</p>
                <div className="flex w-full max-w-sm items-center justify-end gap-4 rounded-full border border-gray-100 bg-white/50 p-2">
                  <span className="font-mono text-xs text-gray-400" dir="ltr">
                    00:00 / 00:00
                  </span>
                  <div className="relative ml-2 h-3 max-w-xs flex-1 rounded-full bg-gray-600" />
                  <button type="button" className="text-gray-700 hover:text-black focus:outline-none">
                    <Play className="h-5 w-5" fill="currentColor" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm text-gray-500">دیدگاه ها</p>
            <h2 className="text-3xl font-extrabold text-gray-900">
              مشتریان ما <span className="text-orange-500">چه میگویند</span>
            </h2>
            <div className="mx-auto mt-6 h-[1px] w-16 bg-gray-300" />
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-12"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-xs text-gray-400">IMG</span>
                </div>
                <p className="text-lg italic leading-relaxed text-gray-600 md:text-xl">
                  &quot;{TESTIMONIAL_QUOTES[activeTestimonial]}&quot;
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow transition-transform hover:scale-110 hover:text-[#95c146] focus:outline-none"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="mx-4 flex gap-2">
                {TESTIMONIAL_QUOTES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-3 w-3 rounded-full transition-colors focus:outline-none ${
                      activeTestimonial === i ? 'bg-[#95c146]' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow transition-transform hover:scale-110 hover:text-[#95c146] focus:outline-none"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
