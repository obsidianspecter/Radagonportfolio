"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function LorePage() {
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
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">THE TRUTH OF RADAGON</h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">A Hidden Truth</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                Deep within Leyndell, Royal Capital, a statue holds a secret that shakes the very foundation of the 
                Golden Order: Radagon is Marika. This revelation, discovered through an ancient incantation, suggests 
                that Radagon and Queen Marika are two halves of the same being.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                This truth explains many mysteries: why Radagon was chosen as Marika's second consort, why their 
                children were born empyrean, and why both were imprisoned together in the Erdtree after the 
                Shattering.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Red Hair's Origin</h2>
              <p className="text-amber-200/80 leading-relaxed">
                Radagon's distinctive red hair, passed down to his children, may be a sign of his connection to the 
                giants - ancient enemies of the Golden Order. This heritage stands in stark contrast to his later 
                role as champion of the Order, perhaps explaining his zealous devotion as an attempt to prove his 
                loyalty despite his origins.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">Implications</h2>
              <p className="text-amber-200/80 leading-relaxed">
                The revelation of Radagon's true nature raises profound questions about the nature of divinity in 
                the Lands Between. Was this split a natural occurrence, or was it orchestrated by the Greater Will? 
                The answer may lie in understanding why Marika shattered the Elden Ring while Radagon attempted to 
                repair it - perhaps representing an internal conflict within a single being.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 