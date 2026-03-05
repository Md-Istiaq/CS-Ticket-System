## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows developers to write HTML-like code inside JavaScript. It makes UI code easier to read and maintain by combining UI structure and logic in one place.

JSX is not understood directly by browsers. Tools like **Babel** convert JSX into regular JavaScript before it runs in the browser.

---

## What is the difference between State and Props?

**Props (Properties)**
- Used to pass data from a parent component to a child component.
- Read-only and cannot be modified by the receiving component.
- Helps make components reusable.

**State**
- Used to store data that can change within a component.
- Managed inside the component.
- Updating state causes the component to re-render.

In short, **props pass data between components**, while **state manages dynamic data inside a component**.

---

## What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to store and update state.

Example:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

## How can you share state between components in React?

State can be shared between components by **lifting the state up** to their closest common parent component.

Steps:
1. Move the state to the parent component.
2. Pass the state to child components using **props**.
3. If child components need to update the state, pass a **state update function** from the parent as a prop.

Example:

```javascript
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildDisplay count={count} />
      <ChildButton setCount={setCount} />
    </>
  );
}