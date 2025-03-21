"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MiquellaPage() {
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
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">MIQUELLA THE UNALLOYED</h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Prodigy</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                Miquella, child of Radagon and Queen Marika, was born an Empyrean with the potential to succeed his 
                mother as a god. However, he was afflicted with eternal childhood, forever trapped in a young body 
                despite his growing wisdom and power.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                Known as the most powerful of the Empyreans, Miquella possessed an unmatched talent for magic and 
                bewitchment, earning him both admiration and fear throughout the Lands Between.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Haligtree</h2>
              <p className="text-amber-200/80 leading-relaxed">
                In his quest to cure both his own affliction and his twin sister Malenia's rot, Miquella created 
                the Haligtree, a golden tree meant to rival the Erdtree itself. Though his slumber within the tree 
                was interrupted, his influence continues to be felt throughout the Lands Between through his 
                unalloyed gold needles and the devotion of his followers.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 