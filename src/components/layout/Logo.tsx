import logo from "../../assets/images/LogoAd.png";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-14",
  md: "h-20",
  lg: "h-26",
};

function Logo({ size = "md" }: LogoProps) {
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-1 leading-none"
    >
      <img
        src={logo}
        alt="ADOC Studio"
        className={`
          ${sizes[size]}
          w-auto
          object-contain
          transition-all
          duration-500
        `}
      />
 <div className="flex flex-col leading-none"></div>
      <div className="flex flex-col">
        <span className="font-display text-xl tracking-[0.34em] uppercase text-primary">
          ADOC
        </span>

        <span className="mt-1 font-display text-[9px] tracking-[0.38em] uppercase text-text-secondary transition-colors duration-300 group-hover:text-secondary">
          Studio · Arquitectura
        </span>
      </div>
    </a>
  );
}

export default Logo;