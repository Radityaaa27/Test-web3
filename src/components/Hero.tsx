import { Shield, Lock, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Zap className="w-3 h-3" />
            Didukung oleh Teknologi Blockchain
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Identitas Digital Anda
            <br />
            <span className="bg-gradient-primary bg-clip-text text-primary">
              Aman Selamanya
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ambil kendali penuh atas identitas digital Anda dengan keamanan blockchain. 
            Verifikasi, kelola, dan bagikan kredensial Anda dengan percaya diri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all">
              <Shield className="w-5 h-5 mr-2" />
              Coba Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              Pelajari Lebih Lanjut
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-6 rounded-2xl bg-card shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Keamanan Tak Tergoyahkan</h3>
                <p className="text-sm text-muted-foreground">Dilindungi oleh kriptografi blockchain</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-6 rounded-2xl bg-card shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Verifikasi Instan</h3>
                <p className="text-sm text-muted-foreground">Validasi kredensial secara real-time</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-6 rounded-2xl bg-card shadow-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Kontrol Penuh</h3>
                <p className="text-sm text-muted-foreground">Anda memiliki dan mengelola data Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
