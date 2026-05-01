import { useRef } from "react";
import PlaceCard from "./PlaceCard";
import SectionTitle from "./SectionTitle";
import { places } from "../../data/places";
import { LuMapPin } from "react-icons/lu";

export default function PlacesSection() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir * 260,
      behavior: "smooth",
    });
  };

  return (
    <div id="dia-diem" className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle title="Địa điểm nổi bật" icon={<LuMapPin size={15} />} />

      <div className="relative">

        {/* Nút trái */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow border items-center justify-center"
        >
          ‹
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {places.map((place, i) => (
            <PlaceCard key={i} place={place} />
          ))}
        </div>

        {/* Nút phải */}
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow border items-center justify-center"
        >
          ›
        </button>

      </div>
    </div>
  );
}