import { COURSE_CARDS } from "@/content/home";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function CourseSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500">
            با دوره
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            صفر تا صد معامله‌گری در بازار رمزارزها
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            همه چیزهایی که باید برای معامله‌گری در بازار ارزهای دیجیتال بدانید
            را فرا می‌گیرید.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {COURSE_CARDS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex h-48 w-full items-center justify-center rounded-t-3xl border-b border-gray-100 bg-white/10 top-4">
                <Image
                  src={item.image}
                  width={350}
                  height={350}
                  alt=""
                  className="object-contain "
                />
              </div>
              <div className="flex-1 p-6 text-center">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="#"
            className="rounded-full border border-transparent bg-[#95c146] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#85ad3d]"
          >
            بیشتر
          </Link>
          <Link
            href="#"
            className="rounded-full border border-transparent bg-[#95c146] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#85ad3d]"
          >
            دوره های دیگر
          </Link>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="#"
            className="rounded-full border-2 border-orange-500 bg-white px-8 py-3 text-base font-medium text-orange-500 transition-colors hover:bg-orange-50"
          >
            درخواست رزرو دوره صفر تا صد
          </Link>
        </div>
      </div>
    </section>
  );
}
