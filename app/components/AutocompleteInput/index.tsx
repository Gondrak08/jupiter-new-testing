"use client";
import React, { useEffect, useState } from "react";

import { InputProps } from "./input.types";
import styles from "./styles.module.scss";
import { useDebounce } from "@/app/hooks";
import classNames from "classnames";
import { axiosInstance } from "@/app/utils";

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

  const onFocus = (): void => {
    setShow(true);
  };
  const onBlur = (): void => {
    setShow(false);
  };

  const onItemClick = (
    place: google.maps.places.AutocompletePrediction,
  ): void => {
    setShow(false);

    onChoose(place);
    setSearch(place.description);
  };

  const getPredictions = async () => {
    try {
      setLoading(true);
      setEmptyError(false);
      const resp = await axiosInstance.post("includes/ajax/_booking2.php", {
        method: "get_address",
        params: { type: "address", search },
      });
      if (resp.data?.results) {
        setResults(Object.values(resp.data.results));
      } else {
        setEmptyError(true);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setEmptyError(true);
      console.log(`[getPredictions] error: ${e}`);
    }
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
              {results.map((place) => {
                return (
                  <div
                    className={styles["select__list-item"]}
                    key={place.description}
                    onMouseDown={() => {
                      onItemClick(place);
                    }}
                  >
                    {place.description}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteInput;
