import "./App.css";
import "./index.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((responce) => {
        console.log(responce);
      });
  };

  return (
    <div className="app ">
      <div className="title bg-title-blue text-white flex justify-center flex-col items-center text-3xl p-4 pb-5 outline-none">
        <h1 className="font-mono">Pokemon React App</h1>
        <input
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          type="text"
          className="mt-5 w-[200px] h-[40px] text-sm px-4 py-2 text-black bg-input-field rounded-3xl border-solid border-black border-2 outline-none"
        />
        <button
          onClick={searchPokemon}
          className="bg-blue-500 hover:bg-blue-700 text-white mt-5 py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
