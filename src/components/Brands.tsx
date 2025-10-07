const brands = [
  "Ray-Ban",
  "Oakley",
  "Arnette",
  "Vogue",
  "Prada",
  "Dolce & Gabbana",
  "Giorgio Armani",
  "Versace",
  "Chilli Beans",
  "Mormaii",
  "HB",
  "Carrera",
];

const Brands = () => {
  return (
    <section id="marcas" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            Marcas <span className="text-primary">Parceiras</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            As melhores marcas do mercado à sua disposição
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-xl font-poppins font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
