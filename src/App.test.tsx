import { useState } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { NotificationPosition } from "react-notifywave/dist/types";

test("renders learn react link", () => {
  const [position, setPosition] = useState<NotificationPosition>(
    localStorage.getItem("position") as NotificationPosition
  );

  render(<App setPosition={setPosition} position={position} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
