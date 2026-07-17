import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { STATISTICS } from "../../constants/statistics";

const getCount = (value: string) => Number(value.replace(/[^0-9]/g, ""));

const Statistics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(() => STATISTICS.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const startCounter = () => setHasStarted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const targets = STATISTICS.map((item) => getCount(item.count));
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      const frameId = requestAnimationFrame(() => setCounts(targets));
      return () => cancelAnimationFrame(frameId);
    }

    const duration = 1600;
    const startedAt = performance.now();
    let frameId = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((target) => Math.round(target * easedProgress)));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="pb-14 sm:pb-20">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {STATISTICS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 p-5 sm:p-6 lg:gap-5 lg:p-7 ${index !== STATISTICS.length - 1 ? "border-b border-gray-100 md:border-b-0 md:odd:border-r lg:border-r" : ""}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 sm:h-14 sm:w-14">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tabular-nums text-slate-950 sm:text-3xl">
                      {counts[index].toLocaleString("en-IN")}+
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Statistics;
