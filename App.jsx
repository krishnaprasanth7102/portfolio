"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#070707]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-[-0.04em] text-white">
          KRISHNA
        </a>
        <div className="hidden gap-8 text-xs uppercase tracking-[0.35em] text-white/60 sm:flex">
          <a href="#gallery" className="transition hover:text-white">Gallery</a>
          <a href="#resume" className="transition hover:text-white">Resume</a>
          <a href="#credentials" className="transition hover:text-white">Credentials</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <a
          href="mailto:hello@krishnaprasanth.dev"
          className="inline-flex items-center justify-center rounded-full bg-[#8B5CF6] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-xl shadow-[#8B5CF6]/20 transition hover:bg-[#7C3AED]"
        >
          Say hello
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-120px" });

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden bg-[#090713] pt-16 lg:pt-20 text-white">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={heroVariants}
        className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 pb-24 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-12"
      >
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
            Blender • Web • Design
          </div>
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-4">
              <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
                Krishna
              </h1>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#F5F5F5] sm:text-6xl lg:text-7xl">
                Prasanth
              </h2>
            </div>
            <p className="text-xl leading-9 text-white/70 sm:text-2xl">
              I create immersive Blender visuals, polished Next.js experiences, and thoughtful tools for design-led digital storytelling.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-[#8B5CF6]/25 transition duration-300 hover:bg-[#7C3AED] hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5"
            >
              View gallery
              <span className="opacity-0 group-hover:opacity-100 transition">→</span>
            </a>
            <a
              href="/pdfs/Krishna%20Prasanth_work_ex_letter%20(1).pdf"
              download="Krishna-Prasanth-Experience-Letter.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#8B5CF6]/50 bg-[#8B5CF6]/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#8B5CF6] backdrop-blur-sm transition duration-300 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20 hover:-translate-y-0.5"
            >
              Download resume
              <span className="opacity-0 group-hover:opacity-100 transition">↓</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative hidden h-[600px] w-full items-center justify-center lg:flex"
        >
          {/* Soft background glow */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#8B5CF6]/30 to-[#EC4899]/10 blur-[100px]" />

          {/* Card 1: Back left */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-4, -1, -4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[2%] top-[10%] aspect-[4/5] w-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10 transition duration-500 hover:bg-transparent" />
            <img src="/art/Screenshot%202026-05-18%20222026.png" alt="3D Render 1" className="h-full w-full object-cover opacity-70 transition duration-500 hover:opacity-100" />
          </motion.div>

          {/* Card 2: Back right */}
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [4, 1, 4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[2%] top-[15%] aspect-[3/4] w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10 transition duration-500 hover:bg-transparent" />
            <img src="/art/skyscaapper.png" alt="3D Render 2" className="h-full w-full object-cover opacity-70 transition duration-500 hover:opacity-100" />
          </motion.div>

          {/* Card 3: Main Front */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute z-20 aspect-[4/5] w-[340px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(139,92,246,0.15)]"
          >
            <img src="/art/billboard.png" alt="Featured 3D Render" className="h-full w-full object-cover transition duration-700 hover:scale-110 cursor-pointer" />
            
            {/* Glassmorphism label */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Featured Work</p>
                  <p className="text-[10px] text-white/60">Blender / Cycles</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative glass spheres */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[5%] left-[5%] z-30 h-16 w-16 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-transparent shadow-xl backdrop-blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[5%] top-[40%] z-30 h-12 w-12 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-xl backdrop-blur-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const features = [
    { label: "Studio-ready art", desc: "Clean 3D work with professional polish." },
    { label: "Next.js builds", desc: "Fast, responsive web presentation." },
    { label: "Community driven", desc: "Mentorship and tech club collaboration." },
    { label: "AI + games", desc: "Exploring creative tools and interactive ideas." },
  ];

  return (
    <section ref={ref} className="border-t border-white/10 bg-[#100c22] py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={reveal}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#8B5CF6]/30"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{feat.label}</p>
              <p className="mt-3 font-serif text-lg text-white">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });
  const documents = [
    {
      title: "Blender Designer Internship",
      subtitle: "Learn Foundation — May 1, 2024 to August 31, 2024",
      description:
        "Certificate of completed internship for Blender design, work delivered on time with strong professionalism and growth.",
      file: "Krishna Prasanth S  - Blender Designer .pdf",
    },
    {
      title: "Blender Designer Internship",
      subtitle: "Mulearn Foundation — November 1, 2023 to April 30, 2024",
      description:
        "Certificate recommending Krishna for his dedication, expertise, and professional adaptability.",
      file: "Krishna Prasanth S - Blender Designer (3).pdf",
    },
    {
      title: "Work Experience Letter",
      subtitle: "BeyondExams — Feb 1, 2023 to March 25, 2023",
      description:
        "Letter highlighting portfolio site work, mentorship, and project leadership as a Campus Ambassador.",
      file: "Krishna Prasanth_work_ex_letter (1).pdf",
    },
  ];

  return (
    <section ref={ref} id="credentials" className="bg-[#0c091b] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Credentials</p>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Verified Blender experience
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">
            Certified internship and experience documents linked directly for fast review and download.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {documents.map((doc, idx) => (
            <motion.article
              key={doc.file}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={reveal}
              transition={{ delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#100b1f] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/20"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] via-white/20 to-[#8B5CF6] transition-all duration-300 group-hover:h-1" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8B5CF6]">{idx + 1}</p>
                  <h3 className="mt-3 font-serif text-2xl text-white">{doc.title}</h3>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6] text-sm text-[#8B5CF6]">PDF</span>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/70">{doc.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-white/60">{doc.description}</p>
              <a
                href={`/pdfs/${encodeURIComponent(doc.file)}`}
                download
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-[#8B5CF6]/30 transition duration-300 hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5"
              >
                Download
                <span>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const bentoCard = "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 cursor-default transition-colors duration-300";

  const bentoContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const bentoItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  const cardHover = {
    y: -5,
    scale: 1.008,
    borderColor: "rgba(255, 255, 255, 0.12)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.25,
    },
  };

  return (
    <section ref={ref} id="resume" className="bg-[#090511] py-24">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={reveal}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">Resume</p>
          <h2 className="font-serif text-4xl tracking-[-0.03em] text-white">At a glance</h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={bentoContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >

          {/* About — spans 2 cols */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} md:col-span-2`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6]/70 mb-3">About</p>
            <h3 className="text-xl font-semibold text-white mb-1">Krishna Prasanth S</h3>
            <p className="text-xs text-white/40 mb-3">Junior 3D Artist · Blender Artist · Asset Artist</p>
            <p className="text-sm leading-relaxed text-white/50">Passionate Junior 3D Artist and Blender Mentor with hands-on experience in 3D modeling, texturing, optimization, and asset creation. Experienced in mentoring students through µLearn Foundation and actively contributing to open-source and technical communities. Interested in creating high-quality game-ready assets and building a career in the AAA gaming industry.</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              <a href="mailto:kpts7102@gmail.com" className="text-xs text-white/40 hover:text-white/80 hover:underline underline-offset-4 transition">kpts7102@gmail.com</a>
              <a href="tel:+916282160755" className="text-xs text-white/40 hover:text-white/80 hover:underline underline-offset-4 transition">+91 6282160755</a>
              <a href="https://github.com/krishnaprasanth7102" target="_blank" rel="noreferrer" className="text-xs text-white/40 hover:text-white/80 hover:underline underline-offset-4 transition">GitHub</a>
              <a href="https://linkedin.com/in/krishna-prasanth-s" target="_blank" rel="noreferrer" className="text-xs text-white/40 hover:text-white/80 hover:underline underline-offset-4 transition">LinkedIn</a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} p-3`}
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-white/[0.04] transition duration-500 group-hover:scale-[1.02]">
              <img src="/profile.jpg" alt="Krishna Prasanth S" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          {/* Experience — spans full 3 cols */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} lg:col-span-3 md:col-span-2`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6]/70 mb-4">Experience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="border-l border-white/[0.08] pl-4 hover:border-[#8B5CF6]/40 transition duration-300">
                <p className="text-sm font-medium text-white/80">Blender Mentor</p>
                <p className="text-[11px] text-white/30 mt-0.5">µLearn Foundation · Present</p>
                <div className="mt-2.5 space-y-1.5 text-[11px] text-white/40 leading-relaxed">
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Mentor students in Blender workflows, modeling, texturing, lighting, and rendering.</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Help the lead to conduct learning sessions and project reviews.</span>
                  </p>
                </div>
              </div>

              <div className="border-l border-white/[0.08] pl-4 hover:border-[#8B5CF6]/40 transition duration-300">
                <p className="text-sm font-medium text-white/80">Blender Designer Intern</p>
                <p className="text-[11px] text-white/30 mt-0.5">µLearn Foundation · May 2024 – Aug 2024</p>
                <div className="mt-2.5 space-y-1.5 text-[11px] text-white/40 leading-relaxed">
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Created 3D assets and visual content using Blender.</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Delivered creative work while maintaining quality standards and deadlines.</span>
                  </p>
                </div>
              </div>

              <div className="border-l border-white/[0.08] pl-4 hover:border-[#8B5CF6]/40 transition duration-300">
                <p className="text-sm font-medium text-white/80">Blender Designer Intern</p>
                <p className="text-[11px] text-white/30 mt-0.5">µLearn Foundation · Nov 2023 – Apr 2024</p>
                <div className="mt-2.5 space-y-1.5 text-[11px] text-white/40 leading-relaxed">
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Assisted in creating 3D models and visual assets for projects.</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Collaborated with teams and gained professional production experience.</span>
                  </p>
                </div>
              </div>

              <div className="border-l border-white/[0.08] pl-4 hover:border-[#8B5CF6]/40 transition duration-300">
                <p className="text-sm font-medium text-white/80">Campus Ambassador Intern</p>
                <p className="text-[11px] text-white/30 mt-0.5">BeyondExams · Feb 2023 – Mar 2023</p>
                <div className="mt-2.5 space-y-1.5 text-[11px] text-white/40 leading-relaxed">
                  <p className="flex items-start gap-1.5">
                    <span className="select-none text-white/20">•</span>
                    <span>Built a portfolio website and mentored students in web development.</span>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} md:col-span-1`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#7C3AED]/70 mb-3">Technical Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {["Blender", "3D Modeling", "Texturing", "UV Mapping", "Lighting", "Rendering", "Animation", "Assets", "HTML", "CSS", "JavaScript", "React", "Next.js", "Firebase"].map((s) => (
                <span key={s} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50 transition-all duration-200 hover:scale-105 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white/80 cursor-default">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills — spans 2 cols */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} md:col-span-1 lg:col-span-2`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#EC4899]/70 mb-3">Soft Skills</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "Communication",
                "Problem Solving",
                "Leadership",
                "Creativity",
                "Collaboration",
                "Adaptability",
                "Time Management",
                "Mentoring"
              ].map((skill) => (
                <div key={skill} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 hover:border-white/[0.12] hover:bg-white/[0.04] transition duration-300 hover:scale-[1.02] cursor-default">
                  <p className="text-[11px] text-white/50">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={`${bentoCard} md:col-span-1`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#06B6D4]/70 mb-4">Education</p>
            <div className="space-y-3">
              <div className="group/edu">
                <p className="text-sm text-white/80 transition duration-300 group-hover/edu:text-white">B.Tech – Information Technology</p>
                <p className="text-[11px] text-white/30 mt-0.5">UCEK · 2024–2028</p>
              </div>
              <div className="border-t border-white/[0.05] pt-3 group/edu">
                <p className="text-sm text-white/80 transition duration-300 group-hover/edu:text-white">Higher Secondary Education</p>
                <p className="text-[11px] text-white/30 mt-0.5">Govt. Boys HSS, Neyyattinkara · 2020–2022</p>
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={bentoCard}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6]/70 mb-3">Leadership</p>
            <div className="flex flex-wrap gap-1.5">
              {["IEEE Co-Lead", "TinkerHub Co-Lead", "FOSS Club Mentor", "µLearn Lead", "KBA Member"].map((role) => (
                <span key={role} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50 transition-all duration-200 hover:scale-105 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white/80 cursor-default">{role}</span>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={bentoItem}
            whileHover={cardHover}
            className={bentoCard}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#F59E0B]/70 mb-3">Interests</p>
            <div className="flex flex-wrap gap-1.5">
              {["3D Art", "Game Dev", "AAA Gaming", "Blockchain", "Web Dev", "Open Source"].map((interest) => (
                <span key={interest} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50 transition-all duration-200 hover:scale-105 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white/80 cursor-default">{interest}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


function GalleryGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const artImages = [
    "billboard.png",
    "Screenshot 2026-05-18 222026.png",
    "Screenshot 2026-05-18 222045.png",
    "Screenshot 2026-05-18 222102.png",
    "Screenshot 2026-05-18 222221.png",
    "Screenshot 2026-05-18 222232.png",
    "Screenshot 2026-05-18 222240.png",
    "Screenshot 2026-05-18 222251.png",
    "Screenshot 2026-05-18 222327.png",
    "Screenshot 2026-05-18 222337.png",
    "Screenshot 2026-05-18 222348.png",
    "Screenshot 2026-05-18 222527.png",
    "Screenshot 2026-05-18 222539.png",
    "Screenshot 2026-05-18 222555.png",
    "Screenshot 2026-05-18 222609.png",
    "Screenshot 2026-05-18 222618.png",
    "Screenshot 2026-05-18 222627.png",
    "Screenshot 2026-05-18 222643.png",
    "Screenshot 2026-05-18 222731.png",
    "Screenshot 2026-05-18 222739.png",
    "Screenshot 2026-05-18 222748.png",
    "Screenshot 2026-05-18 222756.png",
    "Screenshot 2026-05-18 222829.png",
    "Screenshot 2026-05-18 222837.png",
    "Screenshot 2026-05-18 222847.png",
    "Screenshot 2026-05-18 222854.png",
    "Screenshot 2026-05-18 222904.png",
    "skyscaapper.png",
  ];

  return (
    <section ref={ref} id="gallery" className="bg-[#0d0a1f] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={reveal}
            className="space-y-2"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Gallery</p>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Work of Krishna Prasanth S</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={reveal}
            className="text-right"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">{artImages.length} works in Blender</p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artImages.map((image, idx) => (
            <motion.a
              key={image}
              href={`/art/${encodeURI(image)}`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={reveal}
              transition={{ delay: idx * 0.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={encodeURI(`/art/${image}`)}
                  alt={`Work ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">Work {idx + 1}</p>
                  <p className="mt-2 text-sm font-semibold">Open full poster</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#08060f] py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Let&apos;s create something cinematic with Blender, web, or AI.
            </h2>
          </div>

          <div className="space-y-4 text-center lg:text-right">
            <a
              href="mailto:kpts7102@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-[#8B5CF6]/25 transition duration-300 hover:bg-[#7C3AED] hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>✉</span>
              Email me
            </a>
            <a
              href="tel:+916282160755"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm transition duration-300 hover:bg-white/20 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>📁</span>
              Call me
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Krishna Prasanth. Built with Next.js, Blender, and bold visuals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
            <a href="#top" className="transition hover:text-white">
              Back to top
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#credentials" className="transition hover:text-white">
              Credentials
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#090511] text-white selection:bg-[#8B5CF6] selection:text-white">
      <NavBar />
      <HeroSection />
      <ResumeSection />
      <CredentialsSection />
      <GalleryGrid />
      <Footer />
    </div>
  );
}
