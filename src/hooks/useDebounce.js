import { useEffect, useState } from "react";

export function useDebounce(value, timeInterval) {
  const [debounceString, setDebounceString] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceString(value);
    }, timeInterval);

    return () => {
      clearTimeout(handler);
    };
  }, [value, timeInterval]);

  return debounceString;
}
