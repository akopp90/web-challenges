import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Score" name="score" placeholder="Enter score" />);
  const label = screen.getByText("Score");
  const input = screen.getByLabelText("Score");
  const placeholder = screen.getByPlaceholderText("Enter score");
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "score");
  expect(placeholder).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();
  render(<Input labelText="Test Input" name="test" onChange={handleChange} />);

  const input = screen.getByLabelText("Test Input");
  await user.type(input, "Hello");

  expect(handleChange).toHaveBeenCalledTimes(5);
});
