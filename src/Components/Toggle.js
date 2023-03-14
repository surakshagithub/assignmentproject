import React from "react";
import { Button } from "@chakra-ui/react";
import useToggle from "../hooks/useToggle";

function Toggle() {
  const [value, toggle, setValue] = useToggle();
  //   const customToggle = () => setValue((x) => !x);

  return (
    <>
      <p>value is : {value?.toString()}</p>
      <Button onClick={() => setValue(true)}>Set True</Button>
      <Button onClick={() => setValue(false)}>set false</Button>
      <Button onClick={toggle}>Toggle</Button>
    </>
  );
}
export default Toggle;
