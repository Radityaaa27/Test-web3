import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-primary shadow-glow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text">
                ChainID
              </h1>
              <p className="text-xs text-muted-foreground">Identitas Terdesentralisasi</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dasbor
            </a>
            <a href="#credentials" className="text-sm font-medium hover:text-primary transition-colors">
              Kredensial
            </a>
            <a href="#verification" className="text-sm font-medium hover:text-primary transition-colors">
              Verifikasi
            </a>
            <Button className="gradient-primary text-primary-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all">
              Hubungkan Dompet
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
