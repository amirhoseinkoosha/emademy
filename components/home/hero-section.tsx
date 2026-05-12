import { APARAT_EMBED_URL } from "@/content/home";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#caeadd]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <h1 className="mb-6 flex flex-col gap-2 text-5xl font-extrabold text-gray-900 drop-shadow-sm md:text-7xl">
              عمادمی
              <span className="mt-2 block text-2xl font-medium tracking-tight text-gray-800 md:text-3xl">
                همراه شما در مسیر معامله‌گری موفق
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-700 lg:mx-0 mx-auto">
              معامله‌گر موفق، بازدهی مانا مبتنی بر یک سیستم معاملاتی دارد
              <br />و نیازمند بررسی میزان انحراف خود از آن سیستم است.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-black shadow-lg">
                <iframe
                  src={APARAT_EMBED_URL}
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full border-0"
                  title="معرفی عمادمی"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#"
                className="rounded-full border border-transparent bg-[#28998b] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#208074]"
              >
                دوره صفر تا صد معامله گری
              </Link>
              <Link
                href="#"
                className="rounded-full border border-transparent bg-[#28998b] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#208074]"
              >
                منتورینگ معامله گری
              </Link>
              <Link
                href="#"
                className="rounded-full border border-transparent bg-[#28998b] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#208074]"
              >
                پانسیون معامله گری
              </Link>
              <Link
                href="#"
                className="mt-2 basis-full rounded-full border border-transparent bg-[#30af9f] px-6 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-[#2da394] sm:mt-0 sm:basis-auto"
              >
                درخواست مشاوره رایگان
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex aspect-square w-full items-center justify-center rounded-full border-4 border-dashed border-[#28998b]/30 bg-white/40 overflow-hidden"
            >
              {/* <span className="text-xl font-medium text-gray-500">Hero Image (Brain/Bulbs)</span> */}
              <Image
                src={"/hero.png"}
                width={700}
                height={700}
                alt=""
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
