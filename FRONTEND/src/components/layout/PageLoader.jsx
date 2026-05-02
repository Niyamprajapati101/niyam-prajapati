import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        className="glass-panel flex w-full max-w-xl flex-col items-center rounded-[32px] px-8 py-16 text-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="h-16 w-16 rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
        <p className="mt-8 font-display text-2xl font-semibold">Building the scene</p>
        <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
          Loading portfolio content, projects, experience, and admin-ready data.
        </p>
      </motion.div>
    </div>
  );
}
