type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export default Section;