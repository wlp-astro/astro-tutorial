import { useState } from "react";

export default function MyReact() {
  const [count, setCount] = useState(0);
  return <div>
    <h1>My React Component</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>;
}