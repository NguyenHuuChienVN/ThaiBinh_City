export default function PlaceCard({ place }) {
  return (
    <div className="flex-shrink-0 w-[220px] cursor-pointer">
      <div className="rounded-2xl overflow-hidden group">
        <img
          src={place.img}
          alt={place.title}
          className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 px-1 flex flex-col items-center">
        <h3 className="font-semibold text-[14px] text-gray-900 line-clamp-1">
          {place.title}
        </h3>
        <p className="text-[12px] text-gray-500 mt-1 line-clamp-2 leading-snug">
          {place.desc}
        </p>
      </div>
    </div>
  );
}