type TextProps = {
  children: React.ReactNode;
  className?: string;

  size?: "sm" | "md" | "lg";

  color?: "primary" | "secondary";

  as?: "p" | "span";
};

function Text({children, className = "", size = "md", color = "primary", as = "p"}: TextProps) {
  
    const Tag = as;
    const styles = {
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
        },
        color: {
            primary: "text-text-primary",
            secondary: "text-text-secondary",
        }
    };
    return (
    <Tag className={`${styles.size[size]} ${styles.color[color]} ${className}`}>
        {children}
    </Tag>
    );
}
export default Text;