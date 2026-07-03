/**
 * Component: Button
 *
 * Purpose:
 * Reusable button used across the application.
 *
 * Responsibilities:
 * - Display button variants.
 * - Handle click actions.
 * - Support loading and disabled states.
 */

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost" | "editorial";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) {
  const styles = {
    base: "inline-flex items-center justify-center overflow-visible font-display uppercase tracking-[0.18em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",

    variant: {
      primary: "bg-primary text-white hover:bg-secondary",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-primary hover:text-secondary",
      editorial:
  "relative bg-transparent text-primary px-0 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-primary after:transition-all after:duration-500 hover:text-secondary hover:after:bg-secondary hover:after:w-[115%]",
    },

    size: {
      sm: "px-5 py-3 text-xs",
      md: "px-8 py-4 text-sm",
      lg: "px-10 py-5 text-sm",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${styles.base} ${styles.variant[variant]} ${styles.size[size]} ${className}`}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}

export default Button;