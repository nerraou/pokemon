async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2");
  const data = await response.json();

  return <div>{data.type}</div>;
}

export default Home;
