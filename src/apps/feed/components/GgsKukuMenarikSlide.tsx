import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-40-kuku-menarik.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsKukuMenarikSlide.css';

/** GGS Feed slide 40: "Cantik sampai ujung jari" over the owner's original nails photo (only the table cable cleaned away). */
export function GgsKukuMenarikSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggkm-root"
      aria-label="GGS Beauty — Cantik sampai ujung jari"
    >
      <img className="ggkm-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggkm-shade" aria-hidden="true" />

      <h2 className="ggkm-head">
        <span className="ggkm-line1">Cantik sampai</span>{' '}
        <span className="ggkm-line2">ujung jari</span>
      </h2>

      <img className="ggkm-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
