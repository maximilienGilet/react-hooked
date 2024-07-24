import useWindowScroll from "@/hooks/useWindowScroll";

export default function UseWindowScrollExample() {
  const { x, y } = useWindowScroll();

  return (
    <div>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
}
