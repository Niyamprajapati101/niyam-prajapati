import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import npLogoWhite from "../../assets/np-white theme logo.png";

export default function CallToActionSection({ profile }) {
  return (
    <section className="relative min-h-[85vh] py-32 px-6 lg:px-12 flex flex-col items-start justify-center text-left overflow-hidden z-20">
      
      {/* Rotating Badge - Top Right */}
      <div className="absolute top-16 right-4 sm:top-24 sm:right-16 md:top-32 md:right-32 z-20">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 sm:border-[3px] border-red-600 flex items-center justify-center relative text-[var(--text)] bg-[var(--bg-elevated)] dark:bg-black/40 backdrop-blur-md shadow-2xl"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 overflow-visible">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text className="text-[12px] font-bold tracking-[0.18em] uppercase" fill="currentColor">
              <textPath href="#circlePath" startOffset="0%" textLength="215">
                OPEN TO WORK • OPEN TO WORK • 
              </textPath>
            </text>
          </svg>
          {/* Inner Star/Sparkle icon */}
          <div className="relative z-10 text-2xl sm:text-3xl">✦</div>
        </motion.div>
      </div>

      {/* Top Logo */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[75px] flex items-center justify-start mb-6 ml-4 sm:ml-6 md:ml-8 lg:ml-10"
      >
        <img src={npLogoWhite} alt="NP Logo" className="h-full w-auto object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-start mt-6 ml-4 md:ml-16 lg:ml-24"
      >

        {/* Headings */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-[var(--text)] mb-2 uppercase">
          From idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#54e6d4]">execution</span>
        </h2>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[var(--text)] mb-14 uppercase">
          Let's build something real!
        </h2>

        {/* Button */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${profile?.email || "hello@example.com"}`}
          className="inline-flex items-center gap-4 px-2 py-2 pr-6 rounded-full bg-[var(--text)] text-[var(--bg)] font-medium text-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-colors"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg)] text-[var(--text)] shadow-sm">
            <ArrowRight size={20} className="transform -rotate-45" />
          </span>
          Get in touch
        </motion.a>

        {/* Bottom Text */}
        <div className="mt-24 sm:mt-32 flex flex-col items-start gap-4 max-w-2xl text-left">
          <p className="font-display font-bold text-xl sm:text-2xl text-[var(--text)]">
            Available for full-time roles and selective freelance projects.
          </p>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
            I focus on shipping clean, scalable web solutions that support real users and growing products.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
