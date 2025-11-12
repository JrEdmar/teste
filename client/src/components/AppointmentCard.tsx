import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

interface AppointmentCardProps {
  date: string;
  time: string;
  clinicName: string;
  location: string;
  serviceType: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  petName: string;
}

const statusConfig = {
  confirmed: { label: "Confirmado", variant: "default" as const },
  pending: { label: "Pendente", variant: "secondary" as const },
  completed: { label: "Concluído", variant: "outline" as const },
  cancelled: { label: "Cancelado", variant: "destructive" as const },
};

export default function AppointmentCard({
  date,
  time,
  clinicName,
  location,
  serviceType,
  status,
  petName,
}: AppointmentCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <Card 
      className="p-6 hover-elevate transition-all"
      data-testid={`card-appointment-${date}-${time}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-foreground">{date}</h3>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
            <span>•</span>
            <span>{petName}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">{clinicName}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {serviceType}
        </Badge>
      </div>

      {status === "confirmed" && (
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            data-testid="button-cancel-appointment"
            onClick={() => console.log('Cancelar clicked')}
          >
            Cancelar
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            data-testid="button-reschedule-appointment"
            onClick={() => console.log('Reagendar clicked')}
          >
            Reagendar
          </Button>
          <Button 
            size="sm"
            data-testid="button-checkin-appointment"
            onClick={() => console.log('Check-in clicked')}
          >
            Check-in
          </Button>
        </div>
      )}
    </Card>
  );
}
