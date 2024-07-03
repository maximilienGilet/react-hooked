import { useEffect, useLayoutEffect, useState } from "react";
import type { RefObject } from "react";
import screenfull from "screenfull";

export interface FullScreenOptions {
  video?: RefObject<
    HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
      webkitExitFullscreen?: () => void;
    }
  >;
  onClose?: (error?: Error) => void;
}

const isBrowser = typeof window !== "undefined";
const isoMorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

/**
 * Hook to handle fullscreen mode
 * @requires screenfull
 * @param {RefObject<Element>} ref - The ref of the element to handle fullscreen
 * @param {boolean} enabled - Whether to enable fullscreen mode
 * @param {FullScreenOptions} options - The options for the fullscreen mode
 * @param {RefObject<HTMLVideoElement>} options.video - The ref of the video element to handle fullscreen
 * @param {(error?: Error) => void} options.onClose - The callback to call when the fullscreen mode is closed
 * @returns {boolean} - Whether the fullscreen mode is enabled
 */
const useFullscreen = (
  ref: RefObject<Element>,
  enabled: boolean,
  options: FullScreenOptions = {},
): boolean => {
  const { video, onClose = () => {} } = options;
  const [isFullscreen, setIsFullscreen] = useState(enabled);

  isoMorphicLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (!ref.current) {
      return;
    }

    const onWebkitEndFullscreen = () => {
      if (video?.current) {
        window.removeEventListener(
          "webkitendfullscreen",
          onWebkitEndFullscreen,
        );
      }
      onClose();
    };

    const onChange = () => {
      if (screenfull.isEnabled) {
        const isScreenfullFullscreen = screenfull.isFullscreen;
        setIsFullscreen(isScreenfullFullscreen);
        if (!isScreenfullFullscreen) {
          onClose();
        }
      }
    };

    if (screenfull.isEnabled) {
      try {
        screenfull.request(ref.current);
        setIsFullscreen(true);
      } catch (error) {
        onClose(error as Error | undefined);
        setIsFullscreen(false);
      }
      screenfull.on("change", onChange);
    } else if (video && video.current && video.current.webkitEnterFullscreen) {
      video.current.webkitEnterFullscreen();
      window.addEventListener("webkitendfullscreen", onWebkitEndFullscreen);
      setIsFullscreen(true);
    } else {
      onClose();
      setIsFullscreen(false);
    }

    return () => {
      setIsFullscreen(false);
      if (screenfull.isEnabled) {
        try {
          screenfull.off("change", onChange);
          screenfull.exit();
        } catch {}
      } else if (video && video.current && video.current.webkitExitFullscreen) {
        window.removeEventListener(
          "webkitendfullscreen",
          onWebkitEndFullscreen,
        );
        video.current.webkitExitFullscreen();
      }
    };
  }, [enabled, video, ref]);

  return isFullscreen;
};

export default useFullscreen;
