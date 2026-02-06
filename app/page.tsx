import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SuspectProfile from "@/components/SuspectProfile";
import Evidence from "@/components/Evidence";
import Timeline from "@/components/Timeline";


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <CustomCursor />
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12 space-y-24">
        <Hero />
        <section id="suspect" className="scroll-mt-24">
          <SuspectProfile />
        </section>
        <section id="evidence" className="scroll-mt-24">
          {/* Evidence/Projects Component will go here */}
          <Evidence />
        </section>

        <Timeline />
      </div>
    </main>
  );
}
