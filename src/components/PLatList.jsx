import PlateCard from "./PlateCard";

export default function PlateList({ plates }) {
  if (plates.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Aucun plat trouvé
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {plates.map((plate) => (
        <PlateCard key={plate.id} {...plate} />
      ))}
    </div>
  );
}