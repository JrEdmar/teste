import Navbar from "@/components/Navbar";
import QRCodeCard from "@/components/QRCodeCard";
import VaccinationTimeline from "@/components/VaccinationTimeline";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function DigitalCard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Carteira Digital
          </h1>
          <p className="text-muted-foreground">
            Apresente este QR Code nas clínicas parceiras
          </p>
        </div>

        <div className="space-y-6">
          <QRCodeCard
            memberId="AMT-2024-001234"
            memberName="Maria Silva"
            plan="Associado AMATE"
            validUntil="30/12/2025"
          />

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Benefícios Disponíveis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Consultas</p>
                  <p className="text-sm text-muted-foreground">1/2 utilizadas este semestre</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Entregas Grátis</p>
                  <p className="text-sm text-muted-foreground">0/2 utilizadas este mês</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Teleorientação</p>
                  <p className="text-sm text-muted-foreground">Ilimitado - Sem carência</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Descontos</p>
                  <p className="text-sm text-muted-foreground">Até 30% em serviços</p>
                </div>
              </div>
            </div>
          </Card>

          <VaccinationTimeline />
        </div>
      </div>
    </div>
  );
}
