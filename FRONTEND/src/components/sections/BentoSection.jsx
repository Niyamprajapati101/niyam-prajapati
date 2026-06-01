import { motion } from "framer-motion";
import { SiSpotify, SiGithub } from "react-icons/si";

export default function BentoSection() {
  return (
    <section className="relative py-24 px-6 lg:px-12 flex flex-col items-center justify-center text-center z-20">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto flex flex-col items-center mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--border)] dark:to-white/30"></div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            MY SITE
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--border)] dark:to-white/30"></div>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text)]">
          Discover what keeps <br className="hidden sm:block" /> me{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#54e6d4] italic">
            building daily
          </span>
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: GitHub & Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-black/40 backdrop-blur-xl border border-[var(--border)] dark:border-white/10 hover:shadow-lg dark:hover:shadow-none hover:border-[var(--accent)] dark:hover:border-white/20 transition-all h-[320px] text-left group overflow-hidden relative"
        >
          {/* Top visual icons */}
          <div className="flex gap-4 items-center justify-center h-[140px]">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border)] dark:border-white/10 flex items-center justify-center shadow-sm dark:shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <SiGithub size={32} className="text-[var(--text)] dark:text-white" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border)] dark:border-white/10 flex items-center justify-center shadow-sm dark:shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-75">
              <span className="text-orange-500 font-display font-bold text-3xl">R</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border)] dark:border-white/10 flex items-center justify-center shadow-sm dark:shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-150">
              <span className="text-yellow-500 dark:text-yellow-400 font-display font-bold text-3xl italic">M</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <p className="text-sm font-semibold text-[var(--muted)] dark:text-gray-300 mb-2">GitHub & Open Source</p>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Constantly contributing and building</h3>
          </div>
        </motion.div>

        {/* Card 2: AI Assistant Chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-black/40 backdrop-blur-xl border border-[var(--border)] dark:border-white/10 hover:shadow-lg dark:hover:shadow-none hover:border-[var(--accent)] dark:hover:border-white/20 transition-all h-[320px] text-left group overflow-hidden relative"
        >
          {/* Subtle grid background for the chat area */}
          <div className="absolute inset-0 top-0 h-[200px] opacity-[0.03] dark:opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)', backgroundSize: '16px 16px' }}>
          </div>

          {/* Chat Mockup */}
          <div className="relative z-10 flex flex-col gap-4 mt-2">
            <div className="self-end bg-white dark:bg-white/10 border border-[var(--border)] dark:border-white/10 text-xs px-4 py-2 rounded-2xl rounded-tr-sm text-[var(--muted)] dark:text-gray-300 max-w-[80%] shadow-sm dark:shadow-lg">
              "Can you build a scalable MERN stack app?"
            </div>
            <div className="self-start flex gap-3 max-w-[90%]">
              <div className="w-6 h-6 rounded-full bg-orange-500/10 dark:bg-orange-600/20 border border-orange-500/30 dark:border-orange-500/50 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-orange-500">N</span>
              </div>
              <div className="bg-orange-500/10 dark:bg-orange-950/40 border border-orange-500/20 dark:border-orange-500/30 text-xs px-4 py-3 rounded-2xl rounded-tl-sm text-[var(--text)] dark:text-gray-200 shadow-sm dark:shadow-lg">
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
                Absolutely! I can design and build a complete solution for you.
              </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-10">
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">NP ASSISTANT</p>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Need a custom web app? Let's build it together.</h3>
          </div>
        </motion.div>

        {/* Card 3: Recent Favorite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col p-8 rounded-3xl bg-white dark:bg-black/40 backdrop-blur-xl border border-[var(--border)] dark:border-white/10 hover:shadow-lg dark:hover:shadow-none hover:border-[var(--accent)] dark:hover:border-white/20 transition-all h-[320px] text-left group overflow-hidden relative"
        >
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <SiSpotify className="text-[#1DB954]" size={20} />
            <p className="text-sm font-bold text-[var(--text)] dark:text-white">Recent Favorite</p>
          </div>
          
          <p className="text-sm leading-relaxed text-[var(--muted)] dark:text-gray-300 relative z-10">
            I'm listening to <span className="text-[var(--text)] dark:text-white font-semibold">Another Story</span> by Nicholas Hooper from the album Harry Potter And The Order Of The Phoenix
          </p>

          {/* Vinyl Visual at the bottom right */}
          <div className="absolute -bottom-4 -right-4 w-48 h-48 sm:w-56 sm:h-56">
            {/* Vinyl Record */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-[#111] border border-gray-800 shadow-xl dark:shadow-2xl flex items-center justify-center overflow-hidden"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ left: '20%' }}
            >
              {/* Grooves */}
              <div className="absolute inset-2 rounded-full border border-gray-700/50"></div>
              <div className="absolute inset-6 rounded-full border border-gray-700/50"></div>
              <div className="absolute inset-10 rounded-full border border-gray-700/50"></div>
              <div className="absolute inset-14 rounded-full border border-gray-700/50"></div>
              {/* Center label */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-4 border-[#111] flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              {/* Light reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0"></div>
            </motion.div>
            
            {/* Album Cover sleeve (covers left half of the vinyl) */}
            <div className="absolute top-0 left-0 bottom-0 w-[60%] bg-white dark:bg-zinc-900 border border-[var(--border)] dark:border-white/10 shadow-[-10px_0_20px_rgba(0,0,0,0.1)] dark:shadow-[-10px_0_30px_rgba(0,0,0,0.5)] rounded-l-md overflow-hidden z-10 group-hover:-translate-x-4 transition-transform duration-500">
              {/* Abstract album art placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--accent)] dark:from-[#0F2027] via-[#203A43] to-slate-800 dark:to-[#2C5364] relative">
                <div className="absolute inset-0 opacity-20 dark:opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="absolute bottom-4 left-4 text-xs font-bold text-white/90 dark:text-white/70">OOTP</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
