import type { RefObject } from 'react';
import teamPhoto from '@/assets/ggs-feed-47-teh-siti-teh-anggi-photo.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsTerapisKenalanSlide.css';

/**
 * GGS Feed slide 47: meet the therapists Teh Siti (hijab, left) and Teh Anggi (right) — their own faces,
 * AI pink blazers without logo — with the massage promo price card at the bottom.
 */
export function GgsTerapisKenalanSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggth-root"
      aria-label="GGS Beauty — Kenalan sama terapis kita, Teh Siti dan Teh Anggi. Promo Massage Rp85.000"
    >
      <img className="ggth-photo" src={teamPhoto.url} alt="" aria-hidden="true" />
      <div className="ggth-shade" aria-hidden="true" />

      <h2 className="ggth-title">
        <span className="ggth-kicker">Kenalan sama</span>
        <span className="ggth-main">terapis kita</span>
      </h2>

      <p className="ggth-name ggth-name--siti"><b>Teh Siti</b><i aria-hidden="true" /><span>Terapis GGS</span></p>
      <p className="ggth-name ggth-name--anggi"><b>Teh Anggi</b><i aria-hidden="true" /><span>Terapis GGS</span></p>

      <div className="ggth-promo">
        <p className="ggth-promo-copy">
          <span className="ggth-promo-tag">Promo</span>
          <span className="ggth-promo-name">Massage</span>
        </p>
        <p className="ggth-promo-price"><small>Rp</small>85.000</p>
      </div>

      <img className="ggth-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
