import { FaCheckCircle } from "react-icons/fa";
import { useRef } from "react";
import anhThuyen from "../../assets/anhthuyen.jpg";

const FestivalSection = () => {
    return (
    <section id="van-hoa" className="py-5 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Ảnh */}
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={anhThuyen}
                alt="Lễ hội Thái Bình"
                className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
          </div>

          {/* Nội dung */}
          <div className="flex-1 relative">

            {/* Background trang trí */}
            <div className="hidden lg:block absolute right-0 top-0 opacity-10">
              <div className="text-[200px]">🏯</div>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                VĂN HÓA - LỄ HỘI
              </span>
              <span className="text-green-500">🌿</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nơi lưu giữ giá trị truyền thống
            </h2>

            {/* Mô tả */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Thái Bình sở hữu nhiều lễ hội truyền thống đặc sắc, phản ánh đời sống
              văn hóa tinh thần phong phú của người dân.
            </p>

            {/* List */}
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Lễ hội Đền Trần Thái Bình
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Lễ hội chùa Keo
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Lễ hội đình Lộng Khê
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Lễ hội làng nghề truyền thống
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;