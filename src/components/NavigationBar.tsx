import React, { useState } from 'react';
import { Menu, RotateCcw, X } from 'lucide-react';
import { MusicPlayer } from './MusicPlayer';

interface NavigationBarProps {
  onReplayDoor: () => void;
  isPlaying: boolean;
  onToggleMusic: () => void;
}

const NAV_ITEMS = [
  { label: 'Invitation', href: '#invitation' },
  { label: 'Countdown', href: '#countdown' },
  { label: 'Celebrations', href: '#celebrations' },
  { label: 'Grand Reception', href: '#grand-reception' },
  { label: 'Venues', href: '#venues' },
  { label: 'RSVP', href: '#rsvp' },
];

export function NavigationBar({
  onReplayDoor,
  isPlaying,
  onToggleMusic,
}: NavigationBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#B88A3B]/25 bg-[#FBF7F0]/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Zone 1: Single-line ceremonial wordmark */}
        <a
          href="#invitation"
          className="font-display text-lg sm:text-xl font-semibold tracking-wide text-[#5A0F16] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:underline"
        >
          Abhishek &amp; Rachna
        </a>

        {/* Zone 2: Clean typographic navigation links (Desktop) */}
        <nav
          aria-label="Wedding sections"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A352E]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-200 hover:text-[#9E1B24] hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:text-[#9E1B24]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Replay Door + Floating Music Control + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onReplayDoor}
            aria-label="Replay entrance door animation"
            title="Replay entrance door"
            className="hidden sm:inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border border-[#B88A3B]/45 bg-[#F4ECE0] px-3 py-1.5 text-xs font-medium text-[#5A0F16] whitespace-nowrap shrink-0 transition-colors hover:bg-[#EADBC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B24]"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Replay Door</span>
          </button>

          <MusicPlayer isPlaying={isPlaying} onToggle={onToggleMusic} />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-11 w-11 lg:hidden cursor-pointer items-center justify-center rounded-md border border-[#B88A3B]/40 bg-[#F4ECE0] text-[#5A0F16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B24]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#B88A3B]/25 bg-[#FBF7F0] px-4 py-4 shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center border-b border-[#E6D9C7]/60 px-2 text-base font-medium text-[#3A241E] transition-colors hover:text-[#9E1B24]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onReplayDoor();
              }}
              className="mt-2 flex min-h-[44px] cursor-pointer items-center gap-2 px-2 text-left text-sm font-medium text-[#9E1B24]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Replay Entrance Door</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
