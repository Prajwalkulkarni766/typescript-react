import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <p>This is box component</p>
    </>
  )
}