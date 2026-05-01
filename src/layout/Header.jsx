import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Trang chủ");

  const menu = [
  { name: "Trang chủ", id: "trang-chu" },
  { name: "Giới thiệu", id: "gioi-thieu" },
  { name: "Địa điểm", id: "dia-diem" },
  { name: "Ẩm thực", id: "am-thuc" },
  { name: "Văn hóa", id: "van-hoa" },
  { name: "Liên hệ", id: "lien-he" },
];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <img 
          src="/bong-lua.png" 
          alt="Logo" 
          className="h-16 w-auto cursor-pointer hover:opacity-80 transition"
          onClick={() => window.location.href = "/"}
        />
        

        {/* Desktop Menu */}  
        <nav className="hidden md:flex gap-8 items-center font-bold text-gray-700">
          {menu.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={() => setActive(item.name)}
              className={`relative transition-colors duration-200
              ${active === item.name ? "text-green-600 after:w-full" : "text-gray-700"}
              after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
              after:h-[2px] after:bg-green-600 after:w-0 after:transition-all
              ${active === item.name ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {item.name}
            </a>
          ))}

          <button onClick={() => window.open("https://vnexpress.net/chu-de/thai-binh-2086", "_blank")} className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition group">
            <span className="leading-none">Khám Phá Ngay</span>
            <ArrowRight 
              size={14} 
              className="flex-shrink-0 translate-y-[1px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {menu.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-bold"
              >
                {item.name}
              </a>
            ))}

            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition group">
            <span className="leading-none">Khám Phá Ngay</span>
            <ArrowRight 
              size={14} 
              className="flex-shrink-0 translate-y-[1px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
          </div>
        </div>
      )}
    </header>
  );
}
