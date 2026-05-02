import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import { sendMessage } from "../../api/portfolio";
import SectionHeading from "../layout/SectionHeading";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Niyamprajapati101" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niyam-prajapati-6a4506288/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/np4_uu/",
  },
];

export default function ContactSection({ profile }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      await sendMessage(form);
      setForm(initialForm);
      setStatus({
        loading: false,
        message: "Message sent successfully. It has been stored in MongoDB.",
      });
    } catch (error) {
      setStatus({
        loading: false,
        message:
          error.response?.data?.message ||
          "Unable to send your message right now.",
      });
    }
  }

  return (
    <section id="contact" className="section-anchor px-5 py-20 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="The easiest way to reach out is still a simple, thoughtful message."
          description="Messages are saved to MongoDB so the admin dashboard can review them later."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel rounded-[32px] p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Let&apos;s work together
            </p>
            <h3 className="mt-4 font-display text-4xl font-bold leading-tight">
              Building digital work that feels calm, premium, and useful.
            </h3>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              {profile.location}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
            >
              {profile.email} <ArrowUpRight size={16} />
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-[32px] p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  Name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                Message
              </span>
              <textarea
                required
                rows="6"
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className="w-full rounded-[18px] border border-[var(--border)] bg-transparent px-4 py-3 outline-none"
                placeholder="Tell me about your project, role, or idea."
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center justify-center rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
              {status.message ? (
                <p className="text-sm text-[var(--muted)]">{status.message}</p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
