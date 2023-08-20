import { Copy } from "@phosphor-icons/react";
import { FC } from "react";
import s from "./CodeArea.module.scss";

interface CodeAreaProps {
  code: string;
}

export const CodeArea: FC<CodeAreaProps> = ({ code }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <code className={s.code}>
      <div className={s.code__text}>{code}</div>
      <div className={s.code__icon} onClick={() => handleCopy()}>
        <Copy />
      </div>
    </code>
  );
};
