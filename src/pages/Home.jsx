import HeroBanner from "../components/home/HeroBanner";
import IntroSection from "../components/home/IntroSection";
import PlacesSection from "../components/home/PlacesSection";
import FoodSection from "../components/home/FoodSection";
import FestivalSection from "../components/home/FestivalSection";
import GalleryExperienceSection from "../components/home/GalleryExperienceSection";

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