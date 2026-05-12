import type {Metadata} from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css'; // Global styles

const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazirmatn' });

export const metadata: Metadata = {
  title: 'عمادمی | Emademy',
  description: 'همراه شما در مسیر معامله‌گری موفق - آکادمی عمادمی',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
