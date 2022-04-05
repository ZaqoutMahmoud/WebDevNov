import { React, useContext } from "react";
import WelcomeMessage from "../Components/welcomeMessage";
import { Database } from "../context/index";
export default function Homepage({ data }) {
  const myDb = useContext(Database)[3];
  const [stateObj, MyFunction, OnlyString, StringData, posts] = useContext(
    Database
  );

  return (
    <>
      {console.log(myDb, "sdfsdfsd")}
      <WelcomeMessage message="Welcome to HomePage!" data={data} />
      {OnlyString}
      {/* {console.log(posts)} */}
      {myDb.map((post, index) => (
        <div>
          <p>{post.title}</p>
        </div>
      ))}
    </>
  );
}
