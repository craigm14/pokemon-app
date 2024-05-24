import "./App.css";
import "./index.css";
import axios from "axios";
import React, { useState } from "react";
import AddFavourites from "./conponents/AddFavourites";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });
  const [favourites, setFavourites] = useState([]);

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((responce) => {
        setPokemon({
          name: pokemonName,
          species: responce.data.species.name,
          img: responce.data.sprites.front_default,
          hp: responce.data.stats[0].base_stat,
          attack: responce.data.stats[1].base_stat,
          defence: responce.data.stats[2].base_stat,
          type: responce.data.types[0].type.name,
        });
        setPokemonChosen(true);
      })
      .catch(function (error) {
        console.error("Couldnt find pokemon", error);
      });
  };

  function updateFavourites(pokemon) {
    setFavourites(function (currentFavourites) {
      const newFavourites = [...currentFavourites, pokemon];
      return newFavourites;
    });
  }

  return (
    <div className="app">
      <div className="title bg-title-blue text-white flex justify-center flex-col items-center text-3xl p-4 pb-5 outline-none">
        <h1 className="font-mono">Pokemon React App</h1>
        <input
          id="pokemon-form"
          placeholder="enter pokemon name"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          type="text"
          className="form mt-5 w-[200px] h-[40px] text-black lowercase text-center text-sm px-4 py-2 bg-input-field rounded-3xl border-solid border-black border-2 outline-none"
        />
        <button
          onClick={searchPokemon}
          className="bg-blue-500 hover:bg-blue-700 text-white mt-5 py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      <div className="pt-10 flex justify-center">
        <button
          onClick={() => updateFavourites(pokemon)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Favourites
        </button>
      </div>
      <div className=" text-3xl pt-8 flex justify-center flex-col items-center mb-10 ">
        <div className="bg-yellow-300 max-w-96 rounded p-5 text-center ">
          {!pokemonChosen ? (
            <h1>Please choose a pokemon</h1>
          ) : (
            <>
              <h1>{pokemon.name}</h1>
              <img
                className="pokemon mx-auto w-[100px] rounded-xl"
                src={pokemon.img}
                alt="Pokemon"
              />
              <>
                <h3>Health Points: {pokemon.hp}</h3>

                <h3>Species: {pokemon.species}</h3>

                <h3>Attack: {pokemon.attack}</h3>

                <h3>Defence: {pokemon.defence}</h3>

                <h3>Type: {pokemon.type}</h3>
              </>
            </>
          )}
        </div>
      </div>
      <div>
        {favourites.map(function (pokemon) {
          return (
            <div key={pokemon.name}>
              <img src={pokemon.img} />
              <p>Pokemon name: {pokemon.name}</p>
              <p>Health: {pokemon.hp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
