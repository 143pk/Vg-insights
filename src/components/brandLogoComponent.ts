export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'header';

export interface BrandLogoOptions {
  size?: LogoSize;
  isDarkOnly?: boolean;
  isLightOnly?: boolean;
  className?: string;
  alt?: string;
}

/**
 * Renders the official approved VG Insights Logo image asset.
 * 
 * Uses the exact official image/SVG asset without any text recreation or splitting:
 * - Locks aspect ratio (920 / 270 ~ 3.41:1) to prevent layout shift and distortion
 * - Fluid responsive sizing calibrated for comfortable presence and zero collision
 * - Automatic light / dark mode switching via CSS classes
 * - Zero pixelation (lossless vector SVG)
 * - Flex shrink protection so adjacent navigation controls never crush or squeeze the logo
 */
export function renderBrandLogo(options: BrandLogoOptions = {}): string {
  const {
    size = 'md',
    isDarkOnly = false,
    isLightOnly = false,
    className = '',
    alt = 'VG Insights – NEET UG Platform',
  } = options;

  // Responsive height and max-width configurations calibrated for crisp visual hierarchy & zero collision
  const sizeClasses: Record<LogoSize, string> = {
    // Micro / tight components (e.g. mobile drawer footer, compact cards)
    xs: 'h-5 sm:h-6 w-auto max-w-[120px] sm:max-w-[140px]',
    
    // Small (e.g. auth modal header, mobile slide-out drawer, dropdowns)
    sm: 'h-6 sm:h-7.5 w-auto max-w-[150px] sm:max-w-[180px]',
    
    // Standard medium
    md: 'h-7 sm:h-8.5 md:h-9.5 lg:h-10 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[250px] lg:max-w-[280px]',

    // TOP NAVIGATION & HEADER: The DOMINANT brand identity (occupying primary visual space: ~50-54px height on mobile, ~58-66px on desktop). Crisp, vector-rendered, immediate readability.
    header: 'h-[46px] xs:h-[50px] sm:h-[54px] md:h-[58px] lg:h-[62px] xl:h-[66px] w-auto max-w-[210px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]',
    
    // Large (e.g. dashboard summary headers, section highlights)
    lg: 'h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]',
    
    // Extra large
    xl: 'h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px]',
    
    // Landing Page Hero: Prominently centered, graceful scaling from mobile (40px) to desktop (96px)
    hero: 'h-10 xs:h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[230px] xs:max-w-[270px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px]',
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;
  const baseImgClass = `${selectedSizeClass} aspect-[920/270] object-contain select-none shrink-0 pointer-events-none transition-all duration-200`;

  if (isDarkOnly) {
    return `
      <img
        src="/vg-insights-logo-dark.svg"
        alt="${alt}"
        class="${baseImgClass} ${className}"
        loading="eager"
        referrerPolicy="no-referrer"
      />
    `.trim();
  }

  if (isLightOnly) {
    return `
      <img
        src="/vg-insights-logo.svg"
        alt="${alt}"
        class="${baseImgClass} ${className}"
        loading="eager"
        referrerPolicy="no-referrer"
      />
    `.trim();
  }

  return `
    <span class="inline-flex items-center shrink-0 select-none ${className}">
      <img
        src="/vg-insights-logo.svg"
        alt="${alt}"
        class="${baseImgClass} dark:hidden"
        loading="eager"
        referrerPolicy="no-referrer"
      />
      <img
        src="/vg-insights-logo-dark.svg"
        alt="${alt}"
        class="${baseImgClass} hidden dark:block"
        loading="eager"
        referrerPolicy="no-referrer"
      />
    </span>
  `.trim();
}
