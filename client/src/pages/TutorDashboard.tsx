import Navbar from "@/components/Navbar";
import DashboardStats from "@/components/DashboardStats";
import PetCard from "@/components/PetCard";
import AppointmentCard from "@/components/AppointmentCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Package, QrCode, Plus } from "lucide-react";
import petDog from "@assets/generated_images/Pet_avatar_golden_retriever_9770c647.png";
import petCat from "@assets/generated_images/Pet_avatar_gray_cat_e1e75831.png";

export default function TutorDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Olá, Maria!
          </h1>
          <p className="text-muted-foreground">
            Bem-vinda ao seu painel de controle
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Meus Pets
                </h2>
                <Button 
                  size="sm"
                  data-testid="button-add-pet"
                  onClick={() => console.log('Add pet clicked')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Pet
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PetCard
                  name="Thor"
                  species="Cão"
                  breed="Golden Retriever"
                  age="3 anos"
                  imageUrl={petDog}
                  microchipId="982000123456789"
                  vaccinationStatus="updated"
                />
                <PetCard
                  name="Luna"
                  species="Gata"
                  breed="SRD"
                  age="2 anos"
                  imageUrl={petCat}
                  microchipId="982000987654321"
                  vaccinationStatus="pending"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Próximos Agendamentos
              </h2>
              <div className="space-y-4">
                <AppointmentCard
                  date="15 Nov"
                  time="14:30"
                  clinicName="Clínica Centro Veterinário"
                  location="Rua das Flores, 123 - Centro"
                  serviceType="Consulta"
                  status="confirmed"
                  petName="Thor"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Ações Rápidas
              </h3>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  data-testid="button-schedule-appointment"
                  onClick={() => console.log('Schedule clicked')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  data-testid="button-order-supplies"
                  onClick={() => console.log('Order supplies clicked')}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Pedir Ração
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  data-testid="button-view-card"
                  onClick={() => console.log('View card clicked')}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Ver Carteira Digital
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Seu Plano
              </h3>
              <p className="text-2xl font-bold text-primary mb-1">
                Associado AMATE
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Válido até 30/12/2025
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                data-testid="button-manage-plan"
                onClick={() => console.log('Manage plan clicked')}
              >
                Gerenciar Plano
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
