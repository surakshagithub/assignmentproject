import { useCallback, Dispatch, useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState((defaultValue = false));
  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue];
}
export default useToggle;
