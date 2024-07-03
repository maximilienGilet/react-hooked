import { useEffect, useState } from "react";

export interface BatteryState {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

interface BatteryManager extends Readonly<BatteryState>, EventTarget {
  onchargingchange: () => void;
  onchargingtimechange: () => void;
  ondischargingtimechange: () => void;
  onlevelchange: () => void;
}

interface NavigatorWithPossibleBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

type UseBatteryState =
  | { isSupported: false } // Battery API is not supported
  | { isSupported: true; fetched: false } // battery API supported but not fetched yet
  | (BatteryState & { isSupported: true; fetched: true }); // battery API supported and fetched

const nav: NavigatorWithPossibleBattery | undefined =
  typeof navigator !== "undefined" ? navigator : undefined;
const isBatteryApiSupported = nav && typeof nav.getBattery === "function";

function useBatteryMock(): UseBatteryState {
  return { isSupported: false };
}

/**
 * React hook that tracks battery state
 * @returns {UseBatteryState} battery state
 */
function useBattery(): UseBatteryState {
  const [state, setState] = useState<UseBatteryState>({
    isSupported: true,
    fetched: false,
  });

  useEffect(() => {
    let isMounted = true;
    let battery: BatteryManager | null = null;

    const handleChange = () => {
      if (!isMounted || !battery) {
        return;
      }
      const newState: UseBatteryState = {
        isSupported: true,
        fetched: true,
        level: battery.level,
        charging: battery.charging,
        dischargingTime: battery.dischargingTime,
        chargingTime: battery.chargingTime,
      };
      setState(newState);
    };

    nav!.getBattery!().then((bat: BatteryManager) => {
      if (!isMounted) {
        return;
      }
      battery = bat;
      window.addEventListener("chargingchange", handleChange);
      window.addEventListener("chargingtimechange", handleChange);
      window.addEventListener("dischargingtimechange", handleChange);
      window.addEventListener("levelchange", handleChange);
      handleChange();
    });

    return () => {
      isMounted = false;
      if (battery) {
        window.removeEventListener("chargingchange", handleChange);
        window.removeEventListener("chargingtimechange", handleChange);
        window.removeEventListener("dischargingtimechange", handleChange);
        window.removeEventListener("levelchange", handleChange);
      }
    };
  }, []);

  return state;
}

export default isBatteryApiSupported ? useBattery : useBatteryMock;
