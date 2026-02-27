import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "YouTube Creator",
    text: "Deepak completely transformed my channel's look. His editing style is so professional — my views doubled within a month!",
  },
  {
    name: "Rohit Verma",
    role: "Business Owner",
    text: "The promotional video he created for our brand was outstanding. Clean, impactful, and delivered on time. Highly recommended!",
  },
  {
    name: "Ananya Gupta",
    role: "Instagram Influencer",
    text: "My reels have never looked better! Deepak understands trends and knows exactly how to make content pop. A true professional.",
  },
  {
    name: "Vikram Singh",
    role: "Podcast Host",
    text: "He handled our multi-camera podcast editing flawlessly. Great communication, fast turnaround, and the quality speaks for itself.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass glow-border relative"
            >
              <Quote size={28} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
