import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import npLogo from "../../assets/np-logo.png";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Details", href: "#details" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Niyamprajapati101", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/niyam-prajapati-6a4506288/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/np4_uu/",
    label: "Instagram",
  },
];

export default function Sidebar({ name, title, onAdminClick }) {
  return (
    <>
      <aside className="glass-panel fixed left-6 top-6 z-50 hidden h-[calc(100vh-3rem)] w-[92px] rounded-[28px] px-4 py-6 lg:flex lg:flex-col lg:items-center">
        <button
          onClick={onAdminClick}
          className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-1 transition-transform duration-200 hover:scale-105 hover:border-[var(--accent)] cursor-pointer"
        >
          <img
            src={npLogo}
            alt={`${name} logo`}
            className="h-full w-full object-contain"
          />
        </button>
        <nav className="mt-12 flex flex-1 flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)] [writing-mode:vertical-rl] rotate-180"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-4">
          <ThemeToggle />
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </aside>

      <motion.div
        className="glass-panel fixed inset-x-4 top-4 z-50 rounded-full px-4 py-3 lg:hidden"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onAdminClick}
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-0.5">
              <img
                src={npLogo}
                alt={`${name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em]">
                {name}
              </p>
              <p className="text-xs text-[var(--muted)]">{title}</p>
            </div>
          </button>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
