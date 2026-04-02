export default function Button({ children, variant = "primary", className = "", onClick }) {

  const base = `
    px-5 py-2
    border border-solid
    rounded-[8px]
    font-medium
    transition-all duration-200
    active:scale-95
  `;
  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-white
      text-[14px]
      border-[var(--color-primary)]
      shadow-lg
      transition-all duration-200
      hover:bg-[var(--color-primary)]/70
      hover:-translate-y-[2px]
      hover:shadow-md
      active:scale-95
    `,
    secondary: `
      bg-[var(--color-secondary)]
      text-white
      text-[14px]
      border-[var(--color-secondary)]
      shadow-lg
      transition-all duration-200
      hover:bg-[var(--color-secondary)]/70
      hover:-translate-y-[2px]
      hover:shadow-md
      active:scale-95
    `,
  };
  

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}