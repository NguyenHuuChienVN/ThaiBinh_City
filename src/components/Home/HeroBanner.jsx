import bannerImg from "../../assets/banner.png";

const HeroBanner = () => {
    return (    
        <main id="trang-chu" className="pt-24">
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      
       {/* Background */}
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${bannerImg})` }}
         ></div>
       {/* Overlay */}
       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
       {/* Content */}
       <div className="relative z-10 h-full flex items-center justify-center">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-white">        
           {/* Text nhỏ */}
           <p className="text-yellow-400 italic 
                          text-sm sm:text-lg md:text-xl 
                          mb-2">
             Chào mừng bạn đến với
           </p>
           {/* Title */}
           <h1 className=" 
                          text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                          mb-3 md:mb-4">
             𝐓𝐇Á𝐈 𝐁Ì𝐍𝐇
           </h1>
           {/* Description */}
           <p className="max-w-xl 
                         text-sm sm:text-base md:text-lg 
                         text-gray-200 mb-5 md:mb-6">
             Nằm vùng đồng bằng sông Hồng, Thái Bình được mệnh danh là “quê hương của lúa”.
           </p>
           {/* Buttons */}
           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">          
             <button className="bg-green-600 
                                px-4 py-2 sm:px-6 sm:py-3 
                                text-sm sm:text-base
                                rounded-full hover:bg-green-700 transition">
               KHÁM PHÁ NGAY →
             </button>
             <button className="border border-white 
                                px-4 py-2 sm:px-6 sm:py-3 
                                text-sm sm:text-base
                                rounded-full hover:bg-white hover:text-black transition">
               TÌM HIỂU THÊM
             </button>
           </div>
           </div>
         </div>
       </div>
    </main>
    );
}
export default HeroBanner;