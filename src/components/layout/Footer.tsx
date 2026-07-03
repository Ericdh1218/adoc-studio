import Container from "../ui/Container";
import Text from "../ui/Text";

function Footer() {
  return (
    <footer className="border-t border-muted bg-background py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.34em] uppercase text-primary">
              ADOC
            </p>
            <p className="mt-1 font-display text-[9px] tracking-[0.38em] uppercase text-text-secondary">
              Studio · Architecture
            </p>

            <Text color="secondary" className="mt-6 max-w-md">
              Cada proyecto nace de una idea. Nosotros la convertimos en
              arquitectura.
            </Text>
          </div>

          <div className="flex flex-col gap-3 font-display text-xs uppercase tracking-[0.25em] text-text-secondary md:text-right">
            <a href="mailto:contacto@adocstudio.com" className="hover:text-secondary">
              contacto@adocstudio.com
            </a>
            <a href="tel:+522211234567" className="hover:text-secondary">
              +52 221 123 4567
            </a>
            <span>© 2026 ADOC Studio</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;