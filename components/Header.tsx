"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : undefined}>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Dewa United concept home"><Image src="https://dewaunited.com/logo.svg" alt="" width={30} height={30} unoptimized /><span>DEWA UNITED</span></a>
          <button className={`menu-toggle${open ? " is-open" : ""}`} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobileMenu" onClick={() => setOpen((value) => !value)}>
            <span /><span /><span />
          </button>
          <nav className="navlinks" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="navright"><a className="link" href="#shop">Official Store</a></div>
        </div>
      </header>
      <nav className={`mobile-menu${open ? " is-open" : ""}`} id="mobileMenu" aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </nav>
    </>
  );
}
