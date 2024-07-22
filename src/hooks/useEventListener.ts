import { useEffect, useLayoutEffect, useRef } from "react";

import type { RefObject } from "react";

/**
 * A hook that allows to listen to events on an element.
 * @param {string} eventName - The name of the event.
 * @param {Function} handler - The function to be called when the event occurs.
 * @param {RefObject<T>} element - The element to listen to the event on.
 * @param {boolean | AddEventListenerOptions} options - Options for the event listener.
 */
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * A hook that allows to listen to events on the window.
 * @param {string} eventName - The name of the event.
 * @param {Function} handler - The function to be called when the event occurs.
 * @param {undefined} element - The element to listen to the event on.
 * @param {boolean | AddEventListenerOptions} options - Options for the event listener.
 */
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * A hook that allows to listen to events on an element.
 * @param {string} eventName - The name of the event.
 * @param {Function} handler - The function to be called when the event occurs.
 * @param {RefObject<T>} element - The element to listen to the event on.
 * @param {boolean | AddEventListenerOptions} options - Options for the event listener.
 */
function useEventListener<
  K extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  T extends Element = K extends keyof HTMLElementEventMap
    ? HTMLDivElement
    : SVGElement,
>(
  eventName: K,
  handler:
    | ((event: HTMLElementEventMap[K]) => void)
    | ((event: SVGElementEventMap[K]) => void),
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * A hook that allows to listen to events on the document.
 * @param {string} eventName - The name of the event.
 * @param {Function} handler - The function to be called when the event occurs.
 * @param {RefObject<Document>} element - The element to listen to the event on.
 * @param {boolean | AddEventListenerOptions} options - Options for the event listener.
 */
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * A hook that allows to listen to events on an element or the window.
 * @param {string} eventName - The name of the event.
 * @param {Function} handler - The function to be called when the event occurs.
 * @param {RefObject<T>} element - The element to listen to the event on.
 * @param {boolean | AddEventListenerOptions} options - Options for the event listener.
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | SVGElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, listener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListener;
