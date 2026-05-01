import img1 from "../../assets/anh1.jpg";
import img2 from "../../assets/anh2.jpg";
import img3 from "../../assets/anh3.jpg";
import img4 from "../../assets/anh4.jpg";
import img5 from "../../assets/anh5.jpg";
import img6 from "../../assets/anh6.jpg";
import img7 from "../../assets/anh7.jpg";
import img8 from "../../assets/anh8.jpg";
import img9 from "../../assets/anh9.jpg";
import img10 from "../../assets/anh10.jpg";
import img11 from "../../assets/anh11.jpg";
import img12 from "../../assets/anh12.jpg";
import img13 from "../../assets/anh13.jpg";
import img14 from "../../assets/anh14.jpg";
import videoThumb from "../../assets/video.mp4";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { LuLandmark } from "react-icons/lu";
import { LuImage } from "react-icons/lu";


export default function GalleryExperienceSection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Layout 2 cột */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT: Gallery */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
                <SectionTitle title="GALLERY" icon={<LuImage size={15} />} />
            </div>

            {/* Slider */}
            <div className="overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] h-[100px] rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* RIGHT: Video */}
          <div className="flex-1 min-w-0">
            <SectionTitle title="TRẢI NGHIỆM THÁI BÌNH" icon={<LuLandmark size={15} />} />

            <div className="relative rounded-2xl overflow-hidden">
              <video
                src={videoThumb}
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover rounded-2xl "
                controls
              />

              {/* Text */}
              <div className="absolute top-4 left-4 text-white">
                <p className="text-xl">Khám phá Thái Bình</p>
                <h3 className="font-semibold">
                  Đất và người nghĩa tình
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}