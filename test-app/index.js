import { fetchJobData } from "./components/fetch.js";
import { getJobs } from "./components/jobs.js";

const job = document.querySelector("[data-js='job']");
const location = document.querySelector("[data-js='location']");
const searchBtn = document.querySelector("[data-js='search']");
const resultElement = document.querySelector("[data-js='results']");
searchBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const jobData = await fetchJobData(job, location);
  console.log(jobData);
  resultElement.innerHTML = "";
  getJobs(jobData);
});
