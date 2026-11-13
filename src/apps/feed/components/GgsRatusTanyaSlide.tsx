import type { RefObject } from 'react';
import scenePhoto from '@/assets/ggs-feed-42-terapis-ratus.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsRatusTanyaSlide.css';

/**
 * GGS Feed slide 42: opens the ratus education series. The therapists Anggi and Deni (their own faces,
 * AI batik outfits) stand side by side behind the ratus burner and ask the question the next slides answer.
 */
export function GgsRatusTanyaSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggrq-root"
      aria-label="GGS Beauty — Anggi dan Deni bertanya: Aha, apa itu ratus?"
    >
      <img className="ggrq-photo" src={scenePhoto.url} alt="" aria-hidden="true" />
      <div className="ggrq-shade" aria-hidden="true" />

      <h2 className="ggrq-title">
        <span className="ggrq-aha">Aha,</span>
        <span className="ggrq-q">apa itu ratus?</span>
      </h2>

      <p className="ggrq-bubble ggrq-bubble--anggi">Ratus itu apa, sih?</p>
      <p className="ggrq-bubble ggrq-bubble--deni">Manfaatnya apa aja?</p>


      <p className="ggrq-name ggrq-name--anggi"><b>Anggi</b><i aria-hidden="true" /><span>Terapis GGS</span></p>
      <p className="ggrq-name ggrq-name--deni"><b>Deni</b><i aria-hidden="true" /><span>Terapis GGS</span></p>

      <p className="ggrq-next">Geser, kita jawab bareng →</p>

      <img className="ggrq-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
