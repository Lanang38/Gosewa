import { section } from "framer-motion/client";
import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <section id="contacts">
      <div className="bg-blue-800 py-5 text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            Punya Pertanyaan? Bisa Tanyakan Kami
            <Phone className="w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
}
