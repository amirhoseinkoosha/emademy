import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10 md:space-x-reverse">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              href="#"
              className="text-2xl font-bold tracking-tight text-[#ccebda]"
            >
              <div className="flex h-16 w-40 items-center justify-center border border-gray-200 bg-gray-100">
                <span className="text-sm text-gray-400">Logo</span>
              </div>
            </Link>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">باز کردن منو</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </button>
          </div>

          <nav className="hidden items-center space-x-8 space-x-reverse pt-2 md:flex">
            <Link
              href="#"
              className="text-base font-medium text-[#95c146] hover:text-[#7ba038]"
            >
              صفحه اصلی
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              دوره های آموزشی
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <span>خدمات معامله گری</span>
                <ChevronDown
                  className="mr-1 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                  aria-hidden
                />
              </button>
            </div>
            <Link
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              رباتمی
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              وبلاگ
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <span>فایل های آموزشی</span>
                <ChevronDown
                  className="mr-2 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                  aria-hidden
                />
              </button>
            </div>
            <div className="group relative">
              <button
                type="button"
                className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <span>درباره ما</span>
                <ChevronDown
                  className="mr-1 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                  aria-hidden
                />
              </button>
            </div>
            <Link
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-900 mr-4"
            >
              تماس با ما
            </Link>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex h-8 w-24 items-center justify-center border border-gray-200 bg-gray-100">
                    <span className="text-xs text-gray-400">Logo</span>
                  </div>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#95c146] focus:ring-inset"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">بستن منو</span>
                    <X className="h-6 w-6" aria-hidden />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 text-[#95c146]"
                  >
                    صفحه اصلی
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 text-gray-900"
                  >
                    دوره های آموزشی
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 text-gray-900"
                  >
                    خدمات معامله گری
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 text-gray-900"
                  >
                    وبلاگ
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 text-gray-900"
                  >
                    تماس با ما
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
