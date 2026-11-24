/**
 * ============================================================================
 * CENTRAL WEDDING ASSETS CONFIGURATION
 * ============================================================================
 * Replace any of the asset paths below to customize the invitation with your
 * official wedding logo/monogram, background song, or optional photographs.
 */

export const WEDDING_ASSETS = {
  /**
   * 1. OFFICIAL WEDDING LOGO / MONOGRAM
   * Upload your official transparent PNG or SVG logo to:
   *   public/assets/wedding-logo.png  (or .svg)
   * and update `logoSrc` below if the filename or extension differs.
   */
  logoSrc: '/assets/wedding-logo.svg',

  /**
   * 2. BACKGROUND WEDDING SONG (HTML5 AUDIO)
   * Upload your wedding song (e.g. Shehnai / Rabindra Sangeet / instrumental MP3)
   * to `public/audio/wedding-song.mp3` and change `audioSrc` below to:
   *   '/audio/wedding-song.mp3'
   */
  audioSrc: '/audio/wedding-song.wav',

  /**
   * 3. DECORATIVE & FUNCTION PHOTOGRAPHS
   * Generated heritage Bengali wedding imagery. Replace with custom photos
   * anytime by updating these paths.
   */
  courtyardImage: '/src/assets/images/bengali_courtyard_backdrop_1795501789460.jpg',
  ritualAlponaImage: '/src/assets/images/bengali_ritual_alpona_1795501790274.jpg',
  receptionImage: '/src/assets/images/raipur_reception_evening_1795501790540.jpg',
  sholaFloralImage: '/src/assets/images/bengali_shola_floral_accent_1795501791248.jpg',

  functions: {
    welcomeGathering: '/src/assets/images/fn_welcome_gathering_1795502598234.jpg',
    sangeetCeremony: '/src/assets/images/fn_sangeet_ceremony_1795502598781.jpg',
    haldiCeremony: '/src/assets/images/fn_haldi_ceremony_1795502599748.jpg',
    baarat: '/src/assets/images/fn_baarat_procession_1795502600037.jpg',
    receptionDinner: '/src/assets/images/fn_reception_dinner_1795502600375.jpg',
    weddingPhere: '/src/assets/images/fn_wedding_phere_1795502601765.jpg',
  },
} as const;
