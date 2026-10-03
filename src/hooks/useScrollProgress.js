import { useState, useEffect, useRef } from 'react';

export const useScrollProgress = (containerRef, lerpFactor = 0.1) => {
  const [progress, setProgress] = useState(0);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) {
        targetProgress.current = 0;
        return;
      }

      // Progress goes 0 to 1 when container scrolls through viewport
      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));
      targetProgress.current = rawProgress;
    };

    const updateLoop = () => {
      // Smooth interpolation (lerp)
      currentProgress.current += (targetProgress.current - currentProgress.current) * lerpFactor;
      if (Math.abs(targetProgress.current - currentProgress.current) < 0.0005) {
        currentProgress.current = targetProgress.current;
      }
      setProgress(currentProgress.current);
      rafId.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    rafId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, lerpFactor]);

  return progress;
};
