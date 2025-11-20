import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Fingerprint, QrCode, Key } from "lucide-react";

const VerificationSection = () => {
  return (
    <section id="verification" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Multi-Lapisan
            </span>{" "}
            Verifikasi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Protokol keamanan canggih untuk melindungi identitas digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up group">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Bukti Blockchain</CardTitle>
              <CardDescription>
                Catatan permanen tersimpan di buku besar terdistribusi
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="shadow-card border-border/50 hover:border-accent/50 transition-all hover:shadow-glow animate-slide-up group"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Fingerprint className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Autentikasi Biometrik</CardTitle>
              <CardDescription>
                Akses aman dengan sidik jari atau pengenalan wajah
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="shadow-card border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up group"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Validasi QR</CardTitle>
              <CardDescription>
                Verifikasi instan dengan kode QR yang aman
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="shadow-card border-border/50 hover:border-accent/50 transition-all hover:shadow-glow animate-slide-up group"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Key className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Kunci Pribadi</CardTitle>
              <CardDescription>
                Kunci kriptografi untuk keamanan maksimal
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card
            className="shadow-card border-border/50 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Cara Kerja Verifikasi</h3>
              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pembuatan Identitas</h4>
                    <p className="text-sm text-muted-foreground">
                      Buat identitas digital Anda dengan data pribadi
                      terenkripsi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Pendaftaran Blockchain
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Hash identitas Anda dicatat di blockchain untuk kekekalan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Verifikasi Kredensial
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pihak ketiga dapat memverifikasi kredensial Anda secara
                      instan
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-6 gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all">
                Mulai Proses Verifikasi
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
