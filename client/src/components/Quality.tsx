import { QualityData } from "../models/characterSheet/QualityData";
import { styled, TextField, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { useState } from "react";
import { defaultStyle } from "../helpers/stylingHelper";
import { QualityService } from "../services/qualityService";

interface IQualityProps {
  qualityData: QualityData;
}

const qualityService = new QualityService();

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const localStyle = {
  ...defaultStyle, 
  width: 300, 
  input: { color: "rgba(255, 255, 255, 0.87)", '&:Mui-TextField': { brandBorderColor: "rgba(255, 255, 255, 0.87)" } } ,
  fontSize: "14px"
};

export const Quality = (props: IQualityProps) => {
  const [displayText, setDisplayText] = useState(props.qualityData.calculatedText);

  const onFocus = () => {
    setDisplayText(props.qualityData.originalText)
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    props.qualityData.originalText = e.target.value;
    qualityService.recalculate(props.qualityData);
    setDisplayText(props.qualityData.calculatedText);
  };

  return (
    <HtmlTooltip
      title={
        <>
          <Typography color="inherit"> {props.qualityData.name}</Typography>
          {props.qualityData.originalText != "" ? <p style={props.qualityData.qualityMods.length == 0 ? {} : { textDecoration: "line-through" }}>{props.qualityData.originalText}</p> : <></>}
          {props.qualityData.qualityMods.map((m, i) => <p key={i} style={m.enabled ? {} : { textDecoration: "line-through" }}>{`${m.value} [${m.source}]`}</p>)}
        </>
      }
    >
      <TextField
          contentEditable={false}
          helperText={props.qualityData.name}
          variant="filled"
          value={displayText}
          onChange={e => setDisplayText(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={false}
          sx={localStyle}
          multiline={props.qualityData.calculatedText.includes("\n")}
          slotProps={{ formHelperText: { sx: defaultStyle }, htmlInput: { sx: localStyle } }}
        />
    </HtmlTooltip>
  );
};
