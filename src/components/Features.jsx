import motorImage from "../assets/motor.png";

export default function Features() {
  return (
    <section
      id="about"
      className="features-section relative bg-white overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 lg:px-24 py-20 min-h-[600px] lg:min-h-[768px]">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            Butuh tempat sewa kendaraan yang murah dan terpercaya?
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <span className="text-gray-700 text-sm flex md:gap-1 gap-0">
              <img
                className="md:h-5 h-3 md:mt-0 mt-1"
                src="src/assets/GoSewa_logo_black.png"
                alt="logo"
              />
              hadir sebagai solusi penyewaan motor yang memudahkan mobilitas
              Anda—kapan pun dan di mana pun.
            </span>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            Tidak hanya sekedar penyewaan, GoSewa adalah mitra perjalanan yang
            mengutamakan kenyamanan, keamanan, dan kepuasan Anda di setiap
            perjalanan.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[250px] md:w-[400px] h-auto">
            <img src={motorImage} alt="Motor" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
