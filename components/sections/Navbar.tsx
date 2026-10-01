"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation"

type NavItem = { label: string; id?: string; href?: string }

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Projects", id: "projects" },
  { label: "Research Log", id: "research-log" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (item: NavItem) => {
    if (item.href) router.push(item.href);
    else if (scrollToSection && pathname === "/") scrollToSection(item.id!);
    else router.push(`/#${item.id}`);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/60 via-black/30 to-black/60 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent select-none cursor-pointer tracking-wide drop-shadow-lg"
          onClick={() => handleNavClick(navItems[0])}
        >
          Sarra Zerguerras
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="relative group text-gray-200 hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wide"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <CiMenuFries className="text-[32px] text-cyan-400 drop-shadow-lg" />
              </button>
            </SheetTrigger>
            <AnimatePresence>
              {menuOpen && (
                <SheetContent
                  side="right"
                  className="bg-[#0C081B] border-none p-0 shadow-2xl flex items-center justify-center"
                  forceMount
                >
                  <motion.div
                    key="mobile-nav"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <button
                        className="absolute top-6 right-6 text-cyan-400 hover:text-pink-400 transition-colors"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                      >
                        <X size={32} />
                      </button>
                      <nav className="flex flex-col items-center justify-center gap-12 flex-1">
                        {navItems.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavClick(item)}
                            className="text-2xl font-bold text-gray-100 hover:text-cyan-400 transition-all tracking-wider"
                            style={{ letterSpacing: "0.04em" }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                      <div className="text-center text-2xl pt-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-lg">
                        Sarra Zerguerras
                      </div>
                    </div>
                  </motion.div>
                </SheetContent>
              )}
            </AnimatePresence>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}