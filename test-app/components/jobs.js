import { Card } from "./card.js";
const resultElement = document.querySelector("[data-js='results']");

export function renderElement(element) {
  if (!element) {
    console.error("Element is undefined or null");
    return;
  }

  if (!(element instanceof Element)) {
    console.error("Invalid element type");
    return;
  }

  if (!resultElement) {
    console.error("Result element not found");
    return;
  }

  resultElement.appendChild(element);
}
export function getJobs(jobData) {

  const jobCard = jobData.jobs.map((element) => Card(element));
  jobCard.forEach((card) => renderElement(card));
}
