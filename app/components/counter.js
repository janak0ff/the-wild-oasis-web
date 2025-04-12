"use client";

import { useState } from "react";
export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Total users: {users.length}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
