"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function RennalaPage() {
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
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">RENNALA, QUEEN OF THE FULL MOON</h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">The Carian Queen</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                Rennala, Queen of the Full Moon, head of both the Raya Lucarian Academy and the Carian Royal Family. 
                A powerful sorceress who mastered the art of glintstone sorcery and led the academy to greatness.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                Her marriage to Radagon united the might of sorcery with the doctrine of the Golden Order, though 
                this union would eventually be broken when Radagon departed to become Queen Marika's consort.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">Legacy</h2>
              <p className="text-amber-200/80 leading-relaxed">
                With Radagon, she bore three children: the mighty Starscourge Radahn, the notorious Praetor Rykard, 
                and the mysterious Lunar Princess Ranni. After Radagon's departure, Rennala became known to be deeply 
                troubled, clutching to the amber egg gifted to her by Radagon, and remaining in the grand library of 
                the academy.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 