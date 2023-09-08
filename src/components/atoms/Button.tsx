import { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  return <button className="">{props.text}</button>;
}

export default Button;
