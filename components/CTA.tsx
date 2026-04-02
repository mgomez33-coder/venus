'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'Registro gratuito, sin tarjeta requerida',
  'Cancela cuando quieras, sin preguntas',
  'Acceso a todas las campañas desde el inicio',
  'Perfil verificado desde el día uno',
]

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920')] bg-cover bg-center opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para Elevar
            <br />
            Tu Juego como Creador?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Únete a miles de creadores que ya están monetizando su contenido de forma real. Tu futuro yo te lo agradecerá.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-white hover:bg-slate-50 text-primary-600 font-bold rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-semibold rounded-full transition-all duration-200">
              Ver Oportunidades
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-100">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
