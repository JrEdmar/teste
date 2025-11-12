import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_image_pet_owner_7b8e83bb.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Cuidado completo para seu pet por{" "}
          <span className="text-primary-foreground">R$ 29,90/mês</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Acesso a uma rede de veterinários, pet shops e serviços com valores especiais. 
          Transparência, confiança e economia para você e seu pet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8"
            data-testid="button-hero-enter"
            onClick={() => console.log('Entrar clicked')}
          >
            Entrar
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-background/30"
            data-testid="button-hero-know-more"
            onClick={() => console.log('Saiba Mais clicked')}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}
