import thaibinhMap from "../../assets/thanhpho.jpg";

const IntroSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white" id="gioi-thieu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            GIỚI THIỆU CHUNG
          </span>
          <span className="text-green-500 text-base sm:text-lg">🌿</span>
        </div>

        {/* 2 cột */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Thái Bình – Miền quê lúa
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
              Nằm vùng đồng bằng sông Hồng, Thái Bình được mệnh danh là “quê hương của lúa”.
              Mảnh đất này không chỉ nổi tiếng với nông nghiệp mà còn là nơi lưu giữ nhiều giá trị văn hóa, lịch sử đặc sắc.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <span className="text-2xl sm:text-3xl">📍</span>
                <p className="font-bold text-sm sm:text-lg mt-1">1.584 km²</p>
                <p className="text-gray-500 text-xs sm:text-sm">Diện tích</p>
              </div>

              <div className="text-center">
                <span className="text-2xl sm:text-3xl">👥</span>
                <p className="font-bold text-sm sm:text-lg mt-1">1,9 triệu+</p>
                <p className="text-gray-500 text-xs sm:text-sm">Dân số</p>
              </div>

              <div className="text-center">
                <span className="text-2xl sm:text-3xl">🌿</span>
                <p className="font-bold text-sm sm:text-lg mt-1">5 tấn/ha</p>
                <p className="text-gray-500 text-xs sm:text-sm">Năng suất</p>
              </div>

              <div className="text-center">
                <span className="text-2xl sm:text-3xl">🏛️</span>
                <p className="font-bold text-sm sm:text-lg mt-1">110+</p>
                <p className="text-gray-500 text-xs sm:text-sm">Di tích</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src={thaibinhMap}
                alt="Thái Bình"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;