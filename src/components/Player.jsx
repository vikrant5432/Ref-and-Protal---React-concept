import { useRef, useState } from "react";

export default function Player() {
  const userlatestName = useRef("");
  const [userName, setUserName] = useState("");

  const updateUserName = () => {
    setUserName(userlatestName.current.value);
    // userlatestName.current.click();
  };

  return (
    <section id="player">
      <h2>Welcome {userName || "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={userlatestName} />
        <button onClick={updateUserName}>Set Name</button>
      </p>
    </section>
  );
}
