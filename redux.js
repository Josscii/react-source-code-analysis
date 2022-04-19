import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { legacy_createStore } from "redux";

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

function Test() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch({ type: "INCREMENT" });
      }}
    >
      {count}
    </div>
  );
}

const rootReducer = (state = { count: 0 }, action) => {
  return { count: state.count + 1 };
};

const store = legacy_createStore(rootReducer);

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
