import { Phone } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="bg-[#a3cc4e] py-12 text-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-right">
              <h4 className="mb-4 text-lg font-bold">درباره ما</h4>
              <p className="text-sm leading-relaxed text-gray-800">
                عمادمی حامی دانش و مهارت معامله گران برای حضور موفق در بازارهای
                مالی به خصوص دارایی های دیجیتال است. ما در عمادمی در مسیر دشوار
                معامله گری در کنار شما هستیم.
              </p>
            </div>
            <div className="text-right">
              <h4 className="mb-4 text-lg font-bold">دوره ها</h4>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>
                  <Link href="#">دوره صفر تا صد معامله گری</Link>
                </li>
                <li>
                  <Link href="#">دوره تحلیل تکنیکال پیشرفته</Link>
                </li>
                <li>
                  <Link href="#">دوره فیلم و فایننس</Link>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="mb-4 text-lg font-bold">خدمات</h4>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>
                  <Link href="#">منتورینگ معامله گر</Link>
                </li>
                <li>
                  <Link href="#">پانسیون معامله گری</Link>
                </li>
                <li>
                  <Link href="#">معاملات الگوریتمی</Link>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="mb-4 text-lg font-bold">تماس با ما</h4>
              <div className="flex items-center justify-start gap-2 text-sm text-gray-800">
                <span dir="ltr">09217638059</span>
                <Phone className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-between bg-[#2a303c] px-4 py-4 text-center text-sm text-gray-300 md:flex-row">
        <div className="order-2 mb-4 flex gap-4 md:order-1 md:mb-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600">
            In
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600">
            Te
          </span>
        </div>
        <p className="order-1 md:order-2">
          تمامی حقوق این سایت متعلق به عمادمی می‌باشد.
        </p>
      </div>
    </footer>
  );
}
