import type { RefObject } from 'react';
import spicesPhoto from '@/assets/ggs-feed-42-ratus-rempah.jpg.asset.json';
import benefitPhoto from '@/assets/ggs-feed-43-ratus-manfaat.jpg.asset.json';
import roomPhoto from '@/assets/ggs-feed-44-ratus-cara.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_RATUS_PRICE_PROMO as PROMO } from './ggs-ratus-price-promo';
import './GgsRatusEduSlide.css';

/** Ingredients shown on slide 42; `x`/`y` place the numbered marker on the photo (% of the slide). */
const SPICES = [
  { name: 'Daun sirih', note: 'segar & bersih', x: 24, y: 70 },
  { name: 'Manjakani', note: 'merawat kekencangan', x: 55.5, y: 69.5 },
  { name: 'Kemenyan', note: 'asap hangat khas', x: 44.5, y: 80.5 },
  { name: 'Cengkeh', note: 'hangat & melegakan', x: 18.5, y: 79.5 },
  { name: 'Akar wangi', note: 'aroma menenangkan', x: 72, y: 76.5 },
  { name: 'Kayu cendana', note: 'wangi lembut', x: 89.5, y: 78.5 },
];

const BENEFITS = [
  ['Segar & wangi alami', 'Bantu kurangi bau tak sedap kewanitaan.'],
  ['Badan hangat & rileks', 'Uap rempah bikin otot lebih santai.'],
  ['Nyaman setelah haid', 'Dipercaya bantu redakan pegal & kram.'],
  ['Peredaran darah lancar', 'Rasa hangatnya bikin badan segar.'],
  ['Perawatan pasca nifas', 'Tradisi turun-temurun para ibu.'],
  ['Me-time menenangkan', 'Aroma rempah bantu redakan stres.'],
];

const STEPS = [
  ['Konsultasi singkat', 'Ceritakan kondisimu ke terapis sebelum mulai.'],
  ['Bersih & ganti kain', 'Bilas diri, lalu pakai kain yang disediakan.'],
  ['Duduk & rileks', 'Uap rempah hangat naik pelan dari tungku.'],
  ['Minum air hangat', 'Lalu istirahat sebentar & cukupkan minum.'],
];

const AVOID = ['Sedang hamil', 'Sedang haid', 'Ada luka atau iritasi'];

const PHOTOS = { 1: spicesPhoto, 2: benefitPhoto, 3: roomPhoto } as const;
const LABELS = { 1: 'apa itu ratus', 2: 'manfaat ratus', 3: 'cara yang nyaman & aman' } as const;
const MODIFIER = { 1: 'ggre--one', 2: 'ggre--two', 3: 'ggre--three' } as const;

/** GGS Feed slides 42–44: three-part ratus education (1 what it is + spices, 2 benefits, 3 steps + when to wait + promo). */
export function GgsRatusEduSlide({ part, exportRef }: { part: 1 | 2 | 3; exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={`ggre-root ${MODIFIER[part]}`}
      aria-label={`GGS Beauty — Edukasi ratus: ${LABELS[part]}`}
    >
      <div className="ggre-stage" aria-hidden="true">
        <img className="ggre-photo" src={PHOTOS[part].url} alt="" />
        <div className="ggre-shade" />
        {part === 1 &&
          SPICES.map((s, i) => (
            <span key={s.name} className="ggre-pin" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
              {i + 1}
            </span>
          ))}
      </div>

      {part === 1 && (
        <>
          <section className="ggre-copy">
            <p className="ggre-kicker">Edukasi ratus · 1/3</p>
            <h2 className="ggre-title">
              <span className="ggre-title-a">Apa itu</span>
              <span className="ggre-title-b">Ratus?</span>
            </h2>
            <p className="ggre-lead">
              Perawatan warisan perempuan Nusantara: area kewanitaan diuapi asap rempah hangat sambil duduk santai di bangku ratus.
            </p>
            <p className="ggre-sub">Racikan rempahnya</p>
            <ol className="ggre-legend">
              {SPICES.map((s, i) => (
                <li key={s.name}>
                  <span className="ggre-num">{i + 1}</span>
                  <b>{s.name}</b>
                  <span className="ggre-note">{s.note}</span>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}

      {part === 2 && (
        <section className="ggre-copy">
          <p className="ggre-kicker">Edukasi ratus · 2/3</p>
          <h2 className="ggre-title">
            <span className="ggre-title-a">Banyak yang belum tahu,</span>
            <span className="ggre-title-b">manfaat ratus</span>
          </h2>
          <ol className="ggre-benefits">
            {BENEFITS.map(([t, d], i) => (
              <li key={t}>
                <span className="ggre-num">{i + 1}</span>
                <div>
                  <b>{t}</b>
                  <span>{d}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="ggre-fine">*Berdasarkan tradisi & pengalaman, bukan pengganti pengobatan medis.</p>
        </section>
      )}

      {part === 3 && (
        <>
          <section className="ggre-copy">
            <p className="ggre-kicker">Edukasi ratus · 3/3</p>
            <h2 className="ggre-title">
              <span className="ggre-title-a">Ratus yang</span>
              <span className="ggre-title-b">nyaman &amp; aman</span>
            </h2>
            <ol className="ggre-steps">
              {STEPS.map(([t, d], i) => (
                <li key={t}>
                  <span className="ggre-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <b>{t}</b>
                    <span>{d}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ggre-avoid">
              <p className="ggre-sub">Tunda dulu jika</p>
              <ul>
                {AVOID.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="ggre-fine">Ada keluhan? Tanya dokter dulu, ya.</p>
            </div>
          </section>
          <div className="ggre-seal">
            <span className="ggre-seal-kicker">{PROMO.kicker} {PROMO.title.toLowerCase()}</span>
            <span className="ggre-seal-cur">{PROMO.currency}</span>
            <b className="ggre-seal-price">{PROMO.price}</b>
            <span className="ggre-seal-cta">Booking sekarang</span>
          </div>
        </>
      )}

      <img className="ggre-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
