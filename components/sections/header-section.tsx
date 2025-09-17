"use client"

import type React from "react"

import { Menu, X } from "lucide-react"

interface HeaderSectionProps {
  scrollY: number
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
  scrollToSection: (section: string) => void
  activeSection: string
}

// Componente para los enlaces de navegación
const NavLink = ({
  href,
  children,
  activeSection,
  scrollToSection,
}: {
  href: string
  children: React.ReactNode
  activeSection: string
  scrollToSection: (section: string) => void
}) => (
  <button
    onClick={() => scrollToSection(href.replace("#", ""))}
    className={`text-gray-700 hover:text-amber-600 transition-all duration-300 relative group ${
      activeSection === href.replace("#", "") ? "text-amber-600" : ""
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full ${
        activeSection === href.replace("#", "") ? "w-full" : ""
      }`}
    ></span>
  </button>
)

export default function HeaderSection({
  scrollY,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  activeSection,
}: HeaderSectionProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection("inicio")}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/logo.png"
                alt="Funeraria Monteros Logo"
                className="w-full h-full object-contain relative z-10 filter group-hover:drop-shadow-md transition-all duration-300"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                Funeraria Monteros
              </h1>
              <p className="text-sm text-gray-600">Con fe, en cada despedida</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#inicio" activeSection={activeSection} scrollToSection={scrollToSection}>
              Inicio
            </NavLink>
            <NavLink href="#nosotros" activeSection={activeSection} scrollToSection={scrollToSection}>
              Nosotros
            </NavLink>
            <NavLink href="#servicios" activeSection={activeSection} scrollToSection={scrollToSection}>
              Servicios
            </NavLink>
            <NavLink href="#testimonios" activeSection={activeSection} scrollToSection={scrollToSection}>
              Testimonios
            </NavLink>
            <NavLink href="#contacto" activeSection={activeSection} scrollToSection={scrollToSection}>
              Contacto
            </NavLink>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navegación móvil */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4">
            {["inicio", "nosotros", "servicios", "testimonios", "contacto"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
