import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#0B0F1A] text-white">
      {/* 🔵 Bar Atas */}
      <div className="bg-blue-800 py-5">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            Punya Pertanyaan? Bisa Tanyakan Kami
            <Phone className="w-4 h-4" />
          </p>
        </div>
      </div>

      {/* 🧾 Form Buat Akun */}
      <div className="py-6 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              Join <span className="font-semibold text-white">GoSewa</span>
            </p>
            <p className="text-sm text-gray-500">
              Temukan Update Terbaru Tentang GoSewa
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end">
            <input
              type="text"
              placeholder="Alamat Akun Anda"
              className="bg-[#1B1F2C] text-gray-300 placeholder-gray-500 px-4 py-2 rounded-full w-64 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition cursor-pointer">
              Buat Akun
            </button>
          </div>
        </div>
      </div>

      {/* ⚫ Footer Utama */}
      <footer className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-6 mb-16">
            {/* Kolom 1 */}
            <div className="w-[240px]">
              <h2 className="text-2xl font-bold mb-6 leading-snug">
                Ayo Gunakan <br /> GoSewa
              </h2>
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                Sewa Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Kolom 2 */}
            <div className="w-[240px]">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Tentang Kami</a>
                </li>
                <li>
                  <a href="#">Testimoni</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div className="w-[240px]">
              <h3 className="text-lg font-semibold mb-4">Hubungi Kita</h3>
              <div className="flex gap-4 mb-4">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>

              <h4 className="text-sm font-semibold mb-2">Pembayaran</h4>
              <div className="flex flex-wrap gap-3 items-center">
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/bri.png"
                    alt="BRI"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/ovo.jpg"
                    alt="OVO"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/dana.jpg"
                    alt="DANA"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/gopay.png"
                    alt="GoPay"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/visa.png"
                    alt="VISA"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
                <a href="#" className="transition duration-300 hover:scale-105">
                  <img
                    src="src/assets/mastercard.png"
                    alt="MasterCard"
                    className="h-6 w-auto cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-gray-700" />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-4 flex justify-end text-sm text-gray-400">
          © 2025 GoSewa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
