import Navbar from "@/components/Navbar";
import SearchFilters from "@/components/SearchFilters";
import ClinicCard from "@/components/ClinicCard";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

const mockClinics = [
  {
    name: "Clínica Centro Veterinário",
    rating: 4.8,
    reviewCount: 245,
    specialty: "Clínica Geral",
    distance: "2.3 km",
    verified: true,
    nextAvailable: "hoje",
  },
  {
    name: "Pet Care Hospital",
    rating: 4.6,
    reviewCount: 189,
    specialty: "Cirurgia",
    distance: "3.5 km",
    verified: true,
    nextAvailable: "amanhã",
  },
  {
    name: "Veterinária Nova Esperança",
    rating: 4.9,
    reviewCount: 312,
    specialty: "Dermatologia",
    distance: "4.2 km",
    verified: true,
  },
  {
    name: "Clínica Animal Care",
    rating: 4.5,
    reviewCount: 156,
    specialty: "Odontologia",
    distance: "5.1 km",
    verified: false,
  },
  {
    name: "Hospital Veterinário 24h",
    rating: 4.7,
    reviewCount: 278,
    specialty: "Emergência",
    distance: "6.8 km",
    verified: true,
    nextAvailable: "hoje",
  },
  {
    name: "Centro de Diagnóstico Pet",
    rating: 4.4,
    reviewCount: 134,
    specialty: "Exames",
    distance: "7.5 km",
    verified: true,
  },
];

export default function SearchClinics() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Encontre Clínicas
              </h1>
              <p className="text-muted-foreground">
                {mockClinics.length} clínicas encontradas na sua região
              </p>
            </div>
            <Button 
              variant="outline"
              data-testid="button-map-view"
              onClick={() => console.log('Map view clicked')}
            >
              <Map className="w-4 h-4 mr-2" />
              Ver Mapa
            </Button>
          </div>
          
          <SearchFilters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClinics.map((clinic, index) => (
            <ClinicCard key={index} {...clinic} />
          ))}
        </div>
      </div>
    </div>
  );
}
