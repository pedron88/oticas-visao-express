import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-poppins font-bold text-foreground">
            Óticas <span className="text-primary">Nova Visão</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("produtos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection("marcas")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Marcas
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        <Button
          onClick={() =>
            window.open(
              "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um exame de vista.",
              "_blank"
            )
          }
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft"
        >
          Agendar Exame
        </Button>
      </div>
    </header>
  );
};

export default Header;
