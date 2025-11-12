import AppointmentCard from '../AppointmentCard';

export default function AppointmentCardExample() {
  return (
    <div className="max-w-2xl">
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
  );
}
