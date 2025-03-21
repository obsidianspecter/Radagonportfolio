"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, Shield, Sword, Brain, Heart, Zap, Star } from "lucide-react"

export default function StatsPage() {
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
            className="max-w-4xl mx-auto space-y-12"
          >
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">COMBAT STATISTICS</h1>
            
            {/* Base Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm"
              >
                <h2 className="text-2xl text-amber-500 mb-6 tracking-wider flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Base Statistics
                </h2>
                <div className="space-y-4">
                  <StatBar label="Vigor" value={80} />
                  <StatBar label="Mind" value={95} />
                  <StatBar label="Endurance" value={90} />
                  <StatBar label="Strength" value={85} />
                  <StatBar label="Dexterity" value={75} />
                  <StatBar label="Intelligence" value={99} />
                  <StatBar label="Faith" value={99} />
                  <StatBar label="Arcane" value={70} />
                </div>
              </motion.div>

              {/* Combat Abilities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm"
              >
                <h2 className="text-2xl text-amber-500 mb-6 tracking-wider flex items-center gap-2">
                  <Sword className="w-6 h-6" />
                  Combat Abilities
                </h2>
                <div className="space-y-4">
                  <StatBar label="Holy Damage" value={95} />
                  <StatBar label="Physical Damage" value={85} />
                  <StatBar label="Magic Defense" value={90} />
                  <StatBar label="Physical Defense" value={88} />
                  <StatBar label="Holy Defense" value={99} />
                  <StatBar label="Poise" value={92} />
                  <StatBar label="Focus" value={95} />
                  <StatBar label="Vitality" value={88} />
                </div>
              </motion.div>
            </div>

            {/* Special Abilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl text-amber-500 mb-6 tracking-wider flex items-center gap-2">
                <Star className="w-6 h-6" />
                Special Abilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <SpecialAbility
                    name="Elden Stars"
                    description="A powerful holy incantation that rains down golden stars upon foes."
                    power={95}
                  />
                  <SpecialAbility
                    name="Golden Hammer"
                    description="Radagon's signature weapon, capable of devastating holy damage and ground-shattering attacks."
                    power={90}
                  />
                  <SpecialAbility
                    name="Triple Ring Light"
                    description="Creates three rings of light that pursue and damage enemies."
                    power={85}
                  />
                </div>
                <div className="space-y-4">
                  <SpecialAbility
                    name="Holy Ground"
                    description="Sanctifies the ground, dealing continuous holy damage to enemies."
                    power={88}
                  />
                  <SpecialAbility
                    name="Order's Blade"
                    description="Enhances weapons with holy power, increasing their damage output."
                    power={92}
                  />
                  <SpecialAbility
                    name="Golden Law"
                    description="Unleashes multiple holy projectiles that track and pierce enemies."
                    power={87}
                  />
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-amber-500 mb-4 tracking-wider flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Combat Style
                </h2>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• Aggressive holy damage dealer</li>
                  <li>• Masterful incantation caster</li>
                  <li>• Exceptional close-combat fighter</li>
                  <li>• Highly mobile despite heavy armor</li>
                  <li>• Tactical area control specialist</li>
                </ul>
              </div>

              <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-amber-500 mb-4 tracking-wider flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Resistances
                </h2>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• Immune to Holy damage</li>
                  <li>• High resistance to Magic</li>
                  <li>• Strong against Physical damage</li>
                  <li>• Moderate Fire resistance</li>
                  <li>• Weakness to Lightning damage</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-amber-200/80">{label}</span>
        <span className="text-amber-500">{value}</span>
      </div>
      <div className="h-2 bg-amber-900/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"
        />
      </div>
    </div>
  )
}

function SpecialAbility({ name, description, power }: { name: string; description: string; power: number }) {
  return (
    <div className="border border-amber-900/30 p-4 rounded-lg hover:border-amber-900/50 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-amber-500 font-medium">{name}</h3>
        <div className="flex items-center gap-1">
          <Zap className="w-4 h-4 text-amber-500" />
          <span className="text-amber-200/80 text-sm">{power}</span>
        </div>
      </div>
      <p className="text-amber-200/80 text-sm">{description}</p>
    </div>
  )
} 