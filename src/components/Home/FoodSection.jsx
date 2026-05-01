import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import PlaceCard from "./PlaceCard";
import { food } from "../../data/food";
import { LuSalad } from "react-icons/lu";

export default function FoodSection() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir * 220,
      behavior: "smooth",
    });
  };

  return (
    <section id="am-thuc">
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <SectionTitle title="Ẩm thực đặc sắc" icon={<LuSalad size={15} />} />

        {/* Slider */}
        <div className="relative">

          {/* Nút trái */}
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow border items-center justify-center"
          >
            ‹
          </button>

          {/* List */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {food.map((food, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[160px] sm:w-[180px] lg:w-[200px] cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                  <img
                    src={food.img}
                    alt={food.title}
                    className="w-full h-[100px] sm:h-[110px] lg:h-[120px] object-cover"
                  />
                </div>

                <p className="mt-2 text-center text-[12px] sm:text-[13px] font-medium text-gray-800">
                  {food.title}
                </p>
              </div>
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
    </section>
    </section>
  );
}