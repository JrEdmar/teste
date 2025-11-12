import { Card } from "@/components/ui/card";
import { Calendar, Syringe, Package, Heart } from "lucide-react";

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  description?: string;
}

function StatCard({ icon: Icon, label, value, description }: StatCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      icon: Calendar,
      label: "Próxima Consulta",
      value: "15 Nov",
      description: "14:30 - Clínica Centro",
    },
    {
      icon: Syringe,
      label: "Vacinas Pendentes",
      value: "1",
      description: "Thor - Antirrábica",
    },
    {
      icon: Package,
      label: "Benefícios Usados",
      value: "1/2",
      description: "Consultas este semestre",
    },
    {
      icon: Heart,
      label: "Pedidos em Andamento",
      value: "0",
      description: "Nenhum pedido ativo",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
