import { WEDDING_ASSETS } from '../config/weddingAssets';

interface WeddingLogoProps {
  className?: string;
  sizeClass?: string;
}

/**
 * Renders the official uploaded wedding logo/monogram fitted cleanly inside a
 * circular medallion while strictly preserving its original aspect ratio and colours.
 */
export function WeddingLogo({ className = '', sizeClass = 'h-24 w-24' }: WeddingLogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-[#FEFDFD] ${sizeClass} ${className}`}
    >
      <img
        src={WEDDING_ASSETS.logoSrc}
        alt="Official Wedding Monogram of Abhishek & Rachna"
        referrerPolicy="no-referrer"
        className="h-full w-full scale-[1.24] object-contain select-none pointer-events-none"
      />
    </div>
  );
}
