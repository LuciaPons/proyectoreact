export default function Button({ children, variant = "primary", className = "", onClick }) {

  const base = `
    px-5 py-2
    rounded-lg
    font-medium text-sm
    backdrop-blur-md
    border
    transition-all duration-300 ease-in-out
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-1
  `;

  const variants = {
    primary: `
      bg-[#C7815C]/60
      text-[#712B00]
      border-[var(--color-primary)]/40
      shadow-lg

      hover:bg-[var(--color-primary)]/30
      hover:text-white
      hover:-translate-y-1
      hover:shadow-[0_0_20px_rgba(201,78,1,0.4)]
      focus:ring-[var(--color-primary)]
    `,
    secondary: `
      bg-[#4A5C5B]/60
      text-[#01363C]
      border-[var(--color-secondary)]/40

      hover:bg-[var(--color-secondary)]/30
      hover:text-white
      hover:-translate-y-1
      hover:shadow-[0_0_15px_rgba(2,81,89,0.6)]
      focus:ring-[var(--color-secondary)]
    `,
  };

 /*  const base = `
    px-5 py-2
    rounded-xl
    font-medium text-sm
    transition-all duration-300 ease-in-out
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;
  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-[#faf3e6]
      border border-[#722C00]
      shadow-md
      hover:bg-[#903700]/80
      hover:-translate-y-1
      hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]
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
  }; */
  

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}