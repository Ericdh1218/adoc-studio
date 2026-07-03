import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/portfolio" },
  { label: "Servicios", path: "/services" },
  { label: "Nosotros", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
          relative
          font-display
          text-xs
          uppercase
          tracking-[0.22em]
          transition-colors
          duration-300

          after:absolute
          after:left-0
          after:-bottom-2
          after:h-[1px]
          after:bg-primary
          after:transition-all
          after:duration-500

      ${isActive
              ? "text-primary after:w-full"
              : "text-text-secondary hover:text-primary after:w-0 hover:after:w-full"
            }
    `
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;