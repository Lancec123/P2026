import Nav from "@/components/pursuit/Nav";
import Hero from "@/components/pursuit/Hero";
import About from "@/components/pursuit/About";
import GetInvolved from "@/components/pursuit/GetInvolved";
import Schedule from "@/components/pursuit/Schedule";
import FAQ from "@/components/pursuit/FAQ";
import Parents from "@/components/pursuit/Parents";
import Footer from "@/components/pursuit/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <GetInvolved />
      <Schedule />
      <FAQ />
      <Parents />
      <Footer />
    </main>
  );
};

export default Index;