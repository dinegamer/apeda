"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À Propos" },
    { href: "#projet", label: "Le Projet" },
    { href: "#dyslexie", label: "La Dyslexie" },
    { href: "#activites", label: "Activités" },
    { href: "#partenaires", label: "Partenaires" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (href === "#accueil") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link
            href="#accueil"
            onClick={(e) => handleNavClick(e, "#accueil")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-20 h-20 group-hover:scale-110 transition-all duration-300">
              <Image
                src="logo.jpg"
                alt="APEDA-MALI Logo"
                fill
                className="object-contain rounded-2xl shadow-md"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-heading font-bold text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                APEDA-MALI
              </div>
              <div className="text-sm text-gray-700 font-medium">Ensemble pour l'éducation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-gray-800 hover:text-primary transition-all duration-300 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-8 h-14 text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a href="#partenaires" onClick={(e) => handleNavClick(e, "#partenaires")}>
                Devenir Partenaire
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 transition-all duration-300 px-4 py-3 rounded-lg hover:translate-x-2 cursor-pointer"
                  style={{
                    animation: isMobileMenuOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s forwards` : "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold h-14 text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <a href="#partenaires" onClick={(e) => handleNavClick(e, "#partenaires")}>
                    Devenir Partenaire
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
