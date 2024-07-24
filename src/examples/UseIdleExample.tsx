import useIdle from "@/hooks/useIdle";

export default function UseIdleExample() {
  const isIdle = useIdle(1000);

  return (
    <div className="text-ctp-text">
      <p>Wait for 1 second before entering idle state</p>
      <p>Is Idle: {isIdle ? "Yes" : "No"}</p>
    </div>
  );
}
