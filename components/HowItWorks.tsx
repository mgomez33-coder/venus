'use client'

import { motion } from 'framer-motion'
import { UserPlus, Target, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Tell us about your fitness level, goals, available equipment, and any constraints. Our AI builds a comprehensive picture of your starting point.',
    step: 1,
  },
  {
    icon: Target,
    title: 'Set Your Goals',
    description: 'Define what success looks like for you. Whether it\'s building muscle, losing fat, improving endurance, or preparing for an event — we\'ll help you get there.',
    step: 2,
  },
  {
    icon: Zap,
    title: 'Start Training',
    description: 'Follow your personalized workout plans, log your nutrition, and track your progress. Every rep, set, and meal gets analyzed to optimize your results.',
    step: 3,
  },
  {
    icon: TrendingUp,
    title: 'Watch Yourself Grow',
    description: 'Celebrate wins, break through plateaus, and see real transformation. Our adaptive system ensures you\'re always progressing toward your best self.',
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
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get Started in
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"> Minutes</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From signup to your first workout in under 5 minutes. No complicated setup, no lengthy questionnaires.
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
