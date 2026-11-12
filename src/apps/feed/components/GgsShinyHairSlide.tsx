import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-38-rambut-berkilau.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsShinyHairSlide.css';

/** GGS Feed slide 38: "Dibalik Rambut Berkilau" on the owner's real glossy-bob photo, original salon background kept. */
export function GgsShinyHairSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggsh-root"
      aria-label="GGS Beauty — Dibalik Rambut Berkilau"
    >
      <img className="ggsh-photo" src={photoAsset.url} alt="Rambut hitam lurus berkilau pelanggan GGS Beauty dilihat dari belakang" />
      <div className="ggsh-shade" aria-hidden="true" />

      <h2 className="ggsh-head">
        <span className="ggsh-pre">Dibalik</span>
        <span className="ggsh-title">Rambut Berkilau</span>
      </h2>

      <img className="ggsh-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
