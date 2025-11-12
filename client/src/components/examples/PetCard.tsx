import PetCard from '../PetCard';
import petImage from '@assets/generated_images/Pet_avatar_golden_retriever_9770c647.png';

export default function PetCardExample() {
  return (
    <div className="max-w-md">
      <PetCard
        name="Thor"
        species="Cão"
        breed="Golden Retriever"
        age="3 anos"
        imageUrl={petImage}
        microchipId="982000123456789"
        vaccinationStatus="updated"
      />
    </div>
  );
}
