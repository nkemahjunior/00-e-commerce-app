"use client";

import { useEffect } from "react";

export function useLocalSrorage(key) {
  let initialCart = [];

  useEffect(
    function () {
      const storedItems = localStorage.getItem(key);
      initialCart = storedItems ? JSON.parse(storedItems) : [];

      if (initialCart.length === 0) {
        localStorage.setItem(key, JSON.stringify(initialCart));
      }
    },
    [key, initialCart],
  );
}
