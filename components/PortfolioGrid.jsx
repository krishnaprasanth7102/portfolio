"use client";

import { motion } from "framer-motion";

const pieces = [
  {
    title: "Billboard Vessel",
    category: "Short-form Study",
    filename: "billboard.png",
  },
  {
    title: "Nocturnal Axis",
    category: "Reel Frame",
    filename: "Screenshot 2026-05-18 222026.png",
  },
  {
    title: "Fractured Frame",
    category: "Reel Frame",
    filename: "Screenshot 2026-05-18 222045.png",
  },
  {
    title: "Still Geometry",
    category: "Reel Frame",
    filename: "Screenshot 2026-05-18 222102.png",
  },
  {
    title: "Tension Field",
    category: "Reel Frame",
    filename: "Screenshot 2026-05-18 222221.png",
  },
  {
    title: "Skyline Mono",
    category: "Short-form Study",
    filename: "skyscaapper.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function encodeArtPath(filename) {
  return encodeURI(`/art/${filename}`);
}

export default function PortfolioGrid({ onOpenReel }) {
  return (
    <section className="space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={itemVariants}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#F5F5F5]/60">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Selected works in quiet wireframe compositions.
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={itemVariants}
          className="max-w-xl text-sm leading-7 text-[#F5F5F5]/70"
        >
          Each piece is designed to feel suspended — an object that exists between sculpture and interface, presented with brutal minimal restraint.
        </motion.p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {pieces.map((piece, index) => (
          <motion.article
            key={piece.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] transition-transform duration-300 hover:-translate-y-1"
            onClick={() => onOpenReel(index)}
          >
            <div className="relative overflow-hidden bg-[#0f0f0f] p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(245,245,245,0.08),transparent_35%),#111] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                <img
                  src={encodeArtPath(piece.filename)}
                  alt={piece.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </div>

            <div className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#F5F5F5]/50">
                {piece.category}
              </p>
              <h3 className="font-serif text-2xl leading-[1.05] tracking-[-0.03em] text-[#F5F5F5]">
                {piece.title}
              </h3>
              <p className="text-sm leading-7 text-[#F5F5F5]/70">
                Tap to open the reel — the work is presented in a red-on-black cinematic short-form flow.
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
