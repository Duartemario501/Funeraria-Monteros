"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  // Datos de contacto
  const contactInfo = [
    { icon: Phone, title: "Teléfono 24/7", info: "+503-7041-6727", action: "tel:+50370416727" },
    {
      icon: Mail,
      title: "Correo Electrónico",
      info: "funeriamonteros24.7@gmail.com",
      action: "mailto:funeriamonteros24.7@gmail.com",
    },
    {
      icon: MapPin,
      title: "Dirección",
      info: "Colonia tazumal 2 polígono # 12 casa # 13\nChalchuapa, Santa Ana Norte",
      action: null,
    },
  ]

  // Horarios de atención
  const schedules = [
    { day: "Lunes - Viernes", hours: "8:00 AM - 4:00 PM" },
    { day: "Sábados", hours: "8:00 AM - 12:00 PM" },
    { day: "Domingos", hours: "8:00 AM - 12:00 PM" },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Estamos Aquí Para Usted</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700">Disponibles las 24 horas para brindarle el apoyo que necesita</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className={`flex items-center group ${contact.action ? "cursor-pointer" : ""}`}
                      onClick={() => contact.action && window.open(contact.action)}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                          {contact.title}
                        </p>
                        <p className="text-gray-600 whitespace-pre-line">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Horarios de atención */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Horarios de Atención</h3>
                <div className="space-y-4">
                  {schedules.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}

                  {/* Destacado de emergencias */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg text-center">
                    <p className="text-amber-700 font-semibold text-lg">Emergencias 24/7</p>
                    <p className="text-sm text-gray-600 mt-1">Siempre disponibles cuando nos necesite</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
