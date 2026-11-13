import type { RefObject } from 'react';
import hairVideo from '@/assets/ggs-feed-48-hair-loop.mp4.asset.json';
import hairPoster from '@/assets/ggs-feed-48-hair-poster.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsHairOpenSlide.css';

/**
 * GGS Feed slide 48: "We are open" over the owner's long glossy wavy hair photo, animated so the hair
 * sways gently (forward-reverse loop), with the daily opening hours and v2 branding.
 * `hideVideo` is used only when capturing the static overlay for the MP4 download.
 */
export function GgsHairOpenSlide({ exportRef, hideVideo = false }: { exportRef?: RefObject<HTMLElement | null>; hideVideo?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={hideVideo ? 'ggwo-root ggwo-root--overlay' : 'ggwo-root'}
      aria-label="GGS Beauty — We are open, setiap hari jam 09.00 sampai 21.00"
    >
      {!hideVideo && (
        <video
          className="ggwo-video"
          src={hairVideo.url}
          poster={hairPoster.url}
          aria-label="Rambut panjang bergelombang yang berkilau bergerak lembut"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      <div className="ggwo-shade" aria-hidden="true" />
      <section className="ggwo-copy">
        <h2 className="ggwo-title">
          <span className="ggwo-script">We are</span>
          <span className="ggwo-open">Open</span>
        </h2>
        <p className="ggwo-hours">
          <span className="ggwo-days">Setiap hari</span>
          <span className="ggwo-time">09.00<em>&ndash;</em>21.00</span>
        </p>
        <p className="ggwo-note">Walk-in &amp; booking welcome</p>
      </section>
      <img className="ggwo-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
