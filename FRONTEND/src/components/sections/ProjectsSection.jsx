import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

/* Stagger container for left-side info items */
const infoContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Laptop visual entrance */
const laptopVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 },
  },
};

/* Subtle continuous float for the laptop */
const floatTransition = {
  y: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function ProjectsSection({ projects }) {
  const ensureAbsoluteUrl = (url) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `https://${url}`;
  };

  const formatIndex = (i) => String(i + 1).padStart(2, "0");

  return (
    <section id="projects" className="section-anchor projects-showcase">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <motion.div
          className="projects-header-line"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <p className="projects-eyebrow">Selected Work</p>
        <h2 className="projects-main-title font-display">Projects</h2>
      </motion.div>

      {/* Project cards */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="project-card"
          >
            {/* Left content — staggered reveal */}
            <motion.div
              className="project-info"
              variants={infoContainerVariants}
            >
              {/* Number + line */}
              <motion.div className="project-number-row" variants={infoItemVariants}>
                <motion.span
                  className="project-number-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                />
                <span className="project-number">{formatIndex(index)}</span>
              </motion.div>

              <motion.h3
                className="project-title font-display"
                variants={infoItemVariants}
              >
                {project.title}
              </motion.h3>

              <motion.p className="project-description" variants={infoItemVariants}>
                {project.description}
              </motion.p>

              {/* Tech tags */}
              <motion.div className="project-tech-tags" variants={infoItemVariants}>
                {project.techStack.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    className="project-tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + ti * 0.06 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div className="project-actions" variants={infoItemVariants}>
                {project.liveLink && (
                  <motion.a
                    href={ensureAbsoluteUrl(project.liveLink)}
                    target="_blank"
                    rel="noreferrer"
                    className="wm-btn wm-btn-slide"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View project <ArrowRight size={16} />
                  </motion.a>
                )}
                {project.githubLink && (
                  <motion.a
                    href={ensureAbsoluteUrl(project.githubLink)}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-btn"
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>

            {/* Right — Silver MacBook mockup with float animation */}
            <motion.div
              className="project-visual"
              variants={laptopVariants}
            >
              <motion.div
                className="macbook-mockup"
                animate={{ y: [0, -8, 0] }}
                transition={floatTransition}
                whileHover={{ scale: 1.03 }}
              >
                {/* Thin black bezel + screen */}
                <div className="macbook-bezel">
                  {/* Camera dot */}
                  <div className="macbook-camera" />
                  {/* Screen area */}
                  <div className="macbook-screen">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="macbook-screen-img"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                {/* Aluminum body / base */}
                <div className="macbook-body">
                  <div className="macbook-hinge" />
                </div>
                {/* Bottom lip */}
                <div className="macbook-lip" />
                {/* Shadow */}
                <div className="macbook-shadow" />
              </motion.div>
            </motion.div>

            {/* Decorative watermark */}
            <motion.div
              className="project-watermark"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.03 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              NP
            </motion.div>
          </motion.article>
        ))}
      </div>

      {/* Decorative sparkle icon */}
      <motion.div
        className="projects-sparkle"
        aria-hidden="true"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L13.09 8.26L18 4L14.74 9.91L21 11L14.74 12.09L18 18L13.09 13.74L12 20L10.91 13.74L6 18L9.26 12.09L3 11L9.26 9.91L6 4L10.91 8.26L12 2Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
