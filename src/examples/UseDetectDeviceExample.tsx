import clsx from "clsx";
import { useDetectDevice } from "@/hooks/useDetectDevice";

export default function UseDetectDeviceExample() {
  const { isSupported, deviceType, isMobile, isTablet, isDesktop } =
    useDetectDevice();

  if (!isSupported) {
    return <p>Device detection is not supported</p>;
  }

  const getDeviceTypeColor = () => {
    if (isMobile) {
      return "bg-ctp-red";
    } else if (isTablet) {
      return "bg-ctp-orange";
    } else if (isDesktop) {
      return "bg-ctp-black";
    } else {
      return "bg-ctp-gray";
    }
  };

  return (
    <div className="flex items-center justify-start">
      <div className="w-48">
        <div className={clsx("rounded border-2 p-4", getDeviceTypeColor())}>
          <p className="text-center text-xs font-bold leading-none">
            Device Type: {deviceType}
          </p>
        </div>
      </div>
    </div>
  );
}
