import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Let's Create Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to elevate your content? Reach out directly on WhatsApp for the fastest response, 
            or use the contact details below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "+91-8302803076",
              href: "https://wa.me/918302803076?text=Hi%20Deepak,%20I'm%20interested%20in%20your%20video%20editing%20services!",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+91-8302803076",
              href: "tel:+918302803076",
            },
            {
              icon: Mail,
              label: "Email",
              value: "bagradeepak470@gmail.com",
              href: "mailto:bagradeepak470@gmail.com",
            },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center p-6 rounded-2xl glass glow-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-xl bg-gradient-primary mb-3">
                <c.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="font-semibold">{c.label}</div>
              <div className="text-sm text-muted-foreground mt-1 break-all">{c.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Big WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://wa.me/918302803076?text=Hi%20Deepak,%20I'm%20interested%20in%20your%20video%20editing%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.853L.057 23.764l6.063-1.418A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.796 9.796 0 01-5.39-1.606l-.386-.23-3.601.843.906-3.484-.252-.4A9.818 9.818 0 012.18 12c0-5.424 4.396-9.82 9.82-9.82S21.82 6.576 21.82 12s-4.396 9.82-9.82 9.82z"/>
            </svg>
            Message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
