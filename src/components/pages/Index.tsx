import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IdentityDashboard from "@/components/IdentityDashboard";
import VerificationSection from "@/components/VerificationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <IdentityDashboard />
        <VerificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
