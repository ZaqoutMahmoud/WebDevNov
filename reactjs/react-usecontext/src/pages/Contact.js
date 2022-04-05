import { React, useContext } from "react";
import WelcomeMessage from "../Components/welcomeMessage";
import { Database } from "../context/index";

export default function Contact(data) {
  const myDb = useContext(Database)[3]; // [state,func,onlystr,string,posts]

  return (
    <>
      <WelcomeMessage message="Contact" />

      {myDb.map((post, index) => (
        <div>
          <p>{post.title}</p>
        </div>
      ))}
      {console.log(myDb)}
    </>
  );
}
