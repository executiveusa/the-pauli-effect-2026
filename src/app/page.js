import Hero from "../components/Hero"
import {
  BlogTeaser,
  CharacterGallery,
  FAQ,
  Footer,
  InsiderGate,
  MascotFlywheel,
  OldWayPauliWay,
  OwnershipExplainer,
  PainPoints,
  ProofSection,
} from "../components/PageSections"
import SurveyFunnel from "../components/SurveyFunnel"

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <PainPoints />
      <SurveyFunnel />
      <OldWayPauliWay />
      <MascotFlywheel />
      <CharacterGallery />
      <OwnershipExplainer />
      <ProofSection />
      <FAQ />
      <InsiderGate />
      <BlogTeaser />
      <Footer />
    </main>
  )
}
