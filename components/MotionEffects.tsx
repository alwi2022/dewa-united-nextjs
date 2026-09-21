"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .section-head, .fixture-card, .media-card, .video-card, .world, .trophy-card, .product, .logo-cell"));
    elements.forEach((element) => element.classList.add("motion-fade"));

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible", "visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const siblings = element.parentElement ? Array.from(element.parentElement.children).filter((node) => node.classList.contains("motion-fade")) : [];
        const delay = Math.min(Math.max(0, siblings.indexOf(element)) * 70, 280);
        window.setTimeout(() => element.classList.add("is-visible", "visible"), delay);
        observer.unobserve(element);
      });
    }, { threshold: 0.11, rootMargin: "0px 0px -5% 0px" });
    elements.forEach((element) => observer.observe(element));

    const heroImage = document.querySelector<HTMLElement>(".hero-media img");
    const onScroll = () => {
      if (heroImage && window.scrollY < window.innerHeight) heroImage.style.transform = `scale(1.03) translateY(${window.scrollY * 0.035}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
