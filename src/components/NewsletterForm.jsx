import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function NewsletterForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w023gsa", // ID Service EmailJS kamu
        "template_ls4y6pe", // ID Template EmailJS kamu
        form.current,
        "5B0kduS9aRayAXvEd" // Public Key EmailJS kamu
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Pesan Anda berhasil dikirim.",
            confirmButtonColor: "#2563eb",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Terjadi kesalahan saat mengirim pesan.",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Nama Anda"
                className="w-full bg-[#1B1F2C] text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Anda"
                className="w-full bg-[#1B1F2C] text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tulis pesan anda..."
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
