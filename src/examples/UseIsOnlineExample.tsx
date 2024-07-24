import useIsOnline from "@/hooks/useIsOnline";

export default function UseIsOnlineExample() {
  const isOnline = useIsOnline();

  return <p>Is navigator online: {isOnline ? "yes" : "no"}</p>;
}
