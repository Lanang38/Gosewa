export default function NewsletterForm() {
  return (
    <div className="py-12 bg-[#0B0F1A] text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Kiri */}
        <div className="self-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi Kami Melalui <br /> Email
          </h2>
          <p className="text-gray-400 mb-6">
            Gunakan jasa kami dan nikmatilah kemudahan penyewaan kendaraan
            disetiap perjalanan anda!
          </p>
        </div>

        {/* Kanan */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1B1F2C] text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1B1F2C] text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full bg-[#1B1F2C] text-white placeholder-gray-500 px-4 py-3 rounded-md resize-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
      <hr className="border-gray-700 max-w-6xl mx-auto mt-12" />
    </div>
  );
}
