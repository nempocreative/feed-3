import type { RefObject } from 'react';
import giveawayPhoto from '@/assets/ggs-men-09-giveaway-day5-photo.jpg.asset.json';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import './GgsMenGiveawaySlide.css';

/** GGS Cowok slide 9: "Give Away Day 5" — the owner's staff photo (locally sharpened, face unchanged) showing five fingers, with a DAY 5 seal beside her hand. */
export function GgsMenGiveawaySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div className="w-full max-w-[430px]">
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="ggmg-root"
        role="img"
        aria-label="GGS Barber Hairstudio — Give Away hari ke-5. Kapster GGS mengangkat lima jari. Cek caption untuk cara ikut."
      >
        <img className="ggmg-photo" src={giveawayPhoto.url} alt="" width={2880} height={3840} />
        <span className="ggmg-wash" aria-hidden="true" />

        <div className="ggmg-seal" aria-hidden="true">
          <span className="ggmg-seal-day">Day</span>
          <span className="ggmg-seal-num">5</span>
        </div>

        <section className="ggmg-copy" aria-hidden="true">
          <p className="ggmg-kicker">Hari ke-5</p>
          <h2 className="ggmg-title">Give Away</h2>
          <p className="ggmg-note">Cek caption &amp; ikutan, ya!</p>
        </section>

        <img className="ggmg-watermark" src={menOverlay.url} alt="" draggable={false} />
      </div>
    </div>
  );
}
