import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function Sample() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
