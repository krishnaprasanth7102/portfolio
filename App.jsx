"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const portfolioHighlights = [
  { value: "2+", label: "Years of visual design & 3D craft" },
  { value: "15+", label: "Blender and concept pieces in the portfolio" },
  { value: "3", label: "Creative roles showing initiative and growth" },
  { value: "100%", label: "Focused on premium storytelling and polish" },
];

const skillGroups = {
  art: ["Blender", "3D Modeling", "Texturing", "Lighting", "Rendering", "Concept Art"],
  digital: ["Next.js", "React", "JavaScript", "UI Design", "Responsive Design", "Creative Frontend"],
  strengths: ["Visual Storytelling", "Mentoring", "Creative Direction", "Collaboration"],
};

const featuredWork = [
  { title: "Billboard Vessel", category: "3D visualization", image: "billboard.png" },
  { title: "Skyline Study", category: "Environment art", image: "skyscaapper.png" },
  { title: "Nocturnal Axis", category: "Concept framing", image: "Screenshot 2026-05-18 222026.png" },
  { title: "Urban Echo", category: "Lighting pass", image: "Screenshot 2026-05-18 222045.png" },
  { title: "Shadow Corridor", category: "Atmospheric scene", image: "Screenshot 2026-05-18 222102.png" },
  { title: "Silent Signal", category: "Sci-fi concept", image: "Screenshot 2026-05-18 222221.png" },
];

const experiences = [
  {
    role: "Blender Mentor",
    company: "Mulearn Foundation",
    period: "Present",
    description:
      "Guiding students in Blender workflows, modelling, lighting, and visual communication while helping them turn ideas into polished creative output.",
  },
  {
    role: "Blender Designer Intern",
    company: "Mulearn Foundation",
    period: "May 2024 - Aug 2024",
    description:
      "Created 3D assets, visual studies, and polished renders using Blender while meeting deadlines and quality expectations.",
  },
  {
    role: "Blender Designer Intern",
    company: "Mulearn Foundation",
    period: "Nov 2023 - Apr 2024",
    description:
      "Developed Blender design work while demonstrating dedication, technical expertise, and professional adaptability.",
  },
  {
    role: "Campus Ambassador Intern",
    company: "BeyondExams",
    period: "Feb 2023 - Mar 2023",
    description:
      "Built portfolio-driven digital experiences and supported student engagement through creative and technical initiatives.",
  },
];

const documents = [
  {
    title: "Blender Designer Internship",
    issuer: "Mulearn Foundation",
    period: "May 1, 2024 to August 31, 2024",
    description: "Certificate of completed internship for Blender design, work delivered on time with strong professionalism and growth.",
    file: "/pdfs/Krishna%20Prasanth%20S%20-%20Blender%20Designer%20(3).pdf",
  },
  {
    title: "Blender Designer Internship",
    issuer: "Mulearn Foundation",
    period: "November 1, 2023 to April 30, 2024",
    description: "Certificate recommending Krishna for his dedication, expertise, and professional adaptability.",
    file: "/pdfs/Krishna%20Prasanth%20S%20%20-%20Blender%20Designer%20.pdf",
  },
  {
    title: "Work Experience Letter",
    issuer: "BeyondExams",
    period: "Feb 1, 2023 to March 25, 2023",
    description: "Letter highlighting portfolio site work, mentorship, and project leadership as a Campus Ambassador.",
    file: "/pdfs/Krishna%20Prasanth_work_ex_letter%20(1).pdf",
  },
];

function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07131d]/85 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.24em] text-[#e8f6ff] uppercase">
          Krishna
        </a>
        <div className="hidden items-center gap-6 text-[0.68rem] uppercase tracking-[0.28em] text-white/55 md:flex">
          <a href="#about" className="transition hover:text-[#73f0ff]">About</a>
          <a href="#experience" className="transition hover:text-[#73f0ff]">Experience</a>
          <a href="#work" className="transition hover:text-[#73f0ff]">Work</a>
          <a href="#contact" className="transition hover:text-[#73f0ff]">Contact</a>
        </div>
        <a
          href="mailto:kpts7102@gmail.com"
          className="neon-button"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-120px" });

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-[#07131d] pt-24 text-white lg:pt-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#6ee7ff]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,231,255,0.08),transparent_48%)]" />

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={heroVariants}
        className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-6 pb-20 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-12"
      >
        <div className="space-y-8">
          <div className="section-tag">3D Artist • Creative Technologist • Game-ready Visual Designer</div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7be7ff]">Open to opportunities</p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Krishna Prasanth S
            </h1>
            <h2 className="max-w-2xl text-xl font-medium leading-8 text-[#cfe7ff] sm:text-2xl">
              I create bold 3D visuals and immersive digital experiences for teams that care about visual quality and gameplay feel.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#dfeaf7]/80 sm:text-lg">
            My work blends Blender artistry, visual storytelling, and modern frontend presentation — giving game studios and creative teams a profile that feels premium, polished, and ready for real production conversations.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="neon-button">
              View portfolio
            </a>
            <a href="/pdfs/Krishna%20Prasanth_work_ex_letter%20(1).pdf" download="Krishna-Prasanth-Resume.pdf" className="secondary-button">
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-[#d8e4f2]/70">
            <span>Based in India</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <a href="mailto:kpts7102@gmail.com" className="transition hover:text-white">kpts7102@gmail.com</a>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <a href="https://linkedin.com/in/krishna-prasanth-s" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative flex h-[560px] items-center justify-center"
        >
          <div className="absolute h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(110,231,255,0.26),rgba(139,92,246,0.12),transparent_65%)] blur-[120px]" />

          <motion.div
            animate={{ y: [-12, 12, -12], rotate: [-5, -2, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-8 top-16 h-[260px] w-[220px] overflow-hidden rounded-[2rem] border border-[#73f0ff]/20 bg-[#0d1823] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          >
            <Image fill src="/art/Screenshot%202026-05-18%20222026.png" alt="3D artwork 1" className="object-cover opacity-80" sizes="220px" />
          </motion.div>

          <motion.div
            animate={{ y: [12, -12, 12], rotate: [5, 2, 5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute right-8 top-20 h-[240px] w-[200px] overflow-hidden rounded-[2rem] border border-[#ff9a5b]/20 bg-[#0d1823] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          >
            <Image fill src="/art/skyscaapper.png" alt="3D artwork 2" className="object-cover opacity-80" sizes="200px" />
          </motion.div>

          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="relative z-10 h-[390px] w-[300px] overflow-hidden rounded-[2.3rem] border border-[#7be7ff]/20 bg-[#091824] shadow-[0_40px_120px_rgba(0,0,0,0.75),0_0_50px_rgba(110,231,255,0.18)]"
          >
            <Image fill src="/art/billboard.png" alt="Featured artwork" className="object-cover" sizes="300px" priority />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[#07131d]/80 p-4 backdrop-blur-md">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#9bdfff]">Featured</p>
              <p className="mt-2 text-lg font-semibold text-white">Visual storytelling in 3D</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="mx-auto max-w-[1200px] px-6 pb-20 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {portfolioHighlights.map((item) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              className="stat-card"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-[#d1def3]/75">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section ref={ref} id="about" className="bg-[#08141b] py-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={reveal}
          className="space-y-6"
        >
          <p className="section-tag section-tag--compact">About</p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            A creative designer who turns ideas into polished, game-ready experiences.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[#dfeaf7]/80 sm:text-lg">
            I enjoy building work that balances visual impact with clear execution. My background blends 3D design, digital art, mentoring, and frontend craftsmanship — giving me the ability to create content that feels premium and communicates well in a studio environment.
          </p>
          <p className="max-w-2xl text-base leading-8 text-[#dfeaf7]/80 sm:text-lg">
            Whether it is a concept render, portfolio presentation, or immersive visual story, I focus on clean craft, detail, and the kind of presence that helps a recruiter instantly connect the work with production value.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={reveal}
          className="soft-panel p-6"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#dfeaf7]/55">Profile</p>
          <div className="mt-5 flex items-center gap-4">
            <Image src="/profile.jpg" alt="Krishna Prasanth S" width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-2 ring-[#73f0ff]/40" />
            <div>
              <p className="text-xl font-semibold text-white">Krishna Prasanth S</p>
              <p className="text-sm text-[#dfeaf7]/70">3D Artist • Creative Designer</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.art.map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-[#eaf5ff]/80">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section ref={ref} id="experience" className="bg-[#091924] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={reveal} className="mb-12">
          <p className="section-tag section-tag--compact">Experience</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Experience that shows both craft and initiative.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.role}-${exp.period}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
              className="soft-panel p-6"
            >
              <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#7be7ff]">{exp.period}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#dfeaf7]/55">{exp.company}</p>
              <p className="mt-5 text-base leading-7 text-[#dfeaf7]/75">{exp.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section ref={ref} id="work" className="bg-[#08141b] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={reveal} className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-tag section-tag--compact">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Visual work designed to stand out.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#dfeaf7]/75">
            Each piece emphasizes atmosphere, form, and presentation — the same qualities that matter in standout game and creative roles.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1a26]"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  fill
                  src={encodeURI(`/art/${item.image}`)}
                  alt={item.title}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#dfeaf7]/55">{item.category}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section ref={ref} className="bg-[#091924] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={reveal} className="mb-12">
          <p className="section-tag section-tag--compact">Core strengths</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Skills recruiters look for in a creative digital profile.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {Object.entries(skillGroups).map(([group, items]) => (
            <motion.div
              key={group}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="soft-panel p-6"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#dfeaf7]/55">{group}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-[#7be7ff]/20 bg-[#0c1823] px-3 py-2 text-sm text-[#edf7ff]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section ref={ref} id="credentials" className="bg-[#080512] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={reveal} className="mb-12">
          <p className="section-tag section-tag--compact">Credentials</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Proof of the work behind the portfolio.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {documents.map((document, index) => (
            <motion.article
              key={document.file}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
              className="document-card"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="document-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="document-badge">PDF</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-tight text-white">{document.title}</h3>
              <p className="mt-7 text-sm text-[#dfeaf7]/75">
                {document.issuer} <span className="text-[#8b5cf6]">—</span> {document.period}
              </p>
              <p className="mt-5 min-h-14 text-sm leading-7 text-[#dfeaf7]/65">{document.description}</p>
              <a href={document.file} download className="document-download mt-8">
                Download <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#040b12] py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#dfeaf7]/45">Let&apos;s connect</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Open to creative, design, and digital roles where craft matters.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <a href="mailto:kpts7102@gmail.com" className="neon-button">
              Email me
            </a>
            <a href="https://linkedin.com/in/krishna-prasanth-s" target="_blank" rel="noreferrer" className="secondary-button">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-[#dfeaf7]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Krishna Prasanth S</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#top" className="transition hover:text-white">Top</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="game-shell min-h-screen text-white selection:bg-[#7be7ff] selection:text-[#08141b]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection />
      <DocumentsSection />
      <Footer />
    </div>
  );
}

