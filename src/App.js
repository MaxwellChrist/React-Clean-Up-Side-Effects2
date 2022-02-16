import "./styles.css";
import React, { useState, useEffect } from "react";

function Counter({ count }) {
  // ** This is to show without event listeners ** //
  // useEffect(() => {
  //   console.log("foo effect");
  //   return () => console.log("clean up foo");
  // }, []);
  // useEffect(() => {
  //   console.log("bar effect");
  //   return () => console.log("clean up bar");
  // }, [count]);
  // return <h1>The count is {count}!</h1>

  // ** This is to show with event listeners ** //
  // It is vital to remove the event listener in the cleanup function,
  // otherwise the event listener will trigger twice each time the
  // counter function is reset (pressing the destroy counter button)
  useEffect(() => {
    console.log("foo effect");
    const listener = (e) => console.log("click");
    document.addEventListener("click", listener);
    return () => {
      console.log("clean up foo");
      document.removeEventListener("click", listener);
    };
  }, []);
  useEffect(() => {
    console.log("bar effect");
    return () => console.log("clean up bar");
  }, [count]);
  return <h1>The count is {count}!</h1>;
}

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {isCounterVisible && <Counter count={count} />}
      <button onClick={(e) => setIsCounterVisible(true)}>Mount Counter</button>
      <button onClick={(e) => setIsCounterVisible(false)}>
        Destroy Counter
      </button>
      <button onClick={(e) => setCount(count + 1)}>Add Count</button>
    </div>
  );
}

export default App;

// ** Tried to do it with resize event listerner ** //
// useEffect(() => {
//   console.log("foo effect");
//   const listener = (e) => {
//     e.textContent = console.log(
//       `height: ${window.innerHeight}
//        width: ${window.innerWidth}
//     `);
//   }
//   document.addEventListener("resize", listener);
//   return () => {
//     console.log("clean up foo");
//     document.removeEventListener("resize", listener);
//   };
// }, []);
// useEffect(() => {
//   console.log("bar effect");
//   return () => console.log("clean up bar");
// }, [count]);
// return <h1>The count is {count}!</h1>;
// }
