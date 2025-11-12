import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface PetCardProps {
  name: string;
  species: string;
  breed: string;
  age: string;
  imageUrl: string;
  microchipId?: string;
  vaccinationStatus: "updated" | "pending" | "overdue";
}

export default function PetCard({
  name,
  species,
  breed,
  age,
  imageUrl,
  microchipId,
  vaccinationStatus,
}: PetCardProps) {
  const statusConfig = {
    updated: { 
      label: "Vacinas em dia", 
      icon: CheckCircle2, 
      variant: "default" as const,
      color: "text-primary"
    },
    pending: { 
      label: "Vacina próxima", 
      icon: AlertCircle, 
      variant: "secondary" as const,
      color: "text-muted-foreground"
    },
    overdue: { 
      label: "Vacinas atrasadas", 
      icon: AlertCircle, 
      variant: "destructive" as const,
      color: "text-destructive"
    },
  };

  const status = statusConfig[vaccinationStatus];
  const StatusIcon = status.icon;

  return (
    <Card 
      className="p-4 hover-elevate transition-all"
      data-testid={`card-pet-${name.toLowerCase()}`}
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {species} • {breed} • {age}
          </p>
          
          <div className="flex items-center gap-2 mb-2">
            <StatusIcon className={`w-4 h-4 ${status.color}`} />
            <span className="text-xs text-muted-foreground">
              {status.label}
            </span>
          </div>

          {microchipId && (
            <p className="text-xs text-muted-foreground">
              Microchip: {microchipId}
            </p>
          )}
        </div>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        className="w-full mt-3"
        data-testid={`button-view-record-${name.toLowerCase()}`}
        onClick={() => console.log(`Ver Prontuário de ${name}`)}
      >
        Ver Prontuário
      </Button>
    </Card>
  );
}
