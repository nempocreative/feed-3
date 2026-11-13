import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsBekamPromoSlide.css';

/**
 * One glass cupping cup, mouth down: jar body, mouth rim, suction valve on top.
 * Drawn in a local space with the mouth on y = 0 so each cup can be scaled freely.
 */
function Cup({ x, s }: { x: number; s: number }) {
  return (
    <g transform={`translate(${x} 0) scale(${s})`}>
      <path
        d="M -12 0 L -12 -10 Q -12 -20 0 -20 Q 12 -20 12 -10 L 12 0 Z"
        fill="url(#ggbk-glass)"
        stroke="#ffffff"
        strokeOpacity=".92"
        strokeWidth="1.1"
      />
      <path d="M -12 -1 L -12 -10 Q -12 -20 0 -20 Q 12 -20 12 -10 L 12 -1 Z" fill="#d93a78" fillOpacity=".2" />
      <rect x="-13.6" y="-2.8" width="27.2" height="3.8" rx="1.9" fill="#b21652" fillOpacity=".72" />
      <rect x="-2.2" y="-25" width="4.4" height="6.4" rx="2.2" fill="#ffffff" fillOpacity=".9" />
      <circle cx="0" cy="-25.8" r="2.8" fill="url(#ggbk-glass)" stroke="#ffffff" strokeOpacity=".9" strokeWidth=".9" />
      <rect x="-7.6" y="-15.4" width="3" height="10.4" rx="1.5" fill="#ffffff" fillOpacity=".8" />
    </g>
  );
}

/**
 * GGS Feed slide 46: Promo Bekam Full Body.
 * Drawn on a transparent canvas so the PNG drops straight onto a video frame —
 * only the headline plate, the cupping cups, the price card and (optionally) the
 * GGS header/footer carry pixels.
 */
export function GgsBekamPromoSlide({
  exportRef,
  frame = true,
  variant = 'full',
}: {
  exportRef?: RefObject<HTMLElement | null>;
  frame?: boolean;
  /** 'full' = whole-frame layout; 'strip' = compact bottom banner so the video stays visible. */
  variant?: 'full' | 'strip';
}) {
  if (variant === 'strip') {
    return (
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="ggbk-root ggbk-root--strip"
        aria-label="GGS Beauty — Promo bekam full body, dari Rp140.000 jadi Rp110.000, hemat Rp30.000"
      >
        <div className="ggbk-strip">
          <svg className="ggbk-strip-cups" viewBox="-20 -32 160 36" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="ggbk-glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity=".95" />
                <stop offset="52%" stopColor="#ffd3e2" stopOpacity=".78" />
                <stop offset="100%" stopColor="#d93a78" stopOpacity=".62" />
              </linearGradient>
            </defs>
            <Cup x={30} s={0.8} />
            <Cup x={62} s={1} />
            <Cup x={94} s={0.8} />
          </svg>
          <div className="ggbk-strip-text">
            <p className="ggbk-strip-title">
              Promo <em>Bekam</em> Full Body
            </p>
            <p className="ggbk-strip-price">
              <s>Rp140.000</s>
              <strong>
                <small>Rp</small>110.000
              </strong>
            </p>
          </div>
          <span className="ggbk-strip-save">Hemat Rp30.000</span>
        </div>
        {frame && <img className="ggbk-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />}
      </div>
    );
  }

  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggbk-root"
      aria-label="GGS Beauty — Promo bekam full body, dari Rp140.000 jadi Rp110.000, hemat Rp30.000"
    >
      <div className="ggbk-head">
        <span className="ggbk-kicker">Promo</span>
        <h2 className="ggbk-title">
          <span className="ggbk-title-lead">Bekam</span>
          <span className="ggbk-title-main">Full Body</span>
        </h2>
      </div>

      <svg className="ggbk-cups" viewBox="-20 -32 160 36" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="ggbk-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="52%" stopColor="#ffd3e2" stopOpacity=".78" />
            <stop offset="100%" stopColor="#d93a78" stopOpacity=".62" />
          </linearGradient>
        </defs>
        <Cup x={16} s={0.72} />
        <Cup x={40} s={0.9} />
        <Cup x={64} s={1.05} />
        <Cup x={88} s={0.9} />
        <Cup x={112} s={0.72} />
      </svg>

      <div className="ggbk-card">
        <p className="ggbk-old">
          <s>Rp140.000</s>
        </p>
        <p className="ggbk-new">
          <small>Rp</small>110.000
        </p>
        <span className="ggbk-save">Hemat Rp30.000</span>
      </div>

      {frame && <img className="ggbk-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />}
    </div>
  );
}
