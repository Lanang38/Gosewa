import React from "react";
import { Wrench, Timer, Wallet, Bike } from "lucide-react";

export const features = [
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
