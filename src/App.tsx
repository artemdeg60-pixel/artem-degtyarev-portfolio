import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactsSection } from "./components/sections/ContactsSection";
import { DocumentsSection } from "./components/sections/DocumentsSection";
import { Hero } from "./components/sections/Hero";
import { ProjectSection } from "./components/sections/ProjectSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { Toast, type ToastState } from "./components/ui/Toast";
import { navItems } from "./data/siteContent";
import type { SectionId } from "./types/site";

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [toast, setToast] = useState<ToastState | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const navigateTo = useCallback((sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const showToast = useCallback((message: string) => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    setToast({ message });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header navItems={navItems} activeSection={activeSection} onNavigate={navigateTo} />
      <main>
        <Hero onNavigate={navigateTo} />
        <AboutSection />
        <SkillsSection />
        <ProjectSection onNavigate={navigateTo} />
        <DocumentsSection showToast={showToast} />
        <ContactsSection showToast={showToast} />
      </main>
      <Footer />
      <Toast toast={toast} />
    </>
  );
}

export default App;
