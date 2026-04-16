export default function IconBox({ children, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
  };

  return (
    <div className={`${sizes[size]} bg-orange-600/10 rounded-xl flex items-center justify-center text-orange-500 shrink-0 transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}
