import { Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    image: client1,
    text: "Atendimento excepcional! Meu óculos ficou pronto em menos de 24 horas e a qualidade é impecável. Recomendo muito!",
  },
  {
    name: "João Santos",
    image: client2,
    text: "Melhor ótica da região! O exame foi detalhado e encontrei a armação perfeita. A equipe é super atenciosa.",
  },
  {
    name: "Carlos Oliveira",
    image: client3,
    text: "Anos usando óculos e nunca tive um atendimento tão bom. O laboratório próprio faz toda a diferença na qualidade.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            O que dizem nossos <span className="text-primary">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Satisfação garantida em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
