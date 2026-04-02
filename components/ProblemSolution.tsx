'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

const problems = [
  {
    title: 'Trabajar con Marcas es Complicado',
    description: 'Negociar directamente, enviar propuestas, esperar pagos... el proceso tradicional consume tiempo que podrías usar creando contenido.',
    solution: 'VENUS elimina la fricción. Nosotros manejamos las negotiations, contratos y pagos para que tú solo te enfoques en lo que haces mejor: crear.',
  },
  {
    title: 'No Tienes Cómo Probar Tu Valor',
    description: 'Los seguidores no lo son todo. Sin métricas reales, es difícil convencer a las marcas de que inviertan en ti.',
    solution: 'Construye un portafolio verificable con cada colaboración. Muestra tu alcance real, engagement y el impacto real en los negocios que has impulsado.',
  },
  {
    title: 'Las Mejores Oportunidades No Se Encuentran en Google',
    description: 'Las marcas buenas trabajan con creadores recomendados. Entrar al círculo correcto sin contactos es casi imposible.',
    solution: 'Nuestra IA conecta creadores verificados con marcas que buscan exactamente su estilo. Sin favoritismo, sin contactos previos.',
  },
]

export function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
            El Problema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Por Qué la Mayoría No
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Gana Dinero Real</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Identificamos los mayores obstáculos para los creadores y construimos VENUS para eliminar cada uno.
          </p>
        </motion.div>

        <div className="space-y-16">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
                  <X className="w-4 h-4" />
                  Problema
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  Solución VENUS
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Tu Camino hacia Ingresos
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
