import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            Visite nossa <span className="text-primary">loja</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  Endereço
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rua das Flores, 123 - Centro
                  <br />
                  São Paulo - SP, 01234-567
                </p>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 p-0 h-auto mt-2"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/otica",
                      "_blank"
                    )
                  }
                >
                  Ver no mapa →
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  Telefone
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  (11) 99999-9999
                  <br />
                  (11) 3333-3333
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Segunda a Sexta: 9h às 19h
                  <br />
                  Sábado: 9h às 14h
                  <br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Gostaria de falar com um atendente.",
                  "_blank"
                )
              }
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-soft mt-4"
            >
              Falar com um atendente
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-medium h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Óticas Nova Visão"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
