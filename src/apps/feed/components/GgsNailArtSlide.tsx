import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-39-nail-art.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsNailArtSlide.css';

/** GGS Feed slide 39: "Kuku bagus menawan dengan Nail Art" over the owner's pink-nails photo (fingers whitened). */
export function GgsNailArtSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggnw-root"
      aria-label="GGS Beauty — Kuku bagus menawan dengan Nail Art"
    >
      <img className="ggnw-photo" src={photoAsset.url} alt="" aria-hidden="true" />

      <h2 className="ggnw-head">
        <span className="ggnw-pre">Kuku bagus menawan</span>
        <span className="ggnw-with">dengan</span>
        <span className="ggnw-title">Nail Art</span>
      </h2>

      <img className="ggnw-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
