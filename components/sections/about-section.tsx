"use client"

import { Heart, Users, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Funeraria Monteros</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Primera fila: Texto + Logo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En Funeraria Monteros, entendemos que la despedida de un ser querido es uno de los momentos más
                delicados y vulnerables en la vida de una familia. Con un profundo compromiso con la fe cristiana y una
                vocación de servicio, nos dedicamos a ofrecer un acompañamiento integral, basado en la empatía, la
                dignidad y el respeto.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra misión va más allá de los servicios funerarios. Nos esforzamos por ser un pilar de paz y
                consuelo para cada familia en El Salvador, guiándolos con sensibilidad y profesionalismo a través de
                cada paso. Desde el primer contacto, nuestro equipo se dedica a honrar la memoria del difunto y a apoyar
                a los vivos, asegurando que cada despedida sea un tributo significativo y sereno, alineado con sus
                creencias y deseos.
              </p>
            </div>

            {/* Logo central con efectos */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-100 via-white to-amber-50 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full animate-pulse"></div>
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 p-6">
                    <img
                      src="/images/logo.png"
                      alt="Funeraria Monteros Logo"
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Segunda fila: Elemento visual + Texto */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 bg-gradient-to-br from-gray-100 to-amber-50 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center shadow-lg p-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Con fe, en cada despedida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En Funeraria Monteros, creemos firmemente en la importancia de la compasión humana y el valor de la
                esperanza que nos brinda la fe. Por ello, cada detalle, desde la atención personalizada hasta la
                atmósfera de nuestras instalaciones, está diseñado para proporcionar un ambiente de tranquilidad y
                reflexión.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Estamos aquí para ofrecerle no solo un servicio, sino un verdadero acompañamiento en su camino hacia el
                consuelo.
              </p>

              {/* Cita destacada */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg font-medium text-gray-800 italic">
                  "Somos más que una funeraria; somos una familia que cuida de la suya, con el corazón puesto en el
                  servicio y la mirada en la luz de la fe."
                </p>
              </div>
            </div>
          </div>

          {/* Valores de la empresa */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Heart,
                title: "Compasión",
                desc: "Acompañamos con empatía y comprensión en cada momento",
                color: "from-red-400 to-red-600",
              },
              {
                icon: Users,
                title: "Familia",
                desc: "Tratamos a cada familia como si fuera la nuestra",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Clock,
                title: "Disponibilidad",
                desc: "Servicio las 24 horas, los 365 días del año",
                color: "from-amber-400 to-amber-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:rotate-12`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
