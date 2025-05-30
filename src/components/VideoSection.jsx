import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-wrap justify-center items-start gap-12">
          {/* Video Placeholder */}
          <div className="w-full md:w-[560px] h-[320px] rounded-2xl overflow-hidden shadow-lg bg-white relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/src/assets/video_motor.mp4"
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
          </div>

          {/* Deskripsi */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
              Temukan Kemudahan Dalam <br />
              Setiap Aktivitasmu
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Temukan kemudahan berkendara dengan harga bersaing yang dapat kamu
              sewa kapanpun dan dimanapun sampai kamu berada.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-white hover:text-black hover:border-2 transition">
              Temukan Lebih Banyak
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}