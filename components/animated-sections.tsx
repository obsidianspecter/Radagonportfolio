"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Menu as MenuIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "./menu"

export function AnimatedHeader() {
  const [imageError, setImageError] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="relative z-10 flex justify-between items-center p-6 border-b border-amber-900/50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/40 bg-amber-500/10">
            {!imageError ? (
              <Image
                src="/radagon.webp"
                alt="Radagon"
                width={48}
                height={48}
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-amber-500 text-xl">R</span>
            )}
          </div>
          <h1 className="text-2xl tracking-widest text-amber-500">RADAGON</h1>
        </motion.div>
        <div className="flex items-center gap-4">
          <Link
            href="/stats"
            className="text-amber-500 hover:text-amber-400 transition-colors tracking-wide"
          >
            STATS
          </Link>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2 border border-amber-900/50 rounded-md hover:bg-amber-900/20 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="text-amber-500" />
          </motion.button>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export function AnimatedMainContent() {
  return (
    <main className="relative z-10 container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
        {/* Left column - asymmetrical design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-8 transform -rotate-1"
        >
          <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
            <h2 className="text-3xl text-amber-500 mb-4 tracking-wider">The Red-Haired Champion</h2>
            <p className="text-amber-200/80 leading-relaxed mb-6">
              Radagon of the Golden Order, a mysterious figure whose true nature remains hidden behind veils of legend
              and myth. Once wed to Queen Rennala of Caria, later to become the second husband of Queen Marika the
              Eternal. His red hair, a symbol of his unique nature, sets him apart from other champions of the Golden Order.
            </p>
            <div className="flex justify-end">
              <Link
                href="/lore"
                className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group"
              >
                <span>Discover the Truth</span>
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
            <h3 className="text-xl text-amber-500 mb-4 tracking-wider">The Golden Order Fundamentalist</h3>
            <p className="text-amber-200/80 leading-relaxed mb-4">
              As a fundamentalist of the Golden Order, Radagon developed unique incantations that combined both intelligence and faith. His teachings emphasized the importance of understanding the fundamental principles of the Golden Order, rather than simply memorizing incantations.
            </p>
            <p className="text-amber-200/80 leading-relaxed">
              His fundamentalist approach to the Golden Order's teachings would later influence many scholars and practitioners, including his own children. The study of fundamentalism became a respected path within the Golden Order, though it required exceptional dedication and understanding.
            </p>
          </div>
        </motion.div>

        {/* Right column - unorthodox layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 transform rotate-1 lg:mt-12"
        >
          <div className="border-l-4 border-amber-500/50 pl-4 py-2">
            <h3 className="text-amber-500 tracking-wider mb-2">CONNECTIONS</h3>
            <ul className="space-y-4">
              <li className="group">
                <Link
                  href="/marika"
                  className="flex items-center justify-between hover:bg-amber-900/20 p-2 transition-colors"
                >
                  <span className="text-amber-200/80 group-hover:text-amber-100 transition-colors">Queen Marika</span>
                  <span className="text-xs text-amber-500/60 group-hover:text-amber-500 transition-colors">
                    CONSORT
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/rennala"
                  className="flex items-center justify-between hover:bg-amber-900/20 p-2 transition-colors"
                >
                  <span className="text-amber-200/80 group-hover:text-amber-100 transition-colors">Rennala</span>
                  <span className="text-xs text-amber-500/60 group-hover:text-amber-500 transition-colors">
                    FORMER CONSORT
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/miquella"
                  className="flex items-center justify-between hover:bg-amber-900/20 p-2 transition-colors"
                >
                  <span className="text-amber-200/80 group-hover:text-amber-100 transition-colors">Miquella</span>
                  <span className="text-xs text-amber-500/60 group-hover:text-amber-500 transition-colors">
                    EMPYREAN
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/malenia"
                  className="flex items-center justify-between hover:bg-amber-900/20 p-2 transition-colors"
                >
                  <span className="text-amber-200/80 group-hover:text-amber-100 transition-colors">Malenia</span>
                  <span className="text-xs text-amber-500/60 group-hover:text-amber-500 transition-colors">
                    BLADE OF MIQUELLA
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
            <h3 className="text-amber-500 tracking-wider mb-4">THE GOLDEN ORDER</h3>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              Champion of the Golden Order, fundamentalist of the Erdtree faith. His incantations are uniquely
              powerful, drawing strength from his unwavering conviction and deep understanding of the fundamental principles.
            </p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            <div className="flex justify-center mt-4">
              <Link
                href="/golden-order"
                className="text-xs text-amber-500 tracking-widest hover:text-amber-400 transition-colors"
              >
                FUNDAMENTALISM
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export function AnimatedWeaponsSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-24 relative"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
      <div className="text-center pt-20">
        <h2 className="text-2xl text-amber-500 tracking-widest mb-6">WEAPONS & ABILITIES</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm transform hover:-rotate-1 transition-transform duration-500"
          >
            <h3 className="text-xl text-amber-500 mb-4 tracking-wider group-hover:text-glow transition-all duration-300">
              HAMMER OF RADAGON
            </h3>
            <p className="text-amber-200/80 leading-relaxed">
              The mighty hammer wielded by Radagon in service of the Golden Order. Its head is hewn from a boulder
              of consecrated gold, bestowing upon it the power to inflict grievous harm upon those who would defy
              the Erdtree. The hammer's design reflects Radagon's fundamentalist beliefs, with its form embodying
              the perfect balance of strength and grace.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm transform hover:rotate-1 transition-transform duration-500"
          >
            <h3 className="text-xl text-amber-500 mb-4 tracking-wider group-hover:text-glow transition-all duration-300">
              GOLDEN ORDER INCANTATIONS
            </h3>
            <p className="text-amber-200/80 leading-relaxed">
              Fundamentalist incantations of the Golden Order, developed by Radagon. These spells require
              exceptional intelligence and faith, reflecting the rigorous discipline of their creator. The incantations
              draw upon the fundamental principles of the Golden Order, making them uniquely powerful and versatile.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedTimelineSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-24 relative"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
      <div className="text-center pt-20">
        <h2 className="text-2xl text-amber-500 tracking-widest mb-12">TIMELINE OF EVENTS</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-amber-900/30"></div>

          {/* Timeline events */}
          <div className="grid grid-cols-1 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500/50 border border-amber-500"></div>
              <div className="ml-auto mr-8 lg:mr-0 lg:w-1/2 lg:pr-12 text-right">
                <h3 className="text-amber-500 tracking-wider mb-2">BEFORE THE ERDTREE</h3>
                <div className="border border-amber-900/50 bg-black/70 p-4 backdrop-blur-sm">
                  <p className="text-amber-200/80 text-sm">
                    The origins of Radagon remain shrouded in mystery, his existence before his rise to prominence
                    unknown to all but a select few. His red hair, a trait shared with his children, suggests a unique
                    heritage that may hold the key to understanding his true nature.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500/50 border border-amber-500"></div>
              <div className="mr-auto ml-8 lg:ml-0 lg:w-1/2 lg:ml-auto lg:pl-12 text-left">
                <h3 className="text-amber-500 tracking-wider mb-2">CHAMPION OF THE GOLDEN ORDER</h3>
                <div className="border border-amber-900/50 bg-black/70 p-4 backdrop-blur-sm">
                  <p className="text-amber-200/80 text-sm">
                    Radagon rises to prominence as a champion of the Golden Order, his devotion to the Erdtree and
                    mastery of fundamentalist incantations earning him renown throughout the lands. His unique approach
                    to the Golden Order's teachings begins to influence scholars and practitioners alike.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500/50 border border-amber-500"></div>
              <div className="ml-auto mr-8 lg:mr-0 lg:w-1/2 lg:pr-12 text-right">
                <h3 className="text-amber-500 tracking-wider mb-2">MARRIAGE TO RENNALA</h3>
                <div className="border border-amber-900/50 bg-black/70 p-4 backdrop-blur-sm">
                  <p className="text-amber-200/80 text-sm">
                    To seal an alliance between the Golden Order and the Carian Royal Family, Radagon weds Rennala,
                    Queen of Caria. Their union produces three offspring: Radahn, Rykard, and Ranni, each inheriting
                    their father's distinctive red hair and unique abilities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500/50 border border-amber-500"></div>
              <div className="mr-auto ml-8 lg:ml-0 lg:w-1/2 lg:ml-auto lg:pl-12 text-left">
                <h3 className="text-amber-500 tracking-wider mb-2">DEPARTURE AND SECOND MARRIAGE</h3>
                <div className="border border-amber-900/50 bg-black/70 p-4 backdrop-blur-sm">
                  <p className="text-amber-200/80 text-sm">
                    Abandoning Rennala, Radagon returns to Leyndell to wed Queen Marika the Eternal, becoming her
                    second husband after Godfrey. Their union produces two children: Miquella and Malenia, who would
                    later become known as the Twin Prodigies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500/50 border border-amber-500"></div>
              <div className="ml-auto mr-8 lg:mr-0 lg:w-1/2 lg:pr-12 text-right">
                <h3 className="text-amber-500 tracking-wider mb-2">THE SHATTERING</h3>
                <div className="border border-amber-900/50 bg-black/70 p-4 backdrop-blur-sm">
                  <p className="text-amber-200/80 text-sm">
                    Following the theft of the Rune of Death and the assassination of Godwyn the Golden, Queen
                    Marika shatters the Elden Ring. Radagon attempts to repair it, but fails, and both he and Marika
                    are imprisoned within the Erdtree, their fates forever intertwined.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedMysteriesSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="mt-24 relative"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
      <div className="text-center pt-20 pb-12">
        <h2 className="text-2xl text-amber-500 tracking-widest mb-6">UNSOLVED MYSTERIES</h2>

        <div className="max-w-3xl mx-auto border border-amber-900/50 bg-black/70 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-block w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
              <span className="text-amber-500 text-2xl">?</span>
            </div>
            <h3 className="text-xl text-amber-500 tracking-wider">THE TRUE NATURE OF RADAGON</h3>
          </div>

          <div className="space-y-6 text-amber-200/80 leading-relaxed">
            <p>
              "O Radagon, leal hound of the Golden Order. Thou'rt yet to become me, thou'rt yet to become a god. Let
              us both be shattered, mine other half."
            </p>

            <p>
              A statue in Leyndell reveals a secret about Radagon that shakes the very foundation of the Golden
              Order. What is the true relationship between Radagon and Marika? Are they one and the same, two halves
              of a greater whole? Or is there an even deeper mystery that remains unsolved?
            </p>

            <p>
              The red hair that marks Radagon and his children may hold the key to understanding his true nature.
              Some scholars believe it to be a sign of his unique connection to the Erdtree, while others suggest it
              indicates a different origin entirely.
            </p>

            <p>The answers lie hidden within the Lands Between, waiting for a worthy Tarnished to uncover them.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 