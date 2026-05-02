import { motion } from "framer-motion";

function getHeroTitle(title = "") {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 2) {
    return [title || "MERN Stack", "Developer"];
  }

  return [words.slice(0, -1).join(" "), words.at(-1)];
}

export default function HeroSection({ profile }) {
  const heroTitle = getHeroTitle(profile.title);

  return (
    <section className="section-anchor relative min-h-screen px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-[88rem] items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="hero-main-content relative z-10 w-full max-w-[64rem]"
        >
          <p className="hero-kicker mb-8 text-[0.95rem] font-bold uppercase text-[var(--muted)] sm:mb-10">
            {profile.name}
          </p>
          <div className="hero-title-stack flex flex-col">
            <motion.h1
              className="hero-title-line flex items-center gap-5 text-[var(--text)] sm:gap-6"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span>{heroTitle[0]}</span>
              <span className="hero-title-rule" />
            </motion.h1>
            <motion.h1
              className="hero-title-line text-[var(--text)]"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              <span className="hero-plus text-[var(--muted)]">+</span>
              <span>{heroTitle[1]}</span>
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
