import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin, Calendar, CheckCircle2, Shield, ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";

const IdentityDashboard = () => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3");
    toast.success("Alamat berhasil disalin!");
  };

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Dasbor <span className="bg-gradient-primary bg-clip-text text-primary">Identitas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kelola identitas terdesentralisasi dan kredensial Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Identity Card */}
          <Card className="shadow-md border-border/50 animate-slide-up overflow-hidden">
            <div className="h-24 gradient-primary"></div>
            <CardHeader className="-mt-12">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-card border-4 border-card flex items-center justify-center gradient-card shadow-lg">
                    <img src={"https://i.pinimg.com/736x/84/2a/66/842a6664e322f21bf6019f91b99084f9.jpg"} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      Mulyono skibidi
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Terverifikasi
                      </Badge>
                    </CardTitle>
                    <CardDescription>Pemegang Identitas Digital</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>Mulyono@blockchain.id</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Surakarta</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Anggota sejak 2026</span>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Alamat Blockchain</p>
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <code className="text-xs flex-1 truncate">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3</code>
                  <Button size="icon" variant="ghost" className="h-8 w-8 flex-shrink-0" onClick={handleCopyAddress}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <Button className="w-full gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all">
                <Shield className="w-4 h-4 mr-2" />
                Lihat di Blockchain
              </Button>
            </CardContent>
          </Card>
          
          {/* Credentials Section */}
          <div className="space-y-6">
            <Card className="shadow-md border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Kredensial Terverifikasi
                </CardTitle>
                <CardDescription>Sertifikat digital terautentikasi Anda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Verifikasi Email</p>
                      <p className="text-xs text-muted-foreground">Terverifikasi di blockchain</p>
                    </div>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Aktif</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Dokumen Identitas</p>
                      <p className="text-xs text-muted-foreground">KTP yang diterbitkan pemerintah</p>
                    </div>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Aktif</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Lisensi Profesional</p>
                      <p className="text-xs text-muted-foreground">Insinyur Perangkat Lunak</p>
                    </div>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Aktif</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Aktivitas Terkini</CardTitle>
                <CardDescription>Transaksi blockchain terbaru</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="flex-1">Kredensial diverifikasi</span>
                  <span className="text-muted-foreground text-xs">2 jam lalu</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="flex-1">Identitas diperbarui</span>
                  <span className="text-muted-foreground text-xs">1 hari lalu</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="flex-1">Kredensial baru ditambahkan</span>
                  <span className="text-muted-foreground text-xs">3 hari lalu</span>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Lihat Semua Aktivitas
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityDashboard;
