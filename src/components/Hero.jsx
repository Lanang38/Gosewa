import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/background.jpg"
          alt="GoSewa Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Aligned Right */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bebas Berkeling Kota <br className="hidden md:block" />
            dengan <span className="text-white">GoSewa!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Sewa motor dengan harga terjangkau, proses yang mudah, dan layanan
            cepat. Apa pun kebutuhan Anda, GoSewa menyediakan motor untuk
            menemani perjalanan Anda dengan nyaman dan aman.
          </p>

          {/* Button with Lucide Icon */}
          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition">
            Sewa Sekarang <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
