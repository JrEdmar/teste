import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Acesso à informação e campanhas",
    features: [
      "Acesso ao mapa de parceiros",
      "Informações sobre campanhas",
      "Conteúdo educativo",
      "Comunidade AMATE",
    ],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Associado AMATE",
    price: "R$ 29,90",
    period: "/mês",
    description: "Benefícios principais",
    badge: "Mais Popular",
    features: [
      "Cobertura para até 2 pets inclusos",
      "Sem carência para teleorientação",
      "Acesso à rede de parceiros credenciados",
      "Cancelamento a qualquer momento",
      "Pets adicionais por apenas R$ 8,90/mês",
    ],
    cta: "Começar Agora",
    highlighted: true,
  },
  {
    name: "Premium Tutor",
    price: "R$ 49,90",
    period: "/mês",
    description: "Prioridade e economia",
    features: [
      "Tudo do plano Associado",
      "Prioridade em agendamentos",
      "Menor coparticipação",
      "Descontos exclusivos",
      "Suporte prioritário",
    ],
    cta: "Assinar Premium",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plano Único
          </h2>
          <p className="text-lg text-muted-foreground">
            R$ 29,90 <span className="text-sm">/mês</span>
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-primary/5 border-primary/20">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                Cobertura para até 2 pets inclusos
              </Badge>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">Sem carência para teleorientação</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">Acesso à rede de parceiros credenciados</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">Cancelamento a qualquer momento</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">Pets adicionais por apenas R$ 8,90/mês</span>
            </li>
          </ul>

          <Button 
            size="lg" 
            className="w-full text-lg"
            data-testid="button-pricing-subscribe"
            onClick={() => console.log('Começar Agora clicked')}
          >
            Começar Agora
          </Button>

          <p className="text-sm text-muted-foreground text-center mt-4">
            Carência de 15 dias para serviços eletivos. Teleorientação sem carência.
          </p>
        </Card>
      </div>
    </section>
  );
}
