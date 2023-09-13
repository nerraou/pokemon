import Label from "@atoms/Label";
import Image from "next/image";
import { forwardRef, MouseEvent } from "react";

interface PokemonCardProps {
  name: string;
  id: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const PokemonCard = forwardRef(function PokemonCard(
  props: PokemonCardProps,
  ref: any,
) {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
    props.id +
    ".svg";

  return (
    <div
      onClick={props.onClick}
      ref={ref}
      className="inline-flex justify-center items-center flex-col w-48 bg-ivory rounded-xl"
    >
      <Image
        src={url}
        alt="image"
        width="100"
        height="100"
        className="object-contain w-28 h-28 p-2"
      />
      <Label text={props.name} />
    </div>
  );
});

export default PokemonCard;
