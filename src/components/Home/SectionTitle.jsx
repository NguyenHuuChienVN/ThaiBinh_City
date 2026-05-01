const SectionTitle = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 mb-6 shadow-sm">
      {icon && (
        <span className="text-green-600 text-base">{icon}</span>
      )}
      <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
        {title}
      </span>
    </div>
  );
};

export default SectionTitle;