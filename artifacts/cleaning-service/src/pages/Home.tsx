import { Suspense, lazy } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const Services = lazy(() => import("@/components/Services").then((m) => ({ default: m.Services })));
const Process = lazy(() => import("@/components/Process").then((m) => ({ default: m.Process })));
const BeforeAfter = lazy(() => import("@/components/BeforeAfter").then((m) => ({ default: m.BeforeAfter })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then((m) => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })));
const CTA = lazy(() => import("@/components/CTA").then((m) => ({ default: m.CTA })));
const Contact = lazy(() => import("@/components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="py-24" />}>
          <Services />
          <Process />
          <BeforeAfter />
          <WhyChooseUs />
          <Testimonials />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
