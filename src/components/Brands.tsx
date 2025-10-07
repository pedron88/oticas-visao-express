import raybanLogo from "@/assets/brands/rayban.png";
import oakleyLogo from "@/assets/brands/oakley.png";
import arnetteLogo from "@/assets/brands/arnette.png";
import vogueLogo from "@/assets/brands/vogue.png";
import pradaLogo from "@/assets/brands/prada.png";
import dolceGabbanaLogo from "@/assets/brands/dolce-gabbana.png";
import armaniLogo from "@/assets/brands/armani.png";
import versaceLogo from "@/assets/brands/versace.png";
import chilliBeansLogo from "@/assets/brands/chilli-beans.png";
import mormaiiLogo from "@/assets/brands/mormaii.png";
import hbLogo from "@/assets/brands/hb.png";
import carreraLogo from "@/assets/brands/carrera.png";

const brands = [
  { name: "Ray-Ban", logo: raybanLogo },
  { name: "Oakley", logo: oakleyLogo },
  { name: "Arnette", logo: arnetteLogo },
  { name: "Vogue", logo: vogueLogo },
  { name: "Prada", logo: pradaLogo },
  { name: "Dolce & Gabbana", logo: dolceGabbanaLogo },
  { name: "Giorgio Armani", logo: armaniLogo },
  { name: "Versace", logo: versaceLogo },
  { name: "Chilli Beans", logo: chilliBeansLogo },
  { name: "Mormaii", logo: mormaiiLogo },
  { name: "HB", logo: hbLogo },
  { name: "Carrera", logo: carreraLogo },
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
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-auto max-w-[120px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
