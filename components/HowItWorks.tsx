'use client'

import { motion } from 'framer-motion'
import { UserPlus, Target, Camera, Wallet } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Crea Tu Perfil',
    description: 'Cuéntanos sobre tu estilo de contenido, audiencia y redes sociales. Nuestra IA evalúa tu perfil y te verifica rápidamente.',
    step: 1,
  },
  {
    icon: Target,
    title: 'Explora Oportunidades',
    description: 'Navega campañas de restaurantes y marcas que encajan con tu perfil. Filtra por ubicación, tipo de contenido o compensación.',
    step: 2,
  },
  {
    icon: Camera,
    title: 'Crea y Comparte',
    description: 'Recibe a tu cliente VIP, disfruta la experiencia y captura tu historia. Comparte tu contenido auténtico tras la aprobación.',
    step: 3,
  },
  {
    icon: Wallet,
    title: 'Cobra Sin Esperar',
    description: 'Recibe tu compensación automáticamente al aprobar tu contenido. Sin facturas, sin perseguir pagos, sin complicaciones.',
    step: 4,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Proceso Sencillo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Empieza en
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"> Minutos</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Del registro a tu primera oportunidad en menos de 5 minutos. Sin procesos complicados, sin cuestionarios eternos.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300 h-full">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
