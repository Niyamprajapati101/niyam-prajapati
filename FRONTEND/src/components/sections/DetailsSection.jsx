import { motion } from "framer-motion";
import SectionHeading from "../layout/SectionHeading";

function TimelineCard({ item, title, subtitle, meta, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{meta}</p>
      <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-[var(--text)]">{subtitle}</p>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
    </motion.div>
  );
}

export default function DetailsSection({
  experiences,
  education,
  certifications,
}) {
  // Check if we have minimal content to adjust layout
  const hasMinimalContent = experiences.length <= 1 && education.length <= 1;
  
  return (
    <section id="details" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Details"
          title="Experience, education, and qualifications with a clean editorial rhythm."
          description="The admin dashboard updates these collections in MongoDB, and the portfolio consumes them dynamically."
        />
        
        {hasMinimalContent ? (
          // Single column layout for minimal content
          <div className="space-y-12">
            {experiences.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold">Experience</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {experiences.map((item) => (
                    <TimelineCard
                      key={item._id}
                      item={item}
                      meta={item.duration}
                      title={item.company}
                      subtitle={item.role}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {education.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold">Education</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {education.map((item) => (
                    <TimelineCard
                      key={item._id}
                      item={item}
                      meta={item.year}
                      title={item.degree}
                      subtitle={item.institution}
                      description={`Score: ${item.score}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {certifications.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold">Certifications</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {certifications.map((item) => (
                    <TimelineCard
                      key={item._id}
                      item={item}
                      meta={item.year}
                      title={item.course}
                      subtitle={item.platform}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          // Two column layout for more content
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold">Experience</h3>
              {experiences.map((item) => (
                <TimelineCard
                  key={item._id}
                  item={item}
                  meta={item.duration}
                  title={item.company}
                  subtitle={item.role}
                  description={item.description}
                />
              ))}
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold">Education</h3>
                {education.map((item) => (
                  <TimelineCard
                    key={item._id}
                    item={item}
                    meta={item.year}
                    title={item.degree}
                    subtitle={item.institution}
                    description={`Score: ${item.score}`}
                  />
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold">Certifications</h3>
                {certifications.map((item) => (
                  <TimelineCard
                    key={item._id}
                    item={item}
                    meta={item.year}
                    title={item.course}
                    subtitle={item.platform}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
