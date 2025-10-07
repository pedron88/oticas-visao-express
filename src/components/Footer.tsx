import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold">
              Óticas <span className="text-primary">Nova Visão</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Cuidando da sua visão com qualidade e profissionalismo há mais de 20 anos.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#marcas"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Marcas
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              Institucional
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Óticas Nova Visão. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
