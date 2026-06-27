"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  "Untitled.png",
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

function ArtImageCard({ src, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageReveal}
            className="group relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#100b1f] shadow-lg transition-all duration-300 hover:border-[#8B5CF6]/40"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={encodeURI(`/art/${src}`)}
          alt={`Blender work ${index + 1}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function ArtGallery() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const gridSections = [
    {
      title: "BLENDER STUDIES",
      subtitle: "Quiet forms in wireframe and surface",
      images: artImages.slice(0, 6),
      start: 0,
    },
    {
      title: "SCULPTURAL FRAMES",
      subtitle: "Geometry as a language",
      images: artImages.slice(6, 12),
      start: 6,
    },
    {
      title: "MATERIAL EXPLORATIONS",
      subtitle: "Light meets void",
      images: artImages.slice(12, 18),
      start: 12,
    },
    {
      title: "FINAL RENDERS",
      subtitle: "The complete narrative",
      images: artImages.slice(18),
      start: 18,
    },
  ];

  return (
    <div className="space-y-24">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={reveal}
        className="space-y-4"
      >
        <div className="flex items-end gap-4">
          <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl">
            BLENDER
          </h2>
          <span className="mb-2 block h-1 w-16 bg-[#8B5CF6]" />
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#F5F5F5]/80">
          Every wireframe, every surface. A complete archive of sculptural studies—scroll the void and discover the geometry beneath.
        </p>
      </motion.div>

      {gridSections.map((section, sectionIdx) => (
        <div key={section.title} className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="border-l-2 border-[#8B5CF6] pl-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#F5F5F5]/60">
              Section {sectionIdx + 1}
            </p>
            <h3 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#F5F5F5] sm:text-5xl">
              {section.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#F5F5F5]/70">
              {section.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.images.map((image, imageIdx) => (
              <ArtImageCard
                key={`${section.title}-${imageIdx}`}
                src={image}
                index={section.start + imageIdx}
              />
            ))}
          </div>
        </div>
      ))}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
        className="border-t border-white/10 pt-12 text-center"
      >
        <p className="text-sm text-[#F5F5F5]/60">
          All {artImages.length} studies — crafted in Blender, presented in Veta.
        </p>
        <div className="mt-6 flex justify-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === 0 ? "bg-[#8B5CF6]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
