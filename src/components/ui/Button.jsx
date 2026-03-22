export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 20px",
        borderRadius: "6px",
        border: "1px solid var(--color-primary)",
        background: "transparent",
        color: "var(--color-primary)",
        cursor: "pointer",
        fontWeight: "500",
        transition: "all 0.2s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "var(--color-primary)")}
      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {children}
    </button>
  );
}