import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-39-nail-art.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsNailArtSlide.css';

/** GGS Feed slide 39: Nail art promo on the owner's pink-nails photo (fingers whitened). */
export function GgsNailArtSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggna-root"
      aria-label="GGS Beauty — Nail Art, Kuku Bagus Menawan"
    >
      <img className="ggna-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggna-shade" aria-hidden="true" />

      <section className="ggna-head">
        <p className="ggna-kicker">Nail Art</p>
        <h2 className="ggna-title">
          Kuku Bagus
          <em>Menawan</em>
        </h2>
      </section>

      <img className="ggna-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
