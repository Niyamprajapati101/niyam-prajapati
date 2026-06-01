import { motion } from "framer-motion";
import flowerImg from "../../assets/glass flower.png";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma, 
  SiGit, SiGithub, SiVercel, SiDocker, SiLinux 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
  { name: "ExpressJS", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

export default function SkillsSection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
      
      {/* Abstract Background Graphic */}
      <div className="absolute top-[-40px] sm:top-[-50px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] opacity-70 pointer-events-none flex justify-center items-center [mask-image:linear-gradient(to_bottom,black_20%,transparent_60%)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_60%)] -z-10">
        <motion.img 
          src={flowerImg} 
          alt="Abstract 3D Background" 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
          MY SKILLSET
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text)] mb-16">
          The Magic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#54e6d4] italic">Behind</span>
        </h2>

        {/* Skills Flex Container */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg"
              >
                <Icon size={16} style={{ color: skill.color }} />
                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
