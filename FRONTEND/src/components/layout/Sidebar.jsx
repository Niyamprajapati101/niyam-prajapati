import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import npLogoWhite from "../../assets/np-white theme logo.png";
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

export default function Sidebar({ name, title }) {
  return (
    <>
      <aside className="vision-glass-nav fixed left-6 top-6 z-50 hidden h-[calc(100vh-3rem)] w-[92px] px-4 py-6 lg:flex lg:flex-col lg:items-center">
        <a
          href="#"
          className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-1 transition-transform duration-200 hover:scale-105"
        >
          <img
            src={npLogoWhite}
            alt={`${name} logo`}
            className="h-full w-full object-contain"
          />
        </a>
        <nav className="mt-12 flex flex-1 flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)] dark:text-[#54E6D4]/70 transition-all duration-200 hover:text-[var(--text)] dark:hover:text-[#54E6D4] dark:hover:drop-shadow-[0_0_8px_rgba(84,230,212,0.6)] [writing-mode:vertical-rl] rotate-180"
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
              className="text-[var(--muted)] dark:text-[#54E6D4]/70 transition-all hover:text-[var(--text)] dark:hover:text-[#54E6D4] dark:hover:drop-shadow-[0_0_8px_rgba(84,230,212,0.6)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </aside>

      <motion.header
        className="vision-glass-nav fixed inset-x-4 top-4 z-50 px-5 py-3 lg:hidden"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full transition-transform duration-200 active:scale-95"
          >
            <img
              src={npLogoWhite}
              alt={`${name} logo`}
              className="h-full w-full object-contain"
            />
          </a>
          <nav className="flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] font-medium text-[var(--muted)] dark:text-[#54E6D4]/70 transition-all duration-200 active:text-[var(--text)] dark:active:text-[#54E6D4]"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </motion.header>
    </>
  );
}
