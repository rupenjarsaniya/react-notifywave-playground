import { useEffect, useState } from "react";
import s from "./App.module.scss";
import { useNotification } from "react-notifywave";
import { Table } from "./components/Table";
import {
  NotificationPosition,
  NotificationType,
  NotificationVariant,
} from "react-notifywave/dist/types";
import { Selector } from "./components/Selector";
import { CodeArea } from "./components/CodeArea";

interface AppProps {
  setPosition: (position: NotificationPosition) => void;
  position: NotificationPosition;
}

function App({ setPosition, position }: AppProps) {
  const { notify } = useNotification();
  const [variant, setVariant] = useState<NotificationVariant>("light");
  const [type, setType] = useState<NotificationType>("success");
  const [duration, setDuration] = useState(2000);
  const [generalDuration, setGeneralDuration] = useState(2000);

  const handleTest = () => {
    notify(
      "This is notitication from react-notifyease!",
      type,
      duration,
      variant
    );
  };

  const handleSetPosition = (position: string) => {
    localStorage.setItem("position", position as NotificationPosition);
    setPosition(position as NotificationPosition);
  };

  const handleSetType = (value: string) => setType(value as NotificationType);

  const handleSetVariant = (value: string) =>
    setVariant(value as NotificationVariant);

  useEffect(() => {
    setPosition(
      (localStorage.getItem("position") as NotificationPosition) ?? "top_right"
    );
  }, [setPosition]);

  return (
    <div className={s.root}>
      <Table />
      <div className={s.dividerHorizonal} />
      <div className={s.wrap}>
        <div className={s.left}>
          <div className={s.inputContainer}>
            <div className={s.wrap__inner}>
              <div className={s.wrap__inner_title}>Duration</div>
              <input
                type="number"
                className={s.wrap__inner_inputfield}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                placeholder="Milliseconds"
              />
            </div>
            <div className={s.wrap__inner}>
              <div className={s.wrap__inner_title}>General Duration</div>
              <input
                type="number"
                className={s.wrap__inner_inputfield}
                value={generalDuration}
                onChange={(e) => setGeneralDuration(Number(e.target.value))}
                placeholder="Milliseconds"
              />
            </div>
          </div>
          <div className={s.dividerHorizonal} />
          <Selector
            title="type"
            buttonTexts={["success", "error", "warning", "info"]}
            onClick={(value: string) => handleSetType(value)}
            selected={type}
          />
          <Selector
            title="variant"
            buttonTexts={["contained", "outlined", "light", "dark"]}
            onClick={(value: string) => handleSetVariant(value)}
            selected={variant}
          />
          <Selector
            title="position"
            buttonTexts={[
              "top_left",
              "top_right",
              "bottom_left",
              "bottom_right",
              "top_center",
              "bottom_center",
            ]}
            onClick={(value: string) => handleSetPosition(value)}
            selected={position}
          />
        </div>
        <div className={s.dividerVertical} />
        <div className={s.right}>
          <CodeArea
            code={`<NotificationProvider position="${position}" general_duration={${generalDuration}}>{children}</NotificationProvider>`}
          />
          <CodeArea
            code={`notify("Here is your message", ${type}, ${duration}, ${variant});`}
          />
          <button className={s.glowingBtn} onClick={() => handleTest()}>
            <span className={s.glowingTxt}>
              <span className={s.faultyLetter}>T</span>est
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
