'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Reveal({ children, className = '', delay = 0, hover = false }: { children: ReactNode; className?: string; delay?: number; hover?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay }} viewport={{ once: true }} whileHover={hover ? { y: -5 } : undefined} className={className}>
      {children}
    </motion.div>
  )
}
