import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 20, suffix: ",000,000", unit: "SF", label: "Concrete Finished" },
  { value: 5, suffix: ",000,000", unit: "Cubic", label: "Yards Poured" },
  { value: 500, suffix: "+", unit: "Buildings", label: "Completed and Counting" },
];

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatItem = ({ value, suffix, unit, label, delay, inView }: any) => {
  const count = useCountUp(value, 2000, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-heading text-sm tracking-widest uppercase text-secondary-foreground/60 mt-1">
        {unit}
      </div>
      <div className="text-muted-foreground mt-1 text-sm">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-secondary py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 0.2} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
