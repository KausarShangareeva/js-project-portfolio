import { GlobalStyles } from "./styles/GlobalStyles";
import HeroSection from "./Sections/HeroSection/HeroSection";
import TechSection from "./Sections/TechSection/TechSection";
import FeaturedProjectsSection from "./Sections/FeaturedProjectsSection/FeaturedProjectsSection";
import SkillsSection from "./Sections/SkillsSection/SkillsSection";
import BlogSection from "./Sections/BlogSection/BlogSection";
import FooterSection from "./Sections/FooterSection/FooterSection";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <HeroSection />
      <TechSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
