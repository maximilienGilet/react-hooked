import * as React from "react";

const { useState } = React;

const noop = () => {};

export type Element =
  | ((state: boolean) => React.ReactElement<any>)
  | React.ReactElement<any>;

type UseHoverReturn = [React.ReactElement<any>, boolean];

/**
 * React hook to handle hover state
 * @param {Element} element
 * @returns {UseHoverReturn} [element, hover state]
 */
const useHover = (element: Element): UseHoverReturn => {
  const [state, setState] = useState(false);

  const onMouseEnter = (originalOnMouseEnter?: any) => (event: any) => {
    (originalOnMouseEnter || noop)(event);
    setState(true);
  };
  const onMouseLeave = (originalOnMouseLeave?: any) => (event: any) => {
    (originalOnMouseLeave || noop)(event);
    setState(false);
  };

  if (typeof element === "function") {
    element = element(state);
  }

  const el = React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  });

  return [el, state];
};

export default useHover;
