import { FC } from "react";

import s from "./Selector.module.scss";
import { Button } from "../Button";

interface PositionProps {
  buttonTexts: string[];
  onClick: (value: string) => void;
  selected: string;
  title?: string;
}

export const Selector: FC<PositionProps> = ({
  title,
  buttonTexts,
  onClick,
  selected,
}) => (
  <div className={s.wrap__inner}>
    <div className={s.wrap__inner_title}>{title}</div>
    <div className={s.wrap__inner_buttons}>
      {buttonTexts.map((item) => (
        <Button
          key={item}
          text={item}
          selected={selected === item}
          onClick={(value: string) => onClick(value)}
        />
      ))}
    </div>
  </div>
);
