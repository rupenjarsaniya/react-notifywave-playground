import { FC } from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  selected?: boolean;
  onClick?: (value: string) => void;
}

export const Button: FC<ButtonProps> = ({ text, selected, onClick }) => (
  <div
    className={clsx(s.button, { [s.button_selected]: selected })}
    role="button"
    onClick={() => onClick?.(text)}
  >
    {text}
  </div>
);
