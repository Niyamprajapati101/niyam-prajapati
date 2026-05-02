import { motion } from "framer-motion";
import SectionHeading from "../layout/SectionHeading";
import pfpImage from "../../assets/pfp.jpg";
import { getTechIcon } from "../../utils/techIcons";

export default function AboutSection({ profile }) {
  return (
    <section id="about" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who enjoys sharp systems, clear experiences, and thoughtful motion."
          description="This section is designed as a warmer pause in the story, with profile details, interests, and personal tone."
        />
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-panel overflow-hidden rounded-[32px]"
          >
            <img
              src={pfpImage}
              alt={profile.name}
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-panel rounded-[32px] p-8 sm:p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              {profile.title}
            </p>
            <div className="rich-text mt-6 space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              <p>{profile.about}</p>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-2xl font-bold">Interests</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {Object.entries(profile.skills).map(([label, values]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    {label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {values.map((tech) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div
                          key={tech}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                        >
                          {IconComponent && (
                            <IconComponent 
                              size={16} 
                              className="text-[var(--accent)]" 
                            />
                          )}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
