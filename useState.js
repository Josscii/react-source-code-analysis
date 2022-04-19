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
      123456789
    </div>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
