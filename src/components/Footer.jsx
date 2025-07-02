import {
  Facebook,
  Instagram,
  // Linkedin,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-[#0B0F1A] text-white">
      <footer className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-6 mb-16">
            {/* Kolom 1 */}
            <div className="w-[240px]">
              <h2 className="text-2xl font-bold mb-6 leading-snug">
                Ayo Gunakan <br /> GoSewa
              </h2>
              <a
                href="https://gosewa.my.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Sewa Sekarang <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Kolom 2 */}
            <div className="w-[240px]">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">Tentang Kami</a>
                </li>
                <li>
                  <a href="#testimoni">Testimoni</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div className="w-[240px]">
              <h3 className="text-lg font-semibold mb-4">Hubungi Kita</h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577361536125"
                  target="blank"
                >
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                </a>

                <a href="https://x.com/Gosewa18056" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1226.37 1226.37"
                    className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <path
                      d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="https://www.instagram.com/gosewaaa/" target="blank">
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                </a>
                {/* <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" /> */}
              </div>

              <h4 className="text-sm font-semibold mb-2">Pembayaran</h4>
              <div className="md:overflow-x-visible">
                <div className="flex flex-nowrap md:flex-wrap gap-3 items-center whitespace-nowrap">
                  <img
                    src="/bri.png"
                    alt="BRI"
                    className="h-6 w-auto cursor-pointer"
                  />
                  <img
                    src="/ovo.jpg"
                    alt="OVO"
                    className="h-6 w-auto cursor-pointer"
                  />
                  <img
                    src="/dana.jpg"
                    alt="DANA"
                    className="h-6 w-auto cursor-pointer"
                  />
                  <img
                    src="/gopay.png"
                    alt="GoPay"
                    className="h-6 w-auto cursor-pointer"
                  />
                  <img
                    src="/visa.png"
                    alt="VISA"
                    className="h-6 w-auto cursor-pointer"
                  />
                  <img
                    src="/mastercard.png"
                    alt="MasterCard"
                    className="h-6 w-auto cursor-pointer"
                  />
                </div>
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
