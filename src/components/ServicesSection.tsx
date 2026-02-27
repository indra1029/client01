import { motion } from "framer-motion";
import { Youtube, Smartphone, Megaphone, Clapperboard, Film, Tv } from "lucide-react";

const services = [
  { icon: Youtube, title: "YouTube Video Editing", desc: "Full-length YouTube content with intros, transitions, color grading, and audio sync." },
  { icon: Smartphone, title: "Social Media Reels", desc: "Eye-catching short-form content optimized for Instagram, TikTok, and YouTube Shorts." },
  { icon: Megaphone, title: "Promotional Videos", desc: "Compelling promo videos and ads that drive engagement and conversions for your brand." },
  { icon: Clapperboard, title: "Short Films", desc: "Cinematic editing with professional color grading, sound design, and storytelling." },
  { icon: Tv, title: "Digital Ads", desc: "High-impact ad videos optimized for social media platforms and digital campaigns." },
  { icon: Film, title: "Podcast & Interview Editing", desc: "Clean cuts, multi-cam sync, captions, and dynamic layouts for podcast content." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl glass glow-border group cursor-default"
            >
              <div className="p-3 rounded-xl bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
