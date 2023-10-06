import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleNotifyClick = () => {
    setCount((prevCount) => prevCount + 1);
    if ("Notification" in window) {
      setText("Notification Clicked");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setText((prev) => prev + "haspermission Clicked");
          new Notification("Not Title", {
            body: "Notification Body",
            icon: "logo.png", // Path to your notification icon
          });
        }
      });
    }
  };
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <p>{text}</p>
      <button onClick={handleNotifyClick}>Notify Me</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
