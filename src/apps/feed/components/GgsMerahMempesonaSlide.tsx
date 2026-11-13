import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-41-merah-mempesona.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsMerahMempesonaSlide.css';

/** GGS Feed slide 41: "Merah mempesona" over the owner's red-nails photo on the GGS Studio coaster (skin AI-lightened). */
export function GgsMerahMempesonaSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmr-root"
      aria-label="GGS Beauty — Merah mempesona"
    >
      <img className="ggmr-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggmr-shade" aria-hidden="true" />

      <h2 className="ggmr-head">
        <span className="ggmr-line1">Merah</span>{' '}
        <span className="ggmr-line2">mempesona</span>
      </h2>

      <img className="ggmr-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
