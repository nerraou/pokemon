import PokemonCard from "@molecules/PokemonCard";

function getId(url: string) {
  const words = url.split("/");

  return words[words.length - 2];
}

async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15'");
  const data = await response.json();

  return (
    <section>
      {data.results.map((pokemon: any) => {
        const id = getId(pokemon.url);
        return <PokemonCard name={pokemon.name} id={id} key={id} />;
      })}
    </section>
  );
}
export default Home;
