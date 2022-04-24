import React, { useEffect, useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [count]);

  return (
    <div
      onClick={() => {
        setCount(count + 1);
        setCount(count + 2);
      }}
    >
      123456789
    </div>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
