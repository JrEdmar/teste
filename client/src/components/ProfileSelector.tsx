import { Card } from "@/components/ui/card";
import { User, Building2, Stethoscope, Store } from "lucide-react";

const profiles = [
  {
    id: "tutor",
    icon: User,
    title: "Tutor",
    description: "Pessoa física - Cuidador de pets",
  },
  {
    id: "clinica",
    icon: Building2,
    title: "Clínica",
    description: "Pessoa jurídica - Atendimento veterinário",
  },
  {
    id: "veterinario",
    icon: Stethoscope,
    title: "Veterinário",
    description: "Pessoa física - Profissional vinculado",
  },
  {
    id: "loja",
    icon: Store,
    title: "Loja",
    description: "Pet shop / Farmácia parceira",
  },
];

export default function ProfileSelector() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Selecione seu perfil
        </h2>
        <p className="text-muted-foreground">
          Escolha como você deseja acessar a plataforma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <Card
              key={profile.id}
              className="p-6 hover-elevate cursor-pointer transition-all"
              data-testid={`card-profile-${profile.id}`}
              onClick={() => console.log(`Selected profile: ${profile.id}`)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
