import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function A({ children }) {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  console.log("A");
  return children;
}

function B() {
  console.log("B");
  return <C />;
}

function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

function App() {
  console.log("App");
  return (
    <div>
      <A>
        <B />
      </A>
      <D />
    </div>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
