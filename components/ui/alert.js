const VARIANTS = {
  success: {
    wrapper: 'bg-green-50 border-green-200 text-green-700',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    role: 'status',
  },
  error: {
    wrapper: 'bg-red-50 border-red-200 text-red-600',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    role: 'alert',
  },
};

export default function Alert({ variant, children }) {
  if (!VARIANTS[variant]) return null;
  const { wrapper, icon, role } = VARIANTS[variant];

  return (
    <div className={`flex items-center gap-2 border text-sm px-4 py-3 rounded-xl ${wrapper}`} role={role}>
      {icon}
      {children}
    </div>
  );
}
