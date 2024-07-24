import clsx from "clsx";
import useBattery, { type BatteryState } from "@/hooks/useBattery";

export default function UseBatteryExample() {
  const { isSupported, ...batteryState } = useBattery();

  if (!isSupported) {
    return <p>Battery API is not supported</p>;
  }

  const { fetched } = batteryState as { fetched: boolean };

  if (!fetched) {
    return <p>Battery API is not fetched yet</p>;
  }

  const { charging, level, chargingTime, dischargingTime } =
    batteryState as BatteryState;

  const getLevelColor = () => {
    if (level < 0.25) {
      return "bg-ctp-red";
    } else if (level < 0.5) {
      return "bg-ctp-yellow";
    } else {
      return "bg-ctp-green";
    }
  };

  const getBorderColor = () => {
    if (charging) {
      return "border-ctp-yellow";
    } else {
      return "border-ctp-surface2";
    }
  };

  return (
    <div className="flex items-center justify-start">
      <div className="w-48">
        <div className="relative my-1 flex w-1/2 rounded border-2 border-ctp-surface2 shadow">
          <div className="absolute z-10 ml-24 mt-2 flex h-6 rounded-r border-r-8 border-ctp-surface2"></div>
          <div
            className={clsx(
              "m-1 flex cursor-default items-center justify-center py-4 text-center text-xs font-bold leading-none",
              getLevelColor(),
            )}
            style={{ width: `${level * 100}%` }}
          >
            <div className="absolute left-0 mx-8 text-ctp-surface2">
              {level * 100}%
            </div>
          </div>
        </div>
      </div>
      <div className="text-ctp-text">
        Is charging: {charging ? "Yes" : "No"}
        <br />
        Charging time: {chargingTime}
        <br />
        Discharging time: {dischargingTime}
      </div>
    </div>
  );
}
