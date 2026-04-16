export default function SectionHeader({ eyebrow, title, description, light = false }) {
  if (!title) return null;
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-orange-500' : 'text-orange-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl font-extrabold mt-3 ${light ? 'text-white' : 'text-gray-900'}`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl mx-auto text-lg ${light ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
