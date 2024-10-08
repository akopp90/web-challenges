import { add, subtract, multiply, divide } from "./index.js";

test("add", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(2, -3)).toBeLessThan(0);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract", () => {
  expect(subtract(15, 5)).toBe(10);
  expect(subtract(2, 3)).toBeLessThan(0);
});

test("multiply", () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-2, 3)).toBeLessThan(0);
  expect(multiply(3, -5)).toBeLessThan(0);
  expect(multiply(-2, -3)).toBeGreaterThan(0);
});

test("divide", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(2, 0)).toBe("You should not do this!"); // division by zero
});
