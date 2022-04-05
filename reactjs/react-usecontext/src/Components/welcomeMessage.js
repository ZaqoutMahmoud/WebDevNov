import { React, useContext } from "react";
import { Database } from "../context/index";

export default function WelcomeMessage({ message }) {
  const [stateObj, MyFunction, StringData] = useContext(Database);
  return (
    <>
      <h1>{message}</h1>
      {console.log(stateObj, StringData)}
    </>
  );
}
