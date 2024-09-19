console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(rating = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.src = i <= rating ? "assets/star-filled.svg" : "assets/star-empty.svg";

    // Add click event listener to each star
    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.appendChild(star);
  }
  //--^-- your code here --^--
}
renderStars(5);
