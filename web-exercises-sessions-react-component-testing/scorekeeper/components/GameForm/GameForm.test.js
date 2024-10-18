import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const nameInput = screen.getByLabelText("Name of game");
  const scoreInput = screen.getByLabelText("Player names, separated by comma");
  const submitButton = screen.getByRole("button", { name: "Create game" });
  expect(nameInput).toBeInTheDocument();
  expect(scoreInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form", { name: "Create a new game" });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  render(<GameForm />);
  const nameInput = screen.getByLabelText("Name of game");
  const scoreInput = screen.getByLabelText("Player names, separated by comma");
  const submitButton = screen.getByRole("button", { name: "Create game" });
  await userEvent.type(nameInput, "Test game");
  await userEvent.type(scoreInput, "Player 1, Player 2, Player 3");
  userEvent.click(submitButton);
  expect(nameInput.value).toBe("Test game");
  expect(scoreInput.value).toBe("Player 1, Player 2, Player 3");
});

test("does not submit form if one input field is left empty", async () => {
  render(<GameForm />);
  const nameInput = screen.getByLabelText("Name of game");
  const scoreInput = screen.getByLabelText("Player names, separated by comma");
  const submitButton = screen.getByRole("button", { name: "Create game" });
  await userEvent.type(nameInput, "Test game");
  userEvent.click(submitButton);
  expect(nameInput.value).toBe("Test game");
  expect(scoreInput.value).toBe("");
});
