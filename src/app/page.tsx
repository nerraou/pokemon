"use client";

import PokemoneDetails from "@/components/molecules/PokemonDetails";
import PokemonCard from "@molecules/PokemonCard";
import { Suspense, useEffect, useRef, useState } from "react";

function getId(url: string) {
  const words = url.split("/");

  return words[words.length - 2];
}

interface Pokemon {
  name: string;
  url: string;
}

async function getPokemons(pageNumber: number) {
  const offset = (pageNumber - 1) * 15;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`,
  );
  const data = await response.json();

  return data;
}

function Home() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastElement, setLastElement] = useState(null);
  const countRef = useRef(0);

  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const first = entries.at(0);

      setPageNumber((page) => {
        if (
          first?.isIntersecting &&
          (countRef.current == 0 || page <= countRef.current / 15)
        ) {
          return page + 1;
        }

        return page;
      });
    });
  }, []);

  useEffect(() => {
    getPokemons(pageNumber).then((data) => {
      countRef.current = data.count;
      setPokemons((prev) => [...prev, ...data.results]);
    });
  }, [pageNumber]);

  useEffect(() => {
    const currentElement = lastElement;
    const observer = observerRef.current;

    if (!observer) {
      return;
    }

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const [showDetails, setSHowDetails] = useState(false);
  const [pokemonId, setPokemonId] = useState<string | undefined>();

  return (
    <>
      {showDetails && pokemonId && (
        <div
          className="flex justify-center items-center fixed w-screen h-screen bg-black-alpha"
          onClick={() => {
            setSHowDetails(false);
          }}
        >
          <Suspense
            fallback={
              <h1 className="fixed h-screen w-screen bg-black-alpha text-4xl">
                loading
              </h1>
            }
          >
            <PokemoneDetails id={pokemonId} />
          </Suspense>
        </div>
      )}

      <section className="bg-dove grid place-items-center grid-cols-3 grid-flow-row gap-8">
        {pokemons.map((pokemon) => {
          const id = getId(pokemon.url);
          return (
            <PokemonCard
              name={pokemon.name}
              id={id}
              key={id}
              ref={setLastElement}
              onClick={() => {
                setSHowDetails(true);
                setPokemonId(id);
              }}
            />
          );
        })}
      </section>
    </>
  );
}
export default Home;
