import { motion } from "framer-motion";
import { Play } from "lucide-react";

// YouTube video IDs — easily add or remove videos here
const videoIds = [
  "YiykrAOtxkI",
  "A-n-YRLYkL8",
  "i3j7W6kj4XI",
  "FN0VWR3SlWY",
  "y_6PfnMMrhI",
  "345f8wrJ-sQ",
  "X2KIJ_EsmpE",
];

const getEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1`;

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            My <span className="text-gradient">Recent Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Watch some of my latest video editing projects — each crafted with precision and creative vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoIds.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden aspect-video glass glow-border group"
            >
              <iframe
                src={getEmbedUrl(id)}
                title={`Project ${i + 1}`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto p-3 rounded-full bg-gradient-primary"
                >
                  <Play size={24} className="text-primary-foreground fill-primary-foreground" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Want to see more? <a href="https://wa.me/918302803076?text=Hi%20Deepak,%20I%20want%20to%20see%20more%20of%20your%20work!" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Message me</a> for the full portfolio.
        </motion.p>
      </div>
    </section>
  );
};

export default PortfolioSection;
