import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
