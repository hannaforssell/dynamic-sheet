import { useEffect, useState } from "react";
import { QualityData } from "../models/QualityData";

interface IQualityProps {
  qualityData: QualityData;
  onChangeQuality: (data: QualityData) => void;
  multiLine?: boolean;
  readOnly?: boolean;
}

export const Quality = (props: IQualityProps) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setInput(props.qualityData.input);
  }, [props.qualityData]);

  const saveQuality = (e: any) => {
    const newInput = e.target.value;
    const newQuality = new QualityData(
      props.qualityData.name,
      props.qualityData.group,
      newInput
    );
    props.onChangeQuality(newQuality);
    setInput(newInput);
  };

  return (
    <label
      style={{
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: "150px 180px",
      }}
    >
      {props.qualityData.name}
      {props.multiLine ? (
        <textarea
          onChange={(e) => setInput(e.target.value)}
          onBlur={saveQuality}
          value={input}
          readOnly={props.readOnly}
        />
      ) : (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={saveQuality}
          readOnly={props.readOnly}
          className="no-focus"
        />
      )}
    </label>
  );
};
