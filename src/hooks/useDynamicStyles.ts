import { useEffect } from 'react';

const useDynamicStyles = () => {
  useEffect(() => {
    const updateScale = () => {
      if (typeof window !== 'undefined') {
        let scale = window.devicePixelRatio || 1;
        let multiplier = 1;

        if (window.matchMedia) {
          const isHighDPI = window.matchMedia(
            'only screen and (min-resolution: 124dpi), ' +
              'only screen and (min-resolution: 1.3dppx), ' +
              'only screen and (min-resolution: 48.8dpcm), ' +
              'only screen and (-webkit-min-device-pixel-ratio: 1.3), ' +
              'only screen and (-o-min-device-pixel-ratio: 2.6/2), ' +
              'only screen and (min--moz-device-pixel-ratio: 1.3), ' +
              'only screen and (min-device-pixel-ratio: 1.3)',
          ).matches;

          if (isHighDPI || scale > 1.3) {
            multiplier = 2;
          }
        }

        // Calculate the font size
        const baseFontSize = 16; // Base font size in pixels
        const fontSize = (baseFontSize / scale) * multiplier;

        // Apply the calculated font size
        document.documentElement.style.fontSize = `${fontSize}px`;

        console.log(
          `Scale: ${scale}, Multiplier: ${multiplier}, Font Size: ${fontSize}px`,
        );
      }
    };

    // Set initial scale
    updateScale();

    // Update scale on window resize
    window.addEventListener('resize', updateScale);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);
};

export default useDynamicStyles;
