import { useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  let timeout;

  const setDebounce = (newValue) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setDebouncedValue(newValue), delay);
  };

  return [debouncedValue, setDebounce];
};
