export default function Testimonials() {
  const items = Array.from({ length: 4 });

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-8">Apa Kata Pelanggan Kami</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((_, idx) => (
          <div
            key={idx}
            className="w-64 h-32 bg-gray-200 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </section>
  );
}
