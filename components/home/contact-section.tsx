export function ContactSection() {
  return (
    <section className="border-t border-gray-100 bg-white py-16 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="نام"
              className="w-full rounded-full border border-gray-300 p-3 px-5 text-sm focus:border-[#95c146] focus:outline-none"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="w-full rounded-full border border-gray-300 p-3 px-5 text-sm focus:border-[#95c146] focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              placeholder="پست الکترونیک"
              dir="ltr"
              className="w-full rounded-full border border-gray-300 p-3 px-5 text-left text-sm focus:border-[#95c146] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="موبایل"
              dir="ltr"
              className="w-full rounded-full border border-gray-300 p-3 px-5 text-left text-sm focus:border-[#95c146] focus:outline-none"
            />
          </div>
          <div>
            <select className="w-full appearance-none rounded-full border border-gray-300 bg-white p-3 px-5 text-sm text-gray-500 focus:border-[#95c146] focus:outline-none">
              <option>انتخاب سرویس</option>
              <option>دوره صفر تا صد</option>
              <option>منتورینگ</option>
              <option>پانسیون</option>
            </select>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-[#68a45e] py-3 font-medium text-white transition hover:bg-[#578d4e]"
          >
            ثبت درخواست رزرو
          </button>
        </form>
      </div>
    </section>
  );
}
