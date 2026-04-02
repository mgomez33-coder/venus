'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Apple, HeartPulse, Trophy, Users, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Smart Workout Plans',
    description: 'AI-generated workout routines tailored to your fitness level, goals, and available equipment. New routines adapt based on your performance and recovery.',
  },
  {
    icon: Apple,
    title: 'Nutrition Tracking',
    description: 'Log meals effortlessly with our barcode scanner and AI nutrition assistant. Get personalized macro goals based on your training intensity.',
  },
  {
    icon: HeartPulse,
    title: 'Recovery Monitoring',
    description: 'Track sleep quality, heart rate variability, and muscle recovery scores. Know exactly when to push hard and when to rest for optimal gains.',
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Earn badges, unlock milestones, and compete on leaderboards. Stay motivated with challenges, streaks, and rewards for consistency.',
  },
  {
    icon: Users,
    title: 'Community Challenges',
    description: 'Join group challenges with friends or athletes worldwide. Create squads, participate in team events, and celebrate collective victories.',
  },
  {
    icon: Smartphone,
    title: 'Wearable Integration',
    description: 'Seamlessly sync with Apple Watch, Garmin, Fitbit, and WHOOP. Get real-time stats and guided workouts directly on your wrist.',
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
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our comprehensive suite of tools covers every aspect of your fitness journey, from training to nutrition to recovery.
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
