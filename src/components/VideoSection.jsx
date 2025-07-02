import { useRef, useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function VideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-[560px] h-[320px] rounded-2xl overflow-hidden shadow-lg bg-white relative order-2 md:order-1"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/video_motor.mp4"
              controls={playing}
              onPause={() => setPlaying(false)}
            />
            {!playing && (
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
                onClick={handlePlay}
                type="button"
              >
                <div className="w-16 h-16 bg-white/80 hover:bg-gray-100 rounded-full flex items-center justify-center shadow-md transition">
                  <Play className="w-8 h-8 text-black ml-[2px]" />
                </div>
              </button>
            )}
          </motion.div>

          {/* Teks + CTA Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full md:max-w-md order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
              Temukan Kemudahan Dalam <br />
              Setiap Aktivitasmu
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Temukan kemudahan berkendara dengan harga bersaing yang dapat kamu
              sewa kapanpun dan dimanapun sampai kamu berada.
            </p>

            <div className="hidden md:block">
              <a
                href="https://gosewa.my.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-white hover:text-black hover:border-2 transition"
              >
                Temukan Lebih Banyak
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tombol Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-6 md:hidden text-center"
        >
          <button className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-white hover:text-black hover:border-2 transition">
            Temukan Lebih Banyak
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
