import useMediaQuery from "../hooks/useMediaQuery";

export default function UseMediaQueryExample() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col items-center gap-4 text-ctp-text">
      <p>Is mobile: {isMobile ? "true" : "false"}</p>
      <p>
        Resize the window to see the effect of the media query on the value of
        isMobile.
      </p>
    </div>
  );
}
