import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentPage}`
        );
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          const nextPage = currentPage - 20;

          if (nextPage <= 0) {
            setCurrentPage(0);
            return;
          }
          setCurrentPage(nextPage);
        }}
        disabled={currentPage <= 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setCurrentPage(currentPage + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
