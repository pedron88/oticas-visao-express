import { Clock, Wrench, Users, Zap, Award, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Laboratório Próprio",
    description: "Óculos prontos em até 24 horas com qualidade garantida",
  },
  {
    icon: Wrench,
    title: "Manutenção Gratuita",
    description: "Ajustes e limpeza sem custo adicional quando precisar",
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Equipe treinada para encontrar o óculos perfeito para você",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Tenha seu óculos pronto em tempo recorde sem perder qualidade",
  },
  {
    icon: Award,
    title: "Garantia Total",
    description: "Satisfação garantida ou seu dinheiro de volta",
  },
  {
    icon: Shield,
    title: "Exame Gratuito",
    description: "Avaliação completa da sua visão sem custo nenhum",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            Por que escolher a <span className="text-primary">Nova Visão</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tradição e modernidade ao seu serviço
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
