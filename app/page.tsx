import { SectionReveal } from "@/components/shared/SectionReveal";
import { HeroSection } from "@/components/home/HeroSection";
import { PersonaSelector } from "@/components/home/PersonaSelector";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { DeviceMapDemo } from "@/components/home/DeviceMapDemo";
import { SmartStatesDemo } from "@/components/home/SmartStatesDemo";
import { TapcordStandard } from "@/components/home/TapcordStandard";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FAQ } from "@/components/home/FAQ";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionReveal>
        <PersonaSelector />
      </SectionReveal>
      <SectionReveal>
        <ServicesGrid />
      </SectionReveal>
      <SectionReveal>
        <DeviceMapDemo />
      </SectionReveal>
      <SectionReveal>
        <SmartStatesDemo />
      </SectionReveal>
      <SectionReveal>
        <TapcordStandard />
      </SectionReveal>
      <SectionReveal>
        <ProcessSteps />
      </SectionReveal>
      <SectionReveal>
        <FeaturedProject />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <InsightsPreview />
      </SectionReveal>
      <SectionReveal>
        <FAQ />
      </SectionReveal>
      <FinalCta />
    </>
  );
}
