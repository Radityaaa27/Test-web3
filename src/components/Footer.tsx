import { Shield, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold bg-gradient-primary bg-clip-text text-primary">ChainID</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mengamankan identitas digital dengan teknologi blockchain.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Fitur</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Keamanan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dokumentasi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Tentang</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Terhubung</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 ChainID. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
