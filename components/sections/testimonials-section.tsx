"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  // Datos de los testimonios
  const testimonials = [
    {
      text: "En el momento más difícil de nuestras vidas, Funeraria Monteros nos brindó el apoyo y la comprensión que necesitábamos. Su profesionalismo y calidez humana hicieron que pudiéramos despedir a nuestro padre con la dignidad que merecía.",
      name: "María González",
      family: "Familia González",
      initials: "MG",
    },
    {
      text: "Agradecemos infinitamente la atención recibida. Desde el primer momento nos sentimos acompañados y comprendidos. El servicio fue impecable y nos permitió concentrarnos en lo realmente importante: estar unidos como familia.",
      name: "José Rodríguez",
      family: "Familia Rodríguez",
      initials: "JR",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonios de Familias</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700">
              El apoyo y la confianza de las familias que hemos servido nos motiva cada día
            </p>
          </div>

          {/* Grid de testimonios */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
              >
                <CardContent className="p-6 relative">
                  {/* Estrellas de calificación */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  {/* Información del cliente */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.family}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
