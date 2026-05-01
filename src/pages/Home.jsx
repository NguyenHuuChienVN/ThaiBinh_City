import HeroBanner from "../components/Home/HeroBanner";
import IntroSection from "../components/Home/IntroSection";
import PlacesSection from "../components/Home/PlacesSection";
import FoodSection from "../components/Home/FoodSection";
import FestivalSection from "../components/Home/FestivalSection";
import GalleryExperienceSection from "../components/Home/GalleryExperienceSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <PlacesSection />
      <FoodSection />
      <FestivalSection />
      <GalleryExperienceSection />
    </>
  );
}