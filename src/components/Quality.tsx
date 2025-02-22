import { useEffect, useState } from "react";
import { QualityData } from "../models/QualityData";
import { TextField } from "@mui/material";

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
    <>
      {props.multiLine ? (
        <textarea
          onChange={(e) => setInput(e.target.value)}
          onBlur={saveQuality}
          value={input}
          readOnly={props.readOnly}
        />
      ) : (
        <TextField 
          helperText={props.qualityData.name} 
          variant="filled" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          disabled={props.readOnly} 
          onBlur={saveQuality} 
          sx={{input: {color: "white", '&:Mui-TextField': {brandBorderColor: "white"}}}}
          slotProps={{formHelperText: { sx: {color: "white"}}}}
          />
      )}
    </>
  );
};
