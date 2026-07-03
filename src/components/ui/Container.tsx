type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-5 md:px-20 ${className}`}>
      {children}
    </div>
  );
}

export default Container;