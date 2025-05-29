export default function Hero() {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 animate-pulse"></div> {/* Skeleton Image */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Bebas Berkelling Kota dengan GoSewa!</h1>
        <p className="mt-4 max-w-xl mx-auto">Sewa motor dan mobil dengan mudah, aman, dan terpercaya hanya di GoSewa!</p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded shadow">Sewa Sekarang</button>
      </div>
    </section>
  );
}
