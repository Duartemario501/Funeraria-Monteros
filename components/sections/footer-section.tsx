"use client"

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo y nombre en el footer - Mejorado y más grande */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-4 mb-4 hover:scale-110 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-transparent to-amber-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-white rounded-xl opacity-30"></div>
              <img
                src="/images/logo.png"
                alt="Funeraria Monteros Logo"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Funeraria Monteros
            </h3>
          </div>

          {/* Eslogan */}
          <p className="text-amber-200 mb-8 text-xl md:text-2xl font-medium">Con fe, en cada despedida</p>

          {/* Versículo bíblico */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-3">
                "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá."
              </p>
              <p className="text-amber-300 text-base md:text-lg font-semibold">Juan 11:25</p>
            </div>
          </div>

          {/* Línea decorativa */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

          {/* Copyright */}
          <p className="text-gray-400 text-base">© 2025 Funeraria Monteros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
