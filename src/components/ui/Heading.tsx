type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

function Heading({ children, className = "", as = "h2" }: HeadingProps) {
  const Tag = as;

  const styles = {
    h1: "font-display text-5xl md:text-7xl leading-[1.05] tracking-tight",
    h2: "font-display text-4xl md:text-6xl leading-[1.08] tracking-tight",
    h3: "font-display text-2xl md:text-3xl leading-tight",
  };

  return <Tag className={`${styles[as]} ${className}`}>{children}</Tag>;
}

export default Heading;