"use client";
import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { SearchSvg } from "@/app/assets/svg";
import { SearchProps } from "./search.types";
import classNames from "classnames";

const Search = ({
  placeholder = "City",
  list = [],
  onChoose = () => {},
  className,
  initSearch = "",
}: SearchProps) => {
  const [search, setSearch] = useState<string>(initSearch);
  const [focused, setFocused] = useState<boolean>(false);
  const [filterdList, setFilterdList] = useState<string[]>(list);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    setFilterdList(
      list.filter((el) =>
        el.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className={classNames(styles.search, className)}>
      <SearchSvg />
      <input
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className={classNames(styles.search__list, focused && styles.show)}>
        {filterdList.length ? (
          filterdList.map((el) => (
            <div
              className={styles["search__list-item"]}
              key={el}
              onClick={() => {
                onChoose(el);
                setSearch(el);
              }}
            >
              {el}
            </div>
          ))
        ) : (
          <div className={styles["search__list-empty"]}>Not found</div>
        )}
      </div>
    </div>
  );
};

export default Search;
