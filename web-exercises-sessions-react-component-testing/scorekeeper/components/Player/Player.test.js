import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", async () => {
  const player = { name: "John", score: 10 };
  const increaseScore = () => {
    userEvent.click(screen.getByText("+"));
  };
  const decreaseScore = () => {
    userEvent.click(screen.getByText("-"));
  };
  render(
    <Player
      name={player.name}
      score={player.score}
      increasePlayerScore={increaseScore}
      decreasePlayerScore={decreaseScore}
    />
  );

  const name = screen.getByText(player.name);
  const score = screen.getByText(player.score);
  const allButtons = screen.getAllByRole("button");
  const increaseButton = screen.getByText("+");
  const decreaseButton = screen.getByText("-");

  expect(name).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(allButtons).toHaveLength(2);
  expect(increaseButton).toBeInTheDocument();
  expect(decreaseButton).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {});
