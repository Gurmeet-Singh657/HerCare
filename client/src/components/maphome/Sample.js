import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function Sample() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w", // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
