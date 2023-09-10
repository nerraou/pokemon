import { MouseEvent } from "react";

interface LabelProps {
  text: string;
  onClick?: (
    event: MouseEvent<HTMLLabelElement, globalThis.MouseEvent>,
  ) => void;
}

function Label(props: LabelProps) {
  return (
    <label onClick={props.onClick} className="bg-orange rounded-md p-2">
      {props.text}
    </label>
  );
}

export default Label;
