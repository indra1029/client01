import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, Headphones, Eye, Trophy } from "lucide-react";

const reasons = [
  { icon: Trophy, title: "Premium Quality", desc: "Every frame is polished to perfection with cinematic-grade editing." },
  { icon: Zap, title: "Fast Turnaround", desc: "Quick delivery without compromising on quality — your deadlines, met." },
  { icon: HeartHandshake, title: "Client-First Approach", desc: "Your vision drives the edit. Unlimited revisions until you're satisfied." },
  { icon: Eye, title: "Creative Vision", desc: "Storytelling-first editing that keeps your audience hooked from start to finish." },
  { icon: Headphones, title: "24/7 Communication", desc: "Always available on WhatsApp for quick updates and feedback loops." },
  { icon: Shield, title: "Confidential & Reliable", desc: "Your content is safe with me. Professional NDA available on request." },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Why Clients <span className="text-gradient">Trust Me</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-8 rounded-2xl glass glow-border"
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <r.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
