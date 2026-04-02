'use client'

import { motion } from 'framer-motion'
import { Wifi, Users, CreditCard, BarChart2, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'Conexión Inteligente',
    description: 'Nuestra IA empareja creadores con restaurantes y marcas que buscan autenticidad. Olvídate de buscar clientes manualmente.',
  },
  {
    icon: Users,
    title: 'Experiencias VIP',
    description: 'Visitas el lugar como invitado especial, pruebas el menú y compartes tu experiencia genuina con tu audiencia.',
  },
  {
    icon: CreditCard,
    title: 'Pagos Automáticos',
    description: 'Contratos inteligentes aseguran entregables transparentes y pago inmediato tras la aprobación. Siningale.',
  },
  {
    icon: BarChart2,
    title: 'Portafolio Profesional',
    description: 'Construye un historial verificable que trasciende los algoritmos. Muestra tu impacto real a futuras marcas.',
  },
  {
    icon: Shield,
    title: 'Verificación Instantánea',
    description: 'Perfil verificado y sistema de reseñas. Las marcas saben exactamente quién es su creador.',
  },
  {
    icon: Zap,
    title: 'Crecimiento Acelerado',
    description: 'Accede a promociones exclusivas, eventos solo por invitación y oportunidades que no encontrarás en redes sociales.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Todo lo que Necesitas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Tu Camino hacia
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"> Ingresos Reales</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Una plataforma completa que cubre cada aspecto de tu carrera como creador, desde encontrar oportunidades hasta cobrar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
