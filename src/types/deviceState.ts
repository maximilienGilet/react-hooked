export type DeviceState = {
  isSupported: boolean;
  deviceType: "Mobile" | "Tablet" | "Desktop";
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};