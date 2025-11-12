import { Card } from "@/components/ui/card";
import { Stethoscope, Pill, Syringe, Phone } from "lucide-react";

const benefits = [
  {
    icon: Stethoscope,
    title: "Consultas com Desconto",
    description: "Até 30% de desconto em consultas veterinárias na rede credenciada",
  },
  {
    icon: Pill,
    title: "Entrega Grátis de Ração",
    description: "Até 2 entregas gratuitas por mês em pedidos acima de R$ 79",
  },
  {
    icon: Syringe,
    title: "Exames e Vacinas",
    description: "Preços especiais em exames básicos e campanhas de vacinação",
  },
  {
    icon: Phone,
    title: "Teleorientação Veterinária",
    description: "Atendimento online para tirar dúvidas sem sair de casa",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefícios do Clube AMATE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que seu pet precisa em um único lugar, com preços justos e transparentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate transition-all"
              data-testid={`card-benefit-${index}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
