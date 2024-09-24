const resultElement = document.querySelector("[data-js='results']");
const searchBtn = document.querySelector("[data-js='search']");
export function Card(job) {
  console.log(job);
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header">
      <img src="${job.companyLogo}" alt="${job.title}">
    </div>
    <div class="card-body">
      <h2>${job.jobTitle}</h2>
      <p>${job.jobDescription}</p>
      <a class="card-button" href="${job.url}" target="blank">Visit Now</a>
    </div>
  `;
  // resultElement.appendChild(card);
  return card;
}
