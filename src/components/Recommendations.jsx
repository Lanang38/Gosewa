export default function Recommendations() {
  const items = Array.from({ length: 4 });

  return (
    <section className="bg-black py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Rekomendasi Sewa</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((_, idx) => (
          <div key={idx} className="bg-gray-700 w-56 h-40 rounded-lg animate-pulse"></div>
        ))}
      </div>
    </section>
  );
}
