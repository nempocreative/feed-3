import type { RefObject } from 'react';
import povPhoto from '@/assets/ggs-men-08-pov-kacamata-photo.jpg.asset.json';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import './GgsMenPovSlide.css';

/** GGS Cowok slide 8: "POV: lupa pakai kacamata" — playful caption sticker over the owner's (sharpened) barber photo. */
export function GgsMenPovSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div className="w-full max-w-[430px]">
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="ggmv-root"
        role="img"
        aria-label="GGS Barber Hairstudio — POV: lupa pakai kacamata. Rekan barber memakaikan kacamata ke barber yang sedang mencukur."
      >
        <img className="ggmv-photo" src={povPhoto.url} alt="" width={2880} height={3840} />
        <span className="ggmv-wash" aria-hidden="true" />

        <section className="ggmv-sticker" aria-hidden="true">
          <p className="ggmv-pov">POV:</p>
          <h2 className="ggmv-title">
            Lupa pakai <em>kacamata</em>
          </h2>
        </section>

        <svg className="ggmv-arrow" viewBox="0 0 110 100" aria-hidden="true">
          <path d="M4 10 C 52 0, 92 30, 97 86" />
          <path d="M83 74 L 97 90 L 107 70" />
        </svg>

        <img className="ggmv-watermark" src={menOverlay.url} alt="" draggable={false} />
      </div>
    </div>
  );
}
