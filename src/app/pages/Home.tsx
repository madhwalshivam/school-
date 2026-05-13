import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { WhySection } from "../components/WhySection";
import { FounderVision } from "../components/FounderVision";
import { CampusExperience } from "../components/CampusExperience";
import { AcademicEcosystem } from "../components/AcademicEcosystem";
import { InternationalVision } from "../components/InternationalVision";
import { ResultsAndLife } from "../components/ResultsAndLife";
import { AdmissionsFunnel } from "../components/AdmissionsFunnel";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhySection />
      <FounderVision />
      <CampusExperience />
      <AcademicEcosystem />
      <InternationalVision />
      <ResultsAndLife />
      <AdmissionsFunnel />
    </>
  );
}
