"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStats({ stats }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-5 py-12 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
            >
              <p className="text-3xl font-semibold text-[#0b2a5b] sm:text-4xl">
                {typeof stat.value === "number" ? (
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                ) : (
                  `${stat.value}${stat.suffix}`
                )}
              </p>
              <p className="mt-2 text-sm font-medium uppercase text-slate-600">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix, isVisible }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    let animationFrame = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target]);

  return `${value}${suffix}`;
}
