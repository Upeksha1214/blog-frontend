'use client';
 
import { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
  const my=() => {
    console.log("podda");
  }
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={my}>Click me</button>
    </div>
  );
}