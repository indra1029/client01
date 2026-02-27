import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Deepak Jain" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-bold text-gradient font-['Space_Grotesk']">Deepak Jain</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Deepak Jain Video Editing Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/918302803076" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              WhatsApp
            </a>
            <a href="mailto:bagradeepak470@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
