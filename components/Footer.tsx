'use client'

import { Instagram, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Plataforma: ['Explorar Campañas', 'Para Creadores', 'Para Marcas', 'Cómo Funciona', 'Precios'],
  Compañía: ['Sobre Nosotros', 'Carreras', 'Prensa', 'Blog', 'Socios'],
  Legal: ['Centro de Ayuda', 'Términos', 'Privacidad', 'Seguridad', 'Contacto'],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              VENUS
            </a>
            <p className="mt-4 text-slate-400 max-w-sm">
              Conectando creadores auténticos con marcas y restaurantes premium. Monetiza tu contenido de forma real y transparente.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 VENUS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
