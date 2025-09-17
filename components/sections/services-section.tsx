"use client"

import { Clock, Heart, Users, MapPin, Mail, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServicesSectionProps {
  scrollToSection: (section: string) => void
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  // Datos de los servicios
  const services = [
    {
      title: "Atención y Asesoría Personalizada (24/7)",
      icon: Clock,
      desc: "Nuestro equipo está disponible las 24 horas del día para guiarle con sensibilidad en todos los trámites y decisiones necesarias.",
      items: [
        "Asesoramiento integral con soporte empático",
        "Gestión y coordinación de traslados",
        "Disponibilidad completa los 365 días del año",
        "Apoyo desde el primer contacto",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Preparación y Cuidado del Ser Querido",
      icon: Heart,
      desc: "Preparación profesional para presentar a su ser querido de la manera más digna y serena posible.",
      items: [
        "Acondicionamiento estético profesional",
        "Capillas de velación privadas",
        "Espacios acogedores para el recogimiento",
      ],
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Ceremonias y Velatorios",
      icon: Users,
      desc: "Organización del velatorio según los deseos de la familia y las tradiciones cristianas.",
      items: [
        "Velatorio personalizado",
        "Coordinación con líderes religiosos",
        "Servicios fúnebres (misas, cultos, oraciones)",
        "Servicios conmemorativos significativos",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Opciones de Destino Final",
      icon: MapPin,
      desc: "Gestión completa para el sepelio, incluyendo preparación del sitio y acompañamiento durante el acto final.",
      items: [
        "Inhumación (entierro) completa",
        "Coordinación en cementerios",
        "Variedad de ataúdes de calidad",
        "Adaptación a preferencias y presupuesto",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      title: "Asesoría en Trámites Legales",
      icon: Mail,
      desc: "Apoyo completo en la obtención de documentos legales y procedimientos administrativos requeridos.",
      items: [
        "Gestión de certificado de defunción",
        "Documentación legal necesaria",
        "Trámites en registros y cementerios",
        "Acompañamiento en procedimientos",
      ],
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Servicios Complementarios",
      icon: Star,
      desc: "Servicios adicionales que complementan y enriquecen el homenaje a su ser querido.",
      items: [
        "Arreglos florales variados",
        "Coronas y ramos especiales",
        "Planes de previsión funeraria",
        "Asesoría personalizada anticipada",
      ],
      color: "from-amber-400 to-amber-600",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título y descripción de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En Funeraria Monteros, estamos comprometidos con ofrecer un acompañamiento completo y digno, adaptado a
              las necesidades y creencias de cada familia. Entendemos que cada vida es única y, por ello, cada despedida
              merece ser especial. Nuestros servicios están diseñados para brindar paz y apoyo en momentos de duelo.
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <CardContent className="p-6 h-full">
                  {/* Encabezado del servicio */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Descripción del servicio */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                  {/* Lista de características */}
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-600 transition-colors duration-300"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sección de planes de previsión */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Planes de Previsión Funeraria</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Información de los planes */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Planificación Anticipada</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Ofrecemos planes de previsión funeraria que permiten organizar y costear los servicios con
                      antelación, brindando tranquilidad y alivio económico a la familia en el futuro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Asesoría Personalizada</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Nuestro equipo le guiará para elegir el plan que mejor se adapte a sus necesidades y las de su
                      familia, con total transparencia y respeto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta de compromiso */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Compromiso de Calidad</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En Funeraria Monteros, cada servicio se ofrece con el máximo respeto, profesionalismo y un corazón
                  compasivo.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-sm text-gray-600 italic">
                    "Entendemos la importancia de cuidar a quienes confían en nosotros en sus momentos más difíciles."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesita Nuestros Servicios?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Estamos aquí para acompañarle en este momento difícil. Contáctenos las 24 horas para recibir la atención
                personalizada y el apoyo que su familia merece en estos momentos tan importantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("contacto")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar Ahora
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-gray-900 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("nosotros")}
                >
                  Conocer Más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
