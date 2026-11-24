/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { WEDDING_ASSETS } from './config/weddingAssets';
import { EntranceDoor } from './components/EntranceDoor';
import { NavigationBar } from './components/NavigationBar';
import { HeroInvitation } from './components/HeroInvitation';
import { CountdownScratchCard } from './components/CountdownScratchCard';
import { CelebrationsSection } from './components/CelebrationsSection';
import { GrandReceptionSection } from './components/GrandReceptionSection';
import { VenuesSection } from './components/VenuesSection';
import { FamilyComplimentsSection } from './components/FamilyComplimentsSection';
import { RsvpSection } from './components/RsvpSection';
import { ClosingSection } from './components/ClosingSection';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [doorKey, setDoorKey] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lock page scroll while the entrance door is closed/opening
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [hasEntered]);

  // Starts playback synchronously inside the seal click gesture
  const handleStartMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {
        setIsMusicPlaying(false);
      });
  }, []);

  const handleToggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.45;
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  }, []);

  const handleEntered = useCallback(() => {
    setHasEntered(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleReplayDoor = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setDoorKey((k) => k + 1);
    setHasEntered(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FBF7F0] text-[#231815]">
        {/*
          ====================================================================
          BACKGROUND WEDDING MUSIC ELEMENT
          Replace the wedding song by placing your MP3 file in:
            public/audio/wedding-song.mp3
          and updating `audioSrc` in `src/config/weddingAssets.ts`.
          ====================================================================
        */}
        <audio
          ref={audioRef}
          src={WEDDING_ASSETS.audioSrc}
          loop
          preload="auto"
          onPlay={() => setIsMusicPlaying(true)}
          onPause={() => setIsMusicPlaying(false)}
        />

        {!hasEntered && (
          <EntranceDoor
            key={doorKey}
            onEntered={handleEntered}
            onStartMusic={handleStartMusic}
          />
        )}

        {/* Invitation content mounts ONLY after the entrance door completes opening */}
        {hasEntered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <NavigationBar
              onReplayDoor={handleReplayDoor}
              isPlaying={isMusicPlaying}
              onToggleMusic={handleToggleMusic}
            />

            <main>
              <HeroInvitation />
              <CountdownScratchCard />
              <CelebrationsSection />
              <GrandReceptionSection />
              <VenuesSection />
              <FamilyComplimentsSection />
              <RsvpSection />
            </main>

            <ClosingSection onReplayDoor={handleReplayDoor} />
          </motion.div>
        )}
      </div>
    </MotionConfig>
  );
}
