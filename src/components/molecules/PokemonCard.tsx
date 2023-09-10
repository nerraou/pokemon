import Label from "@atoms/Label";
import Image from "next/image";

interface PokemonCardProps {
  name: string;
  id: string;
}

function PokemonCard(props: PokemonCardProps) {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
    props.id +
    ".svg";

  return (
    <div className="flex justify-center flex-col">
      <div>
        <Image src={url} alt="image" width="100" height="100" />
      </div>
      <Label text={props.name} />
    </div>
  );
}

export default PokemonCard;
