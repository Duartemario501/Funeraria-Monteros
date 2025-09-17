"use client"

import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollY: number
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollY, scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-gray-100 via-amber-50 to-gray-100 pt-32 pb-20 overflow-hidden"
    >
      {/* Fondo animado con parallax */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo principal y título */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-all duration-500 p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-amber-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-white rounded-xl opacity-50"></div>
              <img
                src="/images/logo.png"
                alt="Funeraria Monteros Logo"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">Funeraria Monteros</h1>
            <p className="text-xl md:text-2xl text-amber-700 font-medium mb-6 animate-slide-up-delay">
              Con fe, en cada despedida
            </p>
          </div>

          {/* Descripción principal */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fade-in-delay">
            En los momentos más difíciles, estamos aquí para brindar paz, consuelo y acompañamiento a su familia. Con
            más de 30 años de experiencia, ofrecemos servicios funerarios con la calidez y respeto que su ser querido
            merece.
          </p>

          {/* Versículo bíblico */}
          <div className="mb-8 animate-fade-in-delay">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50 max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed italic mb-3">
                "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá."
              </p>
              <p className="text-amber-600 font-semibold">Juan 11:25</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <Button
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contacto")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactar 24/7
            </Button>
            <Button
              variant="outline"
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("servicios")}
            >
              Conocer Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-amber-600" />
      </div>
    </section>
  )
}
