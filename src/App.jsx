import { useState } from "react";

function GuildHeader({ guildName, level}) {
  return (
    <div>
      <h1>{guildName}</h1>
      <p>Guild Level: {level}</p>
    </div>
  );
}

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Guild Members: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Memmber</button>
      <button onClick={() => setCount(count - 1)}>Remove Memmber</button>
    </div>
  );
}


export default App;
