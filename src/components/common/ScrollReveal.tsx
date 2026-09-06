import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade";
  duration?: number; // Duration in milliseconds (e.g., 700, 1000)
  delay?: number;    // Delay before starting in milliseconds
  threshold?: number; // How much of the item needs to be visible (0.0 to 1.0)
  once?: boolean;     // If true, animates only once. If false, resets when scrolling away.
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          // Reset animation state when scrolled out of view
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [once, threshold]);

  // Map variants to Tailwind starting classes
  const getVariantStyles = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";

    switch (variant) {
      case "fade-up":
        return "opacity-0 translate-y-12";
      case "fade-down":
        return "opacity-0 -translate-y-12";
      case "fade-left":
        return "opacity-0 translate-x-12";
      case "fade-right":
        return "opacity-0 -translate-x-12";
      case "fade":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) transform will-change-transform ${getVariantStyles()}`}
    >
      {children}
    </div>
  );
}
