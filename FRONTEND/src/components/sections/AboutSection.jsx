import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.jpg";

export default function AboutSection({ profile }) {
  // Split the about text into paragraphs for better readability
  const sentences = profile?.about?.split(". ").filter(Boolean) || [];
  const p1 = sentences.slice(0, 2).join(". ") + (sentences.length > 0 ? "." : "");
  const p2 = sentences.slice(2).join(". ") + (sentences.length > 2 ? "." : "");

  const images = [img1, img2, img3];
  
  // Track which index is currently active (center)
  const [activeIndex, setActiveIndex] = useState(1);

  // Auto-play the carousel to flip images automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Flips every 3.5 seconds
    
    return () => clearInterval(timer);
  }, [images.length]);

  // Helper to get the correct CSS class based on the current active index
  const getCardClass = (index) => {
    if (index === activeIndex) return "active";
    if (index === (activeIndex + 2) % 3) return "left"; // Equivalent to -1 wrap around
    if (index === (activeIndex + 1) % 3) return "right"; // Equivalent to +1 wrap around
    return "";
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section
      id="about"
      className="section-anchor relative py-24 px-6 lg:px-12 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 z-10"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              A QUICK GLANCE
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              Building the bridge between <br className="hidden sm:block" />{" "}
              ideas and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#54e6d4] italic">
                experiences
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-[var(--muted)] text-sm sm:text-[15px] leading-relaxed max-w-[500px] font-medium">
            {p1 && <p>{p1}</p>}
            {p2 && <p>{p2}</p>}
            <p className="text-[var(--text)] font-semibold">
              My code is built to last, helping your startup reach the next
              level!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 items-center pt-2">
            <a
              href={profile?.linkedin || "#"}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile?.githubLink || "#"}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile?.twitter || "#"}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Interactive 3D Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[450px] sm:h-[600px] flex items-center justify-center"
        >
          <div className="carousel-container">
            <div className="carousel">
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`carousel-card ${getCardClass(index)}`}
                  onClick={() => handleCardClick(index)}
                >
                  <img src={imgSrc} alt={`About visualization ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
