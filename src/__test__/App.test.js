import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("The form should be render properly", () => {
    render(<App />);
    screen.getByText(/Nombre de la tarea/i);
  });
});
