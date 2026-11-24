import React from 'react';
import { Music, Pause } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      title={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#B88A3B] bg-[#9E1B24] text-[#F8E7B8] shadow-[0_4px_14px_rgba(90,15,22,0.28)] transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A3B]"
    >
      {isPlaying && (
        <span
          aria-hidden="true"
          className="animate-spin-slow absolute -inset-1 rounded-full border border-dashed border-[#D4AF37]"
        />
      )}
      {isPlaying ? (
        <Pause className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Music className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
