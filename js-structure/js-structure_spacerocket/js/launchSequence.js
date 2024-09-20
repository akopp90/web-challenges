// Step 1: Import the subroutine modules
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// Import the payload (NFSAT and FISHSAT)
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { rocket } from "./core/rocket.js";

// Define mission parameters
const payload = [NFSAT, FISHSAT];
const countdownLength = 5;
const rocketCost = 12; // SpaceRocket™️ cost in million dollars
const nfsatCost = 2.5; // NFSAT cost in million dollars
const fishsatCost = 4; // FISHSAT cost in million dollars

// Step 2: Define the launch function
export default function launch(fuelAmount) {
  // Validate the inputs
  if (fuelAmount <= 0) {
    return "Not enough fuel";
  }

  // Calculate total mission cost
  const totalCost = rocketCost + nfsatCost + fishsatCost;
  console.log(`Total mission cost: $${totalCost} million`);

  // Step 1: Load Payload
  console.log(payload);
  loadPayload(payload);

  // Step 2: Fuel the rocket
  fuel(fuelAmount);

  // Step 3: Countdown
  for (let i = 0; i < countdownLength; i++) {
    countdown();
  }

  // Step 4: Liftoff
  liftoff();

  // Step 5: Deploy Payload
  deployPayload();

  // Final return message
  return "Mission successful!";
}
