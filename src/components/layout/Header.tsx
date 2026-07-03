import { useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";

const mobileNavItems = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/portfolio" },
  { label: "Servicios", path: "/services" },
  { label: "Nosotros", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasScrolled = useScrollPosition();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${hasScrolled
        ? "border-muted/80 bg-background/90 backdrop-blur-xl"
        : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-500 ${hasScrolled ? "h-20" : "h-24"
          }`}
      >
       <Logo size={hasScrolled ? "sm" : "md"} />

        <Navigation />

        <div className="hidden md:block">
          <Button variant="editorial">
            Iniciar consulta
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-display text-xs uppercase tracking-[0.22em] text-primary"
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden border-t border-muted bg-background">
          <Container className="py-8">
            <nav className="flex flex-col gap-6">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.28em] text-text-secondary hover:text-primary"
                >
                  {item.label}
                </NavLink>
              ))}

              <Button size="sm" className="mt-4 w-full">
                Iniciar consulta
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Header;