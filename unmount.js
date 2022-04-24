import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <Child key={count} />
    </div>
  );
}

function Child() {
  return <div>1234324</div>;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
