import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

/* ── Components for Effects ── */

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-20 animate-grid-scroll"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />
      
      {/* Scanline */}
      <div className="absolute inset-0 w-full h-1 bg-primary/10 animate-scanline shadow-[0_0_15px_var(--color-primary)] z-50 opacity-30" />
      
      {/* CRT Overlay */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,0,21,0.8)_100%)]" />
    </div>
  )
}

function Particles() {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: string; duration: string; color: string; size: string }[]>([])

  useEffect(() => {
    const colors = ['#f72585', '#7209b7', '#e0aaff', '#3a0068']
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 20}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: `${Math.random() * 4 + 1}px`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10px] rounded-full animate-float opacity-40"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}

function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative inline-block">
      <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter drop-shadow-[0_0_15px_var(--color-primary)]">
        {text}
      </h1>
      <h1 className="absolute inset-0 text-6xl md:text-8xl font-black text-primary italic tracking-tighter animate-glitch opacity-70 -z-10 translate-x-1 translate-y-1">
        {text}
      </h1>
      <h1 className="absolute inset-0 text-6xl md:text-8xl font-black text-accent italic tracking-tighter animate-glitch opacity-70 -z-10 -translate-x-1 -translate-y-1" style={{ animationDirection: 'reverse' }}>
        {text}
      </h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <BackgroundEffects />
      <Particles />

      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center text-center max-w-4xl w-full space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1 space-x-2 border border-primary/50 bg-primary/10 rounded-full animate-neon-pulse">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
          <span className="text-xs md:text-sm font-heading font-bold text-primary tracking-widest uppercase">
            SYNTHWAVE — ONLINE
          </span>
        </div>

        {/* Hero Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 group-hover:bg-primary/40 transition-colors duration-500" />
          <div className="relative flex items-center justify-center space-x-[-20px] md:space-x-[-40px]">
            <img src={heroImg} className="w-40 md:w-64 drop-shadow-[0_0_30px_rgba(247,37,133,0.5)] animate-float" alt="Hero" />
            <div className="flex flex-col space-y-4">
              <img src={reactLogo} className="w-12 md:w-20 animate-spin [animation-duration:10s] drop-shadow-[0_0_15px_#61daf1]" alt="React" />
              <img src={viteLogo} className="w-12 md:w-20 animate-bounce [animation-duration:3s] drop-shadow-[0_0_15px_#ffcf11]" alt="Vite" />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <GlitchText text="DRIVE" />
          <p className="text-xl md:text-2xl text-text font-body tracking-[0.3em] uppercase opacity-80 neon-text-accent">
            Outrun the future.
          </p>
        </div>

        {/* Counter Button */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setCount(c => c + 1)}
            className="group relative px-12 py-4 bg-transparent border-2 border-primary overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-right from-transparent via-white to-transparent opacity-50" />
            <span className="relative z-10 text-xl font-heading font-black text-primary tracking-widest group-hover:text-white transition-colors">
              IGNITE_ <span className="inline-block min-w-[2ch]">{count}</span>
            </span>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary rotate-45 group-hover:scale-150 transition-transform" />
          </button>
          <p className="text-xs text-muted font-mono tracking-tighter">
            // SYSTEM STATUS: OPTIMIZED // HMR: ACTIVE
          </p>
        </div>

        {/* Links / Social */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-12">
          {[
            { label: 'DOCS', icon: 'documentation-icon', url: 'https://vite.dev/' },
            { label: 'GITHUB', icon: 'github-icon', url: 'https://github.com/Ex2-Axon/x-template' },
            { label: 'DISCORD', icon: 'discord-icon', url: 'https://discord.gg/8Zeq8VCU' },
            { label: 'X.COM', icon: 'x-icon', url: 'https://x.com/Microtronic2' }
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-4 border border-white/5 bg-white/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 mb-2 text-text group-hover:text-primary transition-colors">
                <use href={`/icons.svg#${link.icon}`} />
              </svg>
              <span className="text-[10px] font-heading tracking-[0.2em]">{link.label}</span>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 mt-20 pb-8 text-[10px] font-mono text-muted tracking-widest">
        &copy; 2026 AXON PROTOCOL // ALL RIGHTS RESERVED
      </footer>
    </div>
  )
}

export default App
