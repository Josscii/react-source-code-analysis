import React from "react";
import { createRoot } from "react-dom/client";

function performLotOfWork() {
  let i = 0;
  while (i < 1000000000) {
    i += 1;
  }
}

function App() {
  const [count, setCount] = React.useState(0);
  console.log("rerender");

  React.useEffect(() => {
    console.log("useEffect");

    // performLotOfWork();
  });

  // performLotOfWork();

  return new Array(1000).fill(0).map((_, i) => (
    <div
      key={i}
      onClick={() => {
        // // 使用了并发特性useTransition
        // React.startTransition(() => {
        //   // 本次更新是并发更新
        //   setState({ count: state.count + 1 });
        // });

        // React.unstable_act(() => {
        setCount(1);
        setCount(2);
        // });

        setCount(3);
        setCount(4);
        setCount(5);
        setCount((count) => count + 1);

        // React.startTransition(() => {
        //   setCount((count) => count + 1);
        // });

        // setTimeout(() => {
        //   setCount((count) => count + 1);
        // }, 0);
        // setCount(1);
        // setCount((count) => count + 1);
        // setCount(4);
        // setCount((count) => count + 1);
      }}
    >
      测试文本第{count}行
    </div>
  ));
}

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("rerender");
    return React.createElement(
      "div",
      {
        onClick: () => {
          this.setState(
            {
              count: 1,
            },
            () => {
              console.log("test");
            }
          );
          // this.setState(this.state);
          // setTimeout(() => {
          //   console.log(this.state.count);
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   this.setState({ count: this.state.count + 1 });
          //   console.log(this.state.count);
          // }, 0);
        },
      },
      this.state.count
    );
  }
}

// ReactDOM.render(React.createElement(App), document.getElementById("app"));

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App2 />);
