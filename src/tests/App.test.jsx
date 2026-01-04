import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import App from "../App";

test("counter starts at 0 and increments by 1", async () => {
  render(<App />);

  const counter = screen.getByTestId("counter-value");
  const button = screen.getByTestId("increment-btn");

  const getValue = () =>
    Number(counter.textContent.replace("Counter:", "").trim());

  expect(getValue()).toBe(0);

  const user = userEvent.setup();
  await user.click(button);

  expect(getValue()).toBe(1);
});
