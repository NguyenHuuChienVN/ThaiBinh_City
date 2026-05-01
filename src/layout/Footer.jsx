import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { LuPhone  } from "react-icons/lu";
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + mô tả */}
          <div>
            <img  src="/bong-lua.png" alt="Logo" className="h-12 w-auto mb-4 cursor-pointer" onClick={() => {window.location.href = "/"}} />
            <p className="text-sm text-gray-200 mb-4">
              Thái Bình – miền quê lưu giữ giá trị truyền thống,
              phát triển du lịch bền vững.
            </p>

            <div className="flex gap-3">
              <FaFacebookF />
              <FaYoutube />
              <FaTiktok />
            </div>
          </div>

          {/* Link nhanh */}
          <div>
            <h3 className="font-semibold mb-3">LIÊN KẾT NHANH</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Địa điểm</li>
              <li>Ẩm thực</li>
            </ul>
          </div>

          {/* Thông tin */}
          <div>
            <h3 className="font-semibold mb-3">THÔNG TIN</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Bản đồ du lịch</li>
              <li>Kinh nghiệm</li>
              <li>Lễ hội</li>
              <li>Tin tức</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-semibold mb-3">LIÊN HỆ</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <LuMapPin /> Chi Lăng, Hưng Hà, Thái Bình
              </li>
              <li className="flex items-center gap-2">
                <LuPhone /> 0869688404
              </li>
              <li className="flex items-center gap-2">
                <LuMail />nguyenhuuchien172005@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm text-gray-300">
          © 2026 ThaiBinh Tourism. All rights reserved.
        </div>

      </div>
    </footer>
  );
}