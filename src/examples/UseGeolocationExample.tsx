import useGeolocation from "@/hooks/useGeolocation";

export default function UseGeolocationExample() {
  const {
    loading,
    accuracy,
    latitude,
    longitude,
    altitude,
    altitudeAccuracy,
    heading,
    speed,
    timestamp,
    error,
  } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>The geolocation is {loading ? "loading" : "loaded"}.</p>
      <table className="table-auto border-collapse w-full p-2">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ctp-surface1">
          <tr>
            <td>Accuracy</td>
            <td>{accuracy}</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{latitude}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{longitude}</td>
          </tr>
          <tr>
            <td>Altitude</td>
            <td>{altitude}</td>
          </tr>
          <tr>
            <td>Altitude Accuracy</td>
            <td>{altitudeAccuracy}</td>
          </tr>
          <tr>
            <td>Heading</td>
            <td>{heading}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>{timestamp}</td>
          </tr>
          {error && (
            <tr>
              <td>Error</td>
              <td>{error.message}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
