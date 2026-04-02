'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

const problems = [
  {
    title: 'Generic Workout Plans Don\'t Work',
    description: 'Following random routines from the internet leads to plateaus, injuries, and wasted time. Your body deserves a program built specifically for you.',
    solution: 'VENUS uses advanced AI to analyze your body type, fitness history, and goals to create perfectly tailored workout plans that evolve with your progress.',
  },
  {
    title: 'Nutrition Tracking is Too Complicated',
    description: 'Counting calories and macros manually is tedious and often inaccurate. Most people give up within weeks.',
    solution: 'Our smart scanner and AI assistant make logging meals takes seconds. Get personalized macro targets that adjust based on your training intensity.',
  },
  {
    title: 'No Way to Measure Real Progress',
    description: 'The scale doesn\'t tell the whole story. Without proper metrics, it\'s hard to know if your training is actually working.',
    solution: 'Track everything from strength gains to recovery scores. Visualize your progress with detailed analytics and celebrate milestones along the way.',
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
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Most Fitness Apps
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Fail</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We identified the biggest obstacles to fitness success and built VENUS to overcome each one.
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
                  Problem
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
                  VENUS Solution
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Your Path to Success
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
