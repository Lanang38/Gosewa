const faqs = [
  "Bagaimana cara menyewa motor di GoSewa?",
  "Apa persyaratan untuk menyewa motor?",
  "Berapa lama durasi penyewaan motor?",
  "Bagaimana jika motor yang saya sewa mengalami kerusakan?",
  "Apakah GoSewa menyediakan layanan antar dan jemput motor?",
];

export default function FAQ() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-center text-2xl font-semibold mb-8">FAQ</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((question, idx) => (
          <div key={idx} className="bg-white p-4 mb-4 rounded shadow-sm">
            <h3 className="font-medium">{question}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
