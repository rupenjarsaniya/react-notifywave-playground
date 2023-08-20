import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NotificationProvider } from "react-notifywave";
import { NotificationPosition } from "react-notifywave/dist/types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function AppWrapper() {
  const [position, setPosition] = useState<NotificationPosition>(
    localStorage.getItem("position") as NotificationPosition
  );

  return (
    <React.StrictMode>
      <NotificationProvider position={position ?? "top_right"}>
        <App setPosition={setPosition} position={position} />
      </NotificationProvider>
    </React.StrictMode>
  );
}

root.render(<AppWrapper />);
reportWebVitals();
