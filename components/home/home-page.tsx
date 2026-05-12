"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/home/contact-section";
import { CorporateClientsSection } from "@/components/home/corporate-clients-section";
import { CourseSection } from "@/components/home/course-section";
import { HeroSection } from "@/components/home/hero-section";
import { MentoringSection } from "@/components/home/mentoring-section";
import { PensionSection } from "@/components/home/pension-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { VideoDocsSection } from "@/components/home/video-docs-section";

export function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col text-right font-sans">
      <SiteHeader />

      <main className="flex-grow">
        <HeroSection />
        <CourseSection />
        <MentoringSection />
        <PensionSection />
        <VideoDocsSection />
        <TestimonialsSection />
        <StatsSection />
        {/* <CorporateClientsSection /> */}
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
