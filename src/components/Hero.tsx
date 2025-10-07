import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-person.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um exame de vista.",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground leading-tight">
            Veja melhor com quem{" "}
            <span className="text-primary">entende de visão</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Exame gratuito, laboratório próprio e óculos prontos em até 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-medium"
            >
              Agendar meu exame agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("produtos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Ver produtos
            </Button>
          </div>
        </div>
        <div className="relative animate-slide-up">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-3xl" />
          <img
            src={heroImage}
            alt="Pessoa feliz usando óculos modernos"
            className="relative rounded-3xl shadow-medium w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
