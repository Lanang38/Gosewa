import { section } from 'framer-motion/client';
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <section id="contacts" className="overflow-hidden">
      <div className="bg-blue-800 py-5 text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            Punya Pertanyaan? Bisa Tanyakan Kami
            <a target="blank" href="https://wa.me/081325716185">
              <Phone className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
