import { use } from "react";
import Image from "next/image";

interface PokemonDetailsProps {
  id: string;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  types: Array<PokemonType>;
}

async function getPokemon(id: string): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();

  return pokemon;
}

function PokemonDetails(props: PokemonDetailsProps) {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
    props.id +
    ".svg";

  const pokemon = use(getPokemon(props.id));

  return (
    <div className="flex justify-center items-center flex-col w-60 bg-ivory rounded-lg p-2">
      <Image width="100" height="100" alt="pokemon" src={url} className="p-2" />
      <label className="text-black-alpha">#{props.id}</label>
      <label className="text-xl font-bold">{pokemon.name}</label>

      <label className="">ABILITIES</label>

      <div className="flex">
        {pokemon.types.map((element) => {
          return (
            <label
              key={element.slot}
              className="bg-titan p-2 mr-2 text-black rounded-md"
            >
              {element.type.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetails;
