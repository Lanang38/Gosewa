import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Apa itu GoSewa?",
    answer:
      "GoSewa adalah layanan penyewaan motor yang memberikan solusi praktis untuk Anda yang membutuhkan kendaraan dengan harga terjangkau. Kami menyediakan berbagai pilihan motor untuk disewa, baik untuk kebutuhan harian, perjalanan liburan, atau kegiatan lainnya.",
  },
  {
    question: "Bagaimana cara menyewa motor di GoSewa?",
    answer:
      "Untuk menyewa motor di GoSewa, Anda cukup mengunduh aplikasi kami, memilih motor yang diinginkan, menentukan tanggal sewa, lalu melakukan pembayaran secara online. Setelah itu, motor akan siap diambil atau dikirim sesuai pilihan Anda.",
  },
  {
    question: "Apa persyaratan untuk menyewa motor?",
    answer:
      "Penyewa harus berusia minimal 18 tahun dan memiliki SIM C yang masih berlaku. Selain itu, Anda perlu menunjukkan KTP asli dan memberikan jaminan sesuai ketentuan GoSewa.",
  },
  {
    question: "Berapa lama durasi penyewaan motor?",
    answer:
      "Durasi penyewaan motor di GoSewa sangat fleksibel. Anda bisa menyewa mulai dari harian, mingguan, hingga bulanan sesuai kebutuhan. Kami juga menawarkan harga spesial untuk sewa jangka panjang.",
  },
  {
    question: "Bagaimana jika motor yang saya sewa mengalami kerusakan?",
    answer:
      "Jika motor mengalami kerusakan, segera hubungi layanan pelanggan kami. Tim teknis kami akan membantu Anda, baik dengan perbaikan langsung, penukaran unit, atau pengembalian dana jika diperlukan.",
  },
  {
    question: "Apakah GoSewa menyediakan layanan antar dan jemput motor?",
    answer:
      "Ya, GoSewa menyediakan layanan antar dan jemput motor ke lokasi Anda dengan biaya tambahan. Anda dapat memilih layanan ini saat melakukan pemesanan di aplikasi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">
        FAQ
      </h2>
      <div className="max-w-4xl mx-auto divide-y">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full py-5 text-left"
            >
              <span
                className={`text-sm font-medium ${
                  openIndex === index ? "text-indigo-600" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-gray-600" />
              ) : (
                <Plus className="w-4 h-4 text-gray-600" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-500 pr-4 pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
