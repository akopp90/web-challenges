console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const result = await fetch(url);
  console.log(result);
  const data = await result.json();
  console.log(data);
  console.log(data.results);
  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log(r2d2.eye_color);
}

fetchData();
