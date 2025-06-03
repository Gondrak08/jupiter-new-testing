"use client";
import React, { useEffect, useRef, useState } from "react";

import { InputProps } from "./input.types";
import styles from "./styles.module.scss";
import { useDebounce } from "@/app/hooks";
import classNames from "classnames";

const AutocompleteInput = ({
  value,
  onChoose = () => {},
  className,
  disabled,
  ...rest
}: InputProps) => {
  const [search, setSearch] = useState<string>(value ?? "");
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [emptyError, setEmptyError] = useState<boolean>(false);

  const sessionToken =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  const onFocus = (): void => {
    setShow(true);
  };
  const onBlur = (): void => {
    setShow(false);
  };

  const getPlaceDetails = (placeId: string) => {
    console.log("getDetailsCall");
    const service = new google.maps.places.PlacesService(
      document.createElement("div"),
    );
    console.log("service", service);
    service.getDetails(
      {
        placeId,
        fields: ["geometry", "formatted_address", "name"],
        sessionToken: sessionToken.current!,
      },
      (place, status) => {
        console.log("quackquack:", place);
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          place &&
          place.formatted_address
        ) {
          onChoose({
            ...place,
            description: place.formatted_address,
          } as any); // casting for compatibility
          setSearch(place.formatted_address);
        } else {
          console.error("Error fetching place details:", status);
        }
      },
    );
  };

  const onItemClick = (
    place: google.maps.places.AutocompletePrediction,
  ): void => {
    setShow(false);
    console.log("place-->", place);
    onChoose(place);
    // getPlaceDetails(place.place_id);
  };

  const getPredictions = () => {
    if (!window.google || !window.google.maps) return;
    if (!sessionToken.current) {
      sessionToken.current = new google.maps.places.AutocompleteSessionToken();
    }

    const service = new google.maps.places.AutocompleteService();

    setLoading(true);
    setEmptyError(false);

    service.getPlacePredictions(
      {
        input: search,
        sessionToken: sessionToken.current,
        componentRestrictions: { country: "us" }, // Optional
      },
      (predictions, status) => {
        setLoading(false);
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          setResults(predictions);
        } else {
          setEmptyError(true);
          setResults([]);
        }
      },
    );
  };

  useDebounce(() => {
    if (search && !disabled && search !== value) {
      getPredictions();
    }
  }, search);

  useEffect(() => {
    setSearch(value ?? "");
  }, [value]);

  return (
    <div className={classNames(styles.input, className)}>
      <input
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={disabled}
        {...rest}
      />
      <div
        className={classNames(
          styles.select,
          show && (emptyError || results.length) && styles.show,
        )}
      >
        <div className={styles.select__inner}>
          {loading ? (
            <div className={styles["select__list-item"]}>Loading...</div>
          ) : emptyError ? (
            <div className={styles["select__list-item"]}>No Data</div>
          ) : (
            <div className={styles.select__list}>
              {results.map((place) => (
                <div
                  className={styles["select__list-item"]}
                  key={place.place_id}
                  onMouseDown={() => onItemClick(place)}
                >
                  {place.description}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteInput;
