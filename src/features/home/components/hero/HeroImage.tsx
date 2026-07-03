function HeroImage() {
  return (
    <div className="relative min-h-[560px] overflow-hidden bg-muted lg:min-h-[680px]">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
        alt="Residencia moderna con arquitectura minimalista"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-primary/10" />

      <div className="absolute bottom-8 right-8 font-display text-[10px] tracking-[0.35em] uppercase text-white">
        Design · Intention · Precision
      </div>
    </div>
  );
}

export default HeroImage;