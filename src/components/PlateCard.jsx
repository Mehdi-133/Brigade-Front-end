export default function PlateCard({ name, price, is_available, image }) {
  return (
    <div className="group bg-brandCard rounded-[2.5rem] overflow-hidden shadow-lg hover:-translate-y-2 transition border border-white/5">
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {is_available && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
            Disponible
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-accentYellow">
            {price} MAD
          </span>

          <button className="bg-brandDark text-accentYellow px-4 py-2 rounded-lg hover:bg-accentYellow hover:text-black transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
