"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 bg-black border-l border-amber-900/50 z-50"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <X />
              </button>
              <nav className="mt-12 space-y-6">
                <Link
                  href="/"
                  className="block text-amber-500 hover:text-amber-400 transition-colors"
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href="/stats"
                  className="block text-amber-500 hover:text-amber-400 transition-colors"
                  onClick={onClose}
                >
                  Stats
                </Link>
                <Link
                  href="/family-tree"
                  className="block text-amber-500 hover:text-amber-400 transition-colors"
                  onClick={onClose}
                >
                  Family Tree
                </Link>
                <Link
                  href="/lore"
                  className="block text-amber-500 hover:text-amber-400 transition-colors"
                  onClick={onClose}
                >
                  Lore
                </Link>
                <Link
                  href="/golden-order"
                  className="block text-amber-500 hover:text-amber-400 transition-colors"
                  onClick={onClose}
                >
                  Golden Order
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 