import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import clinicImage from "@assets/generated_images/Clinic_thumbnail_photo_fb35bdf9.png";

interface ClinicCardProps {
  name: string;
  rating: number;
  reviewCount: number;
  specialty: string;
  distance: string;
  verified?: boolean;
  imageUrl?: string;
  nextAvailable?: string;
}

export default function ClinicCard({
  name,
  rating,
  reviewCount,
  specialty,
  distance,
  verified = false,
  imageUrl = clinicImage,
  nextAvailable,
}: ClinicCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate cursor-pointer transition-all"
      data-testid={`card-clinic-${name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={() => console.log(`Clinic ${name} clicked`)}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            {name}
            {verified && (
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
            )}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviewCount})</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {specialty}
          </Badge>
          {nextAvailable && (
            <Badge variant="outline" className="text-xs">
              Disponível {nextAvailable}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{distance}</span>
        </div>
      </div>
    </Card>
  );
}
