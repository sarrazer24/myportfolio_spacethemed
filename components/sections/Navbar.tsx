"use client";
import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    setDarkMode(shouldUseDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    document.documentElement.classList.toggle("dark", nextDarkMode);
    window.localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
    setDarkMode(nextDarkMode);
  };

  return (
    <nav className="site-nav fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="container relative mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="cursor-pointer select-none text-2xl font-extrabold tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          <Link className="site-brand transition-colors" href="/">
            sarraverse
          </Link>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative group font-semibold tracking-wide transition-colors duration-300 ${pathname === item.href ? "text-cocoa-700" : "text-slate-700 hover:text-cocoa-700"}`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-cocoa-500 transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/KhayraSarraZerguerrasCV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-cocoa-500 px-5 py-2 text-sm font-semibold tracking-wide text-cocoa-700 transition-colors hover:bg-cocoa-500 hover:text-white md:block"
          >
            View Resume
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full p-2 text-slate-700 transition-colors hover:bg-cocoa-500/10 hover:text-cocoa-700 dark:text-slate-200"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu">
                  <Menu className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                </button>
              </SheetTrigger>
              <AnimatePresence>
                {menuOpen && (
                  <SheetContent
                    side="right"
                    className="site-menu flex items-center justify-center border-none bg-[#f7f3ee] p-0 shadow-2xl"
                    forceMount
                  >
                    <motion.div
                      key="mobile-nav"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <button
                          className="absolute right-6 top-6 text-slate-800 transition-colors hover:text-cocoa-700 dark:text-slate-200"
                          onClick={() => setMenuOpen(false)}
                          aria-label="Close menu"
                        >
                          <X size={32} />
                        </button>
                        <nav className="flex flex-1 flex-col items-center justify-center gap-12">
                          {siteConfig.navItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className={`text-2xl font-bold tracking-wider transition-all ${pathname === item.href ? "text-cocoa-700" : "text-slate-900 hover:text-cocoa-700 dark:text-slate-100"}`}
                              style={{ letterSpacing: "0.04em" }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </nav>
                        <div className="pb-10 text-center text-2xl font-extrabold tracking-wide text-cocoa-700 dark:text-white">
                          sarraverse
                        </div>
                      </div>
                    </motion.div>
                  </SheetContent>
                )}
              </AnimatePresence>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}