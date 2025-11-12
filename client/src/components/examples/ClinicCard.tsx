import ClinicCard from '../ClinicCard';

export default function ClinicCardExample() {
  return (
    <div className="max-w-sm">
      <ClinicCard
        name="Clínica Centro Veterinário"
        rating={4.8}
        reviewCount={245}
        specialty="Clínica Geral"
        distance="2.3 km"
        verified={true}
        nextAvailable="hoje"
      />
    </div>
  );
}
