"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Map() {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 51.23595,
    lng: -0.575523,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={defaultCenter}
      />
    </LoadScript>
  );
}
