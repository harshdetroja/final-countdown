import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);
  return (
    <section id="player">
      <h2>Welcome {name ?? "unkonwn entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button
          onClick={() => {
            setName(playerName.current.value);
            playerName.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
