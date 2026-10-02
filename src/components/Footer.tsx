import { useState } from "react";
import { Facebook, Instagram, MessageCircle, ChevronDown, Tag } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

const brandDescription = `Na Nova Visão, acreditamos que cuidar da visão também é cuidar do seu conforto, bem-estar e estilo. Somos uma ótica em São Luís, oferecendo óculos de grau, óculos de sol, armações e lentes para diferentes necessidades e preferências.

Trabalhamos para proporcionar uma experiência de compra simples e personalizada, ajudando cada cliente a encontrar produtos que combinem qualidade, conforto e estilo. Nossa equipe está preparada para orientar você na escolha de armações, lentes e óculos que atendam às suas necessidades.

Se você está procurando uma ótica em São Luís, a Nova Visão está pronta para receber você. Conheça nossa loja e encontre o modelo ideal para cuidar da sua visão com mais conforto e personalidade.`;

const keywords = [
  "Nova Visão",
  "ótica em São Luís",
  "ótica São Luís",
  "óculos de grau",
  "óculos de sol",
  "armações de óculos",
  "lentes de grau",
  "lentes de contato",
  "saúde visual",
  "ótica no Maranhão",
];

const Footer = () => {
  const [showKeywords, setShowKeywords] = useState(false);

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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setShowKeywords((prev) => !prev)}
              aria-expanded={showKeywords}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary px-5 py-2.5 font-poppins font-semibold text-sm transition-colors"
            >
              <Tag className="w-4 h-4" />
              Palavras-chave
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showKeywords ? "rotate-180" : ""
                }`}
              />
            </button>

            {showKeywords && (
              <div className="w-full max-w-4xl rounded-2xl bg-white/5 border border-white/10 p-8 space-y-6 animate-fade-in">
                <p className="text-white/70 leading-relaxed whitespace-pre-line text-sm">
                  {brandDescription}
                </p>
                <div>
                  <h5 className="font-poppins font-semibold text-sm text-white/90 mb-3">
                    Buscamos por:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60">
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
