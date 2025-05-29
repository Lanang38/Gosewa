import { Wrench, Timer, Wallet, Bike } from "lucide-react";

const features = [
  {
    icon: <Wrench className="text-blue-800 w-8 h-8" />,
    title: "Motor Berkualitas dan Terawat",
    description:
      "Kami menyediakan motor yang selalu terjaga kualitasnya, siap digunakan dengan aman untuk perjalanan Anda.",
  },
  {
    icon: <Timer className="text-blue-800 w-8 h-8" />,
    title: "Proses Penyewaan Mudah dan Cepat",
    description:
      "Nikmati pengalaman penyewaan yang cepat dan tanpa ribet, cukup pilih motor dan lakukan pembayaran dalam hitungan menit.",
  },
  {
    icon: <Wallet className="text-blue-800 w-8 h-8" />,
    title: "Harga Terjangkau untuk Mahasiswa",
    description:
      "GoSewa menawarkan harga sewa motor yang sangat terjangkau, ideal untuk mahasiswa yang membutuhkan transportasi hemat.",
  },
  {
    icon: <Bike className="text-blue-800 w-8 h-8" />,
    title: "Pilihan motor beragam",
    description:
      "Dapatkan berbagai pilihan motor, dari matic hingga sport, sesuai dengan kebutuhan perjalanan Anda.",
  },
];

export default function BestFeature() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Mengapa memilih kami?
        </h2>

        {/* Centered Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[240px] bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
