"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MarikaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10">
        <header className="p-6 border-b border-amber-900/50">
          <Link 
            href="/"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors w-fit"
          >
            <ChevronLeft />
            <span>Back to Radagon</span>
          </Link>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">QUEEN MARIKA THE ETERNAL</h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Eternal Queen</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                Queen Marika the Eternal, vessel of the Elden Ring and founder of the Golden Order. As a Numen, 
                she was chosen by the Greater Will to rule over the Lands Between, establishing an age of grace 
                through the power of the Elden Ring.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                Her first consort was Godfrey, the first Elden Lord, with whom she waged war against the giants 
                and established her dominion. After Godfrey lost his grace and became Tarnished, she took Radagon 
                as her second consort, though the true nature of their relationship remains shrouded in mystery.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Shattering</h2>
              <p className="text-amber-200/80 leading-relaxed">
                Following the Night of the Black Knives and the death of Godwyn the Golden, Marika shattered 
                the Elden Ring in her grief. This act, which defied the Greater Will, led to her imprisonment 
                within the Erdtree alongside Radagon, who had attempted to repair the Ring.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 