"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, Moon, Sun } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface Character {
  id: string
  name: string
  title?: string
  description: string
  children?: string[]
  parents?: string[]
  spouse?: string[]
  status: string
  type: "demigod" | "god" | "human" | "empyrean"
}

const characters: { [key: string]: Character } = {
  marika: {
    id: "marika",
    name: "Queen Marika",
    title: "The Eternal",
    description: "Vessel of the Elden Ring and founder of the Golden Order",
    children: ["godwyn", "morgott", "mohg", "malenia", "miquella"],
    spouse: ["godfrey", "radagon"],
    status: "Imprisoned",
    type: "god"
  },
  radagon: {
    id: "radagon",
    name: "Radagon",
    title: "of the Golden Order",
    description: "Champion of the Golden Order and second husband of Queen Marika",
    children: ["malenia", "miquella", "ranni", "radahn", "rykard"],
    spouse: ["marika", "rennala"],
    status: "Imprisoned",
    type: "god"
  },
  rennala: {
    id: "rennala",
    name: "Rennala",
    title: "Queen of the Full Moon",
    description: "Head of the Carian Royal Family and the Academy of Raya Lucaria",
    children: ["ranni", "radahn", "rykard"],
    spouse: ["radagon"],
    status: "Alive",
    type: "human"
  },
  godfrey: {
    id: "godfrey",
    name: "Godfrey",
    title: "First Elden Lord",
    description: "First consort to Queen Marika and legendary warrior",
    children: ["godwyn", "morgott", "mohg"],
    spouse: ["marika"],
    status: "Alive (Tarnished)",
    type: "human"
  },
  godwyn: {
    id: "godwyn",
    name: "Godwyn",
    title: "The Golden",
    description: "First of the demigods to die",
    parents: ["marika", "godfrey"],
    status: "Deceased",
    type: "demigod"
  },
  morgott: {
    id: "morgott",
    name: "Morgott",
    title: "The Omen King",
    description: "King of Leyndell and guardian of the Erdtree",
    parents: ["marika", "godfrey"],
    status: "Deceased",
    type: "demigod"
  },
  mohg: {
    id: "mohg",
    name: "Mohg",
    title: "Lord of Blood",
    description: "Lord of the Palace of Blood and keeper of the Formless Mother",
    parents: ["marika", "godfrey"],
    status: "Alive",
    type: "demigod"
  },
  malenia: {
    id: "malenia",
    name: "Malenia",
    title: "Blade of Miquella",
    description: "The most powerful warrior among the demigods",
    parents: ["marika", "radagon"],
    status: "Alive",
    type: "empyrean"
  },
  miquella: {
    id: "miquella",
    name: "Miquella",
    title: "The Unalloyed",
    description: "Most powerful of the Empyreans, creator of the Haligtree",
    parents: ["marika", "radagon"],
    status: "Unknown",
    type: "empyrean"
  },
  ranni: {
    id: "ranni",
    name: "Ranni",
    title: "The Witch",
    description: "Lunar Princess and instigator of the Night of the Black Knives",
    parents: ["radagon", "rennala"],
    status: "Alive",
    type: "empyrean"
  },
  radahn: {
    id: "radahn",
    name: "Radahn",
    title: "Starscourge",
    description: "Mighty warrior who holds back the stars",
    parents: ["radagon", "rennala"],
    status: "Alive",
    type: "demigod"
  },
  rykard: {
    id: "rykard",
    name: "Rykard",
    title: "Lord of Blasphemy",
    description: "Lord of Volcano Manor who fed himself to the great serpent",
    parents: ["radagon", "rennala"],
    status: "Alive",
    type: "demigod"
  }
}

interface NodePosition {
  id: string
  x: number
  y: number
  width: number
  height: number
}

export default function FamilyTreePage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)
  const [nodePositions, setNodePositions] = useState<NodePosition[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()

  const getTypeColor = (type: Character["type"]) => {
    switch (type) {
      case "god":
        return "bg-amber-500"
      case "empyrean":
        return "bg-blue-500"
      case "demigod":
        return "bg-red-500"
      case "human":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const renderConnectingLines = () => {
    if (!containerRef.current || nodePositions.length === 0) return null

    const lines: JSX.Element[] = []
    
    Object.values(characters).forEach(character => {
      if (character.children) {
        const parentPos = nodePositions.find(p => p.id === character.id)
        if (!parentPos) return

        character.children.forEach(childId => {
          const childPos = nodePositions.find(p => p.id === childId)
          if (!childPos) return

          const startX = parentPos.x + parentPos.width / 2
          const startY = parentPos.y + parentPos.height
          const endX = childPos.x + childPos.width / 2
          const endY = childPos.y

          lines.push(
            <motion.path
              key={`${character.id}-${childId}`}
              d={`M ${startX} ${startY} C ${startX} ${startY + 50}, ${endX} ${endY - 50}, ${endX} ${endY}`}
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          )
        })
      }
    })

    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {lines}
      </svg>
    )
  }

  const renderCharacterNode = (characterId: string, level: number = 0) => {
    const character = characters[characterId]
    if (!character) return null

    return (
      <motion.div
        key={character.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: level * 0.1 }}
        className={`relative p-4 border border-amber-900/50 bg-black/70 backdrop-blur-sm rounded-lg 
          ${selectedCharacter === character.id ? "ring-2 ring-amber-500" : ""}
          hover:border-amber-500/50 transition-all cursor-pointer z-10`}
        onClick={() => setSelectedCharacter(character.id)}
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect()
            const containerRect = containerRef.current?.getBoundingClientRect()
            if (containerRect) {
              setNodePositions(prev => {
                const newPositions = prev.filter(p => p.id !== character.id)
                return [...newPositions, {
                  id: character.id,
                  x: rect.left - containerRect.left,
                  y: rect.top - containerRect.top,
                  width: rect.width,
                  height: rect.height
                }]
              })
            }
          }
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${getTypeColor(character.type)}`} />
          <h3 className="text-amber-500 font-medium">{character.name}</h3>
        </div>
        {character.title && (
          <p className="text-amber-200/60 text-sm mb-1">{character.title}</p>
        )}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white dark:bg-black dark:text-white">
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10">
        <header className="p-6 border-b border-amber-900/50 dark:border-amber-900/50 flex justify-between items-center">
          <Link 
            href="/"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors w-fit"
          >
            <ChevronLeft />
            <span>Back to Radagon</span>
          </Link>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full bg-amber-900/30 hover:bg-amber-900/50 transition-colors group"
          >
            {/* Witch's circle background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            
            {/* Magical particles */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] animate-spin-slow"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] animate-spin-slow-reverse"></div>
            </div>

            {/* Witch's pentagram */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.path
                  d="M50 0 L61 35 L97 35 L68 57 L79 92 L50 70 L21 92 L32 57 L3 35 L39 35 Z"
                  fill="none"
                  stroke="rgba(245,158,11,0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 to-purple-500/10 blur-sm group-hover:blur-md transition-all duration-300"></div>

            {/* Icon container */}
            <div className="relative flex items-center justify-center w-8 h-8">
              {theme === "dark" ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Moon className="w-5 h-5 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="w-5 h-5 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                </motion.div>
              )}
            </div>

            {/* Magical sparkles */}
            <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-1 h-1 bg-amber-500 rounded-full animate-sparkle-1"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-purple-500 rounded-full animate-sparkle-2"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-pink-500 rounded-full animate-sparkle-3"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-amber-500 rounded-full animate-sparkle-4"></div>
            </div>

            {/* Magical energy waves */}
            <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping delay-300"></div>
              <div className="absolute inset-0 rounded-full border border-pink-500/20 animate-ping delay-700"></div>
            </div>

            {/* Witch's familiar (small floating spirit) */}
            <motion.div
              className="absolute -top-4 -right-4 w-2 h-2 bg-amber-500/50 rounded-full"
              animate={{
                y: [0, -4, 0],
                x: [0, 2, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">LINEAGE OF THE GOLDEN ORDER</h1>
            
            <div className="mb-8 grid grid-cols-4 gap-4">
              <div className="col-span-4 text-center space-x-4">
                <span className="inline-flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" /> Gods
                </span>
                <span className="inline-flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" /> Empyreans
                </span>
                <span className="inline-flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" /> Demigods
                </span>
                <span className="inline-flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" /> Humans
                </span>
              </div>
            </div>

            <div 
              ref={containerRef}
              className="relative min-h-[800px] flex flex-col items-center"
            >
              {renderConnectingLines()}
              
              {/* Root Level - Marika and Radagon */}
              <div className="flex gap-8 mb-16">
                {renderCharacterNode("marika", 0)}
                {renderCharacterNode("radagon", 0)}
              </div>

              {/* First Level - Consorts */}
              <div className="flex gap-8 mb-16">
                {renderCharacterNode("godfrey", 1)}
                {renderCharacterNode("rennala", 1)}
              </div>

              {/* Second Level - First Generation */}
              <div className="flex gap-8 mb-16">
                {renderCharacterNode("godwyn", 2)}
                {renderCharacterNode("morgott", 2)}
                {renderCharacterNode("mohg", 2)}
              </div>

              {/* Third Level - Second Generation */}
              <div className="flex gap-8">
                <div className="flex gap-8">
                  {renderCharacterNode("malenia", 3)}
                  {renderCharacterNode("miquella", 3)}
                </div>
                <div className="flex gap-8">
                  {renderCharacterNode("ranni", 3)}
                  {renderCharacterNode("radahn", 3)}
                  {renderCharacterNode("rykard", 3)}
                </div>
              </div>
            </div>

            {/* Character Details */}
            {selectedCharacter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm rounded-lg"
              >
                <h2 className="text-2xl text-amber-500 mb-4">{characters[selectedCharacter].name}</h2>
                <p className="text-amber-200/80 mb-4">{characters[selectedCharacter].description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {characters[selectedCharacter].parents && (
                    <div>
                      <h3 className="text-amber-500 mb-2">Parents</h3>
                      <ul className="text-amber-200/80">
                        {characters[selectedCharacter].parents.map(parentId => (
                          <li key={parentId}>{characters[parentId].name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {characters[selectedCharacter].children && (
                    <div>
                      <h3 className="text-amber-500 mb-2">Children</h3>
                      <ul className="text-amber-200/80">
                        {characters[selectedCharacter].children.map(childId => (
                          <li key={childId}>{characters[childId].name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {characters[selectedCharacter].spouse && (
                    <div>
                      <h3 className="text-amber-500 mb-2">Spouse</h3>
                      <ul className="text-amber-200/80">
                        {characters[selectedCharacter].spouse.map(spouseId => (
                          <li key={spouseId}>{characters[spouseId].name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-amber-500 mb-2">Status</h3>
                  <p className="text-amber-200/80">{characters[selectedCharacter].status}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
} 