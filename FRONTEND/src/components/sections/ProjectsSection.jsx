import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "../layout/SectionHeading";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects designed to feel polished, fast, and memorable."
          description="Every card is backed by MongoDB data and animated to reveal itself as the page unfolds."
        />
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project._id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid gap-6 rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow)] md:p-8 lg:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-between gap-8 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                    {project.category}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    Live Preview <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>

              <div
                className={`group relative overflow-hidden rounded-[28px] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
