import { Button } from "@/components/ui/button";
import glasses1 from "@/assets/glasses-1.jpg";
import glasses2 from "@/assets/glasses-2.jpg";
import glasses3 from "@/assets/glasses-3.jpg";
import glasses4 from "@/assets/glasses-4.jpg";
import glasses5 from "@/assets/glasses-5.jpg";
import glasses6 from "@/assets/glasses-6.jpg";

const products = [
  { image: glasses1, name: "Modelo Clássico" },
  { image: glasses2, name: "Estilo Redondo" },
  { image: glasses3, name: "Aviador Premium" },
  { image: glasses4, name: "Design Quadrado" },
  { image: glasses5, name: "Cat-Eye Fashion" },
  { image: glasses6, name: "Wayfarer Clássico" },
];

const ProductGallery = () => {
  return (
    <section id="produtos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            Nossos <span className="text-primary">Modelos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estilo e qualidade em cada armação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-muted/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-foreground">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/5511999999999?text=Olá! Gostaria de conhecer todos os modelos disponíveis.",
                "_blank"
              )
            }
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-soft"
          >
            Ver todos os modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
