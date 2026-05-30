import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import ScrollProgress from "../components/layout/ScrollProgress";
import PageLoader from "../components/layout/PageLoader";
import AnimatedBackdrop from "../components/layout/AnimatedBackdrop";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import DetailsSection from "../components/sections/DetailsSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import { usePortfolioData } from "../hooks/usePortfolioData";
import pfp from "../assets/pfp.jpg"

const fallbackProfile = {
  name: "NIYAM PRAJAPATI",
  title: "MERN Stack Developer",
  subtitle: "Developer + Designer",
  location: "India",
  email: "niyam@example.com",
  bio: "A passionate full-stack developer crafting modern web experiences with clean code and thoughtful design.",
  about:
    "I'm NIYAM PRAJAPATI, a dedicated MERN stack developer who loves building scalable web applications. I focus on creating user-friendly interfaces and robust backend systems.",
  profileImage: pfp,
  interests: ["Web Development", "UI/UX Design", "Problem Solving", "Learning New Tech"],
  highlightMetrics: [
    { label: "Years Learning", value: "02+" },
    { label: "Projects Built", value: "05+" },
    { label: "Technologies", value: "10+" },
    { label: "Passion Level", value: "100%" },
  ],
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "VS Code", "Postman", "Figma"],
  },
};

export default function HomePage() {
  const navigate = useNavigate();
  const { data, loading, error } = usePortfolioData();
  const profile = data?.profile || fallbackProfile;

  useEffect(() => {
    document.title = `${profile.name} | ${profile.subtitle}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", profile.bio);
    }
  }, [profile]);

  if (loading) {
    return <PageLoader />;
  }

  if (error && !data) {
    return (
      <div className="app-shell flex min-h-screen items-center justify-center px-6">
        <div className="glass-panel max-w-xl rounded-[32px] p-8 text-center">
          <p className="font-display text-3xl font-bold">Portfolio API unavailable</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <AnimatedBackdrop />
      <ScrollProgress />
      <Sidebar
        name={profile.name}
        title={profile.title}
      />
      <main className="relative z-10 lg:ml-[126px]">
        <HeroSection profile={profile} />
        <ProjectsSection projects={data?.projects || []} />
        <DetailsSection
          experiences={data?.experiences || []}
          education={data?.education || []}
          certifications={data?.certifications || []}
        />
        <AboutSection profile={profile} />
        <ContactSection profile={profile} />
      </main>
    </div>
  );
}
