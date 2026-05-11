import EventPage from "@/components/EventPage";
import HeroPage from "@/components/HeroPage";
import MenuPage from "@/components/MenuPage";
import NewsLetter from "@/components/NewsLetter";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div className="relative">
      <div>
        <HeroPage />
        <MenuPage />
        <EventPage/>
        <PhotoGallery/>
        <NewsLetter/>
      </div>
    </div>
  );
}
