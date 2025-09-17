"use client"

import { useState, useEffect } from "react"
import HeaderSection from "@/components/sections/header-section"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import FooterSection from "@/components/sections/footer-section"

export default function HomePage() {
  // ==========================================
  // ESTADO Y HOOKS PRINCIPALES
  // ==========================================
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("inicio")

  // Hook para detectar el scroll de la página
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hook para detectar qué sección está activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "nosotros", "servicios", "testimonios", "contacto"]
      const scrollPosition = window.scrollY + 120 // Ajustado para el header fijo

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ==========================================
  // FUNCIÓN DE NAVEGACIÓN
  // ==========================================
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura del header fijo
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navegación */}
      <HeaderSection
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Sección Hero / Inicio */}
      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />

      {/* Sección Nosotros */}
      <AboutSection />

      {/* Sección Servicios */}
      <ServicesSection scrollToSection={scrollToSection} />

      {/* Sección Testimonios */}
      <TestimonialsSection />

      {/* Sección Contacto */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
