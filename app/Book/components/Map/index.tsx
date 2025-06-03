"use client";
import React, { useEffect, useState } from "react";

import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

import styles from "./styles.module.scss";
import { MapProps } from "./map.types";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapCenter = {
  lat: 40.73061,
  lng: -73.935242,
};

const defaultMapZoom = 9;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
};
const Map = ({ form }: MapProps) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>();

  const getDirections = () => {
    const directionsService = new google.maps.DirectionsService();

    const origin = form?.from?.description;
    const destination = form?.to?.description;

    if (origin && destination) {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    } else {
      console.log("Please mark your destination in the map first!");
    }
  };

  useEffect(() => {
    if (form?.from?.description && form?.to?.description) {
      getDirections();
    }
  }, [form?.from?.description, form?.to?.description]);
  return (
    <div className={styles.map}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        {directions !== null && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
