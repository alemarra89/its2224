import React, { useEffect, useState } from "react";
import "./App.css";
import { Pokedex, Pokemon } from "./models/pokedex";
import { DettaglioPokemon } from "./models/dettaglio-pokemon";

const IMG_POKEDEX =
  "https://icon-library.com/images/pokedex-icon/pokedex-icon-28.jpg";
const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

const BASE_URL_IMG =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function App() {
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [dettaglioPokemon, setDettaglioPokemon] = useState<DettaglioPokemon>();

  const getListaPokemon = () => {
    fetch(POKEDEX_URL)
      .then((res) => res.json())
      .then((result: Pokedex) => {
        console.log("result", result);
        setPokedex(result);
      });
  };

  const getDettaglioPokemon = (pokemon: Pokemon) => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((result: DettaglioPokemon) => {
        console.log("result", result);
        setDettaglioPokemon(result);
      });
  };

  useEffect(() => {
    getListaPokemon();
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2, borderRight: "1px solid #CCC" }}>
          <h2>Lista Pokemon</h2>
          {pokedex?.results.map((pokemon, index) => (
            <div
              style={{ textAlign: "left" }}
              onClick={() => getDettaglioPokemon(pokemon)}
            >
              <img
                style={{ width: 50 }}
                src={BASE_URL_IMG + (index + 1) + ".png"}
              />
              {index + 1}. {pokemon.name}
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {!dettaglioPokemon && (
            <div>
              <h2>Pokedex</h2>
              <img style={{ width: 250 }} src={IMG_POKEDEX} alt="Pokedex" />
            </div>
          )}
          {dettaglioPokemon && (
            <div>
              <h2>{dettaglioPokemon.name}</h2>
              <img style={{ width: 250 }} src={BASE_URL_IMG + (dettaglioPokemon.id) + ".png"} alt="Pokedex" />
              <div>
                <p>Altezza: {dettaglioPokemon.height} cm</p>
                <p>Peso: {dettaglioPokemon.weight} lbs</p>
                <p>Statistiche:</p>
                {dettaglioPokemon.stats.map((stat) => (
                  <p>{stat.stat.name + ": " + stat.base_stat}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
