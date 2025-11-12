import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Filter, X } from "lucide-react";
import { useState } from "react";

const categories = [
  "Clínica Geral",
  "Cirurgia",
  "Odontologia",
  "Dermatologia",
  "Vacinação",
  "Exames",
];

const distances = ["1 km", "3 km", "5 km", "10 km", "20 km"];

export default function SearchFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDistance, setSelectedDistance] = useState("5 km");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar clínicas, serviços..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-testid="input-search"
          />
        </div>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setShowFilters(!showFilters)}
          data-testid="button-toggle-filters"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {showFilters && (
        <Card className="p-4 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground">Distância</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {distances.map((distance) => (
                <Badge
                  key={distance}
                  variant={selectedDistance === distance ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedDistance(distance)}
                  data-testid={`badge-distance-${distance}`}
                >
                  {distance}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground">Especialidade</h3>
              {selectedCategory && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  data-testid="button-clear-category"
                >
                  <X className="w-4 h-4 mr-1" />
                  Limpar
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Button 
              className="w-full"
              data-testid="button-apply-filters"
              onClick={() => console.log('Aplicar filtros', { searchTerm, selectedCategory, selectedDistance })}
            >
              Ver Resultados
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
