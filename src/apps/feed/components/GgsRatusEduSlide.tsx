import type { RefObject } from 'react';
import spicesPhoto from '@/assets/ggs-feed-42-ratus-rempah.jpg.asset.json';
import benefitPhoto from '@/assets/ggs-feed-43-ratus-manfaat.jpg.asset.json';
import roomPhoto from '@/assets/ggs-feed-44-ratus-cara.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_RATUS_PRICE_PROMO as PROMO } from './ggs-ratus-price-promo';
import './GgsRatusEduSlide.css';

const PHOTOS = { 1: spicesPhoto, 2: benefitPhoto, 3: roomPhoto } as const;
const LABELS = { 1: 'rempah ratus', 2: 'suasana ratus', 3: 'ruang ratus' } as const;
const MODIFIER = { 1: 'ggre--one', 2: 'ggre--two', 3: 'ggre--three' } as const;

/** GGS Feed slides 42–44: clean ratus photo series (no education text, per owner); slide 44 keeps the Rp45.000 promo seal. */
export function GgsRatusEduSlide({ part, exportRef }: { part: 1 | 2 | 3; exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={`ggre-root ${MODIFIER[part]}`}
      aria-label={`GGS Beauty — Ratus: ${LABELS[part]}`}
    >
      <div className="ggre-stage" aria-hidden="true">
        <img className="ggre-photo" src={PHOTOS[part].url} alt="" />
      </div>

      {part === 3 && (
        <div className="ggre-seal">
          <span className="ggre-seal-kicker">{PROMO.kicker} {PROMO.title.toLowerCase()}</span>
          <span className="ggre-seal-cur">{PROMO.currency}</span>
          <b className="ggre-seal-price">{PROMO.price}</b>
          <span className="ggre-seal-cta">Booking sekarang</span>
        </div>
      )}

      <img className="ggre-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
