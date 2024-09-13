console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  const pizzaGainRounded = Math.round(pizzaGain);
  output.textContent = pizzaGainRounded;
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newSizeInPercent = (newSize / 24) * 100;
  pizzaElement.style.width = `${newSizeInPercent}px`;
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (size2 > size1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
