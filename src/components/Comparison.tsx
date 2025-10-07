import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Entrega em até 24 horas",
    us: true,
    others: false,
  },
  {
    feature: "Manutenção gratuita",
    us: true,
    others: false,
  },
  {
    feature: "Atendimento personalizado",
    us: true,
    others: false,
  },
  {
    feature: "Laboratório próprio",
    us: true,
    others: false,
  },
  {
    feature: "Exame de vista gratuito",
    us: true,
    others: false,
  },
  {
    feature: "Garantia total",
    us: true,
    others: false,
  },
];

const Comparison = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
            Compare e veja a <span className="text-primary">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Por que somos a melhor escolha para sua visão
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-medium overflow-hidden">
          <div className="grid grid-cols-3 bg-primary text-primary-foreground p-6">
            <div></div>
            <div className="text-center font-poppins font-bold text-lg">
              Nova Visão
            </div>
            <div className="text-center font-poppins font-bold text-lg">
              Outras Óticas
            </div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-6 items-center ${
                index % 2 === 0 ? "bg-background" : "bg-muted/20"
              }`}
            >
              <div className="font-medium text-foreground pr-4">
                {item.feature}
              </div>
              <div className="flex justify-center">
                {item.us ? (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {item.others ? (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
