import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Syringe, AlertCircle, CheckCircle2 } from "lucide-react";

interface VaccinationRecord {
  id: string;
  vaccineName: string;
  dateAdministered: string;
  nextDue?: string;
  status: "completed" | "upcoming" | "overdue";
  clinicName: string;
  lotNumber?: string;
}

const mockVaccinations: VaccinationRecord[] = [
  {
    id: "1",
    vaccineName: "V10 - Múltipla",
    dateAdministered: "15/05/2024",
    nextDue: "15/05/2025",
    status: "completed",
    clinicName: "Clínica Centro",
    lotNumber: "LOT123456",
  },
  {
    id: "2",
    vaccineName: "Antirrábica",
    dateAdministered: "20/03/2024",
    nextDue: "15/11/2024",
    status: "upcoming",
    clinicName: "Clínica Centro",
    lotNumber: "LOT789012",
  },
];

export default function VaccinationTimeline() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Carteira de Vacinação
        </h3>
        <Button 
          variant="outline" 
          size="sm"
          data-testid="button-add-vaccination"
          onClick={() => console.log('Add vaccination')}
        >
          <Syringe className="w-4 h-4 mr-2" />
          Registrar Vacina
        </Button>
      </div>

      <div className="space-y-4">
        {mockVaccinations.map((vaccination, index) => {
          const isLast = index === mockVaccinations.length - 1;
          const statusConfig = {
            completed: { icon: CheckCircle2, color: "text-primary", bgColor: "bg-primary/10" },
            upcoming: { icon: AlertCircle, color: "text-muted-foreground", bgColor: "bg-muted" },
            overdue: { icon: AlertCircle, color: "text-destructive", bgColor: "bg-destructive/10" },
          };
          const config = statusConfig[vaccination.status];
          const StatusIcon = config.icon;

          return (
            <div key={vaccination.id} className="relative">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${config.bgColor} flex items-center justify-center`}>
                    <StatusIcon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">
                        {vaccination.vaccineName}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {vaccination.clinicName}
                      </p>
                    </div>
                    {vaccination.status === "upcoming" && (
                      <Badge variant="secondary" className="text-xs">
                        Próxima
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Aplicada em: <span className="text-foreground">{vaccination.dateAdministered}</span>
                    </p>
                    {vaccination.nextDue && (
                      <p className="text-muted-foreground">
                        Próxima dose: <span className="text-foreground">{vaccination.nextDue}</span>
                      </p>
                    )}
                    {vaccination.lotNumber && (
                      <p className="text-xs text-muted-foreground">
                        Lote: {vaccination.lotNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
