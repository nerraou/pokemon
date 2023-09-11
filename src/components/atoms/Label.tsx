import { MouseEvent } from "react";

interface LabelProps {
  text: string;
  onClick?: (
    event: MouseEvent<HTMLLabelElement, globalThis.MouseEvent>,
  ) => void;
}

function Label(props: LabelProps) {
  return (
    <label
      onClick={props.onClick}
      className="bg-vanila rounded-md p-2 font-black"
    >
      {props.text}
    </label>
  );
}

export default Label;
