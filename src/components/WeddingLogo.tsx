import { WEDDING_ASSETS } from '../config/weddingAssets';

interface WeddingLogoProps {
  className?: string;
  sizeClass?: string;
}

/**
 * Renders the official uploaded wedding logo/monogram while strictly preserving
 * its original aspect ratio, colours, and transparent background.
 */
export function WeddingLogo({ className = '', sizeClass = 'h-24 w-24' }: WeddingLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={WEDDING_ASSETS.logoSrc}
        alt="Official Wedding Monogram of Abhishek & Rachna"
        referrerPolicy="no-referrer"
        className={`${sizeClass} object-contain select-none pointer-events-none`}
      />
    </div>
  );
}
