export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-2xl mx-auto bg-brandCard p-4 rounded-3xl flex gap-4">
      <input
        type="text"
        placeholder="Search for a dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl bg-brandDark text-white outline-none"
      />
    </div>
  );
}