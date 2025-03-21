import { QualityData } from "../models/characterSheet/QualityData";
import { Button, styled, SxProps, TextField, Theme, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { useState } from "react";
import { defaultStyle } from "../helpers/stylingHelper";
import { QualityService } from "../services/qualityService";
import { IModFunctions } from "../models/IModFunctions";

interface IQualityProps {
    qualityData: QualityData;
    modFunctions: IModFunctions;
}

const qualityService = new QualityService();

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9"
    }
}));

const singleLineStyle: SxProps<Theme> = {
    ...defaultStyle,
    width: 300,
    input: {
        color: "rgba(255, 255, 255, 0.87)",
        "&:Mui-TextField": { brandBorderColor: "rgba(255, 255, 255, 0.87)" }
    },
    fontSize: "14px",
    margin: "3px 10px",
    "& .MuiInputBase-input": {
        color: "rgba(255, 255, 255, 0.87)",
        fontFamily: "Roboto Mono, serif",
        backgroundColor: "#242424",
        maxHeight: 1,
        padding: 1,
        fontSize: 14
    }
};

const multiLineStyle: SxProps<Theme> = {
    ...defaultStyle,
    input: {
        color: "rgba(255, 255, 255, 0.87)",
        "&:Mui-TextField": { brandBorderColor: "rgba(255, 255, 255, 0.87)" }
    },
    "& .MuiInputBase-input": {
        color: "rgba(255, 255, 255, 0.87)",
        fontFamily: "Roboto Mono, serif",
        backgroundColor: "#242424",
        maxHeight: 1,
        padding: 1,
        fontSize: 12
    }
};

export const Quality = (props: IQualityProps) => {
    const [displayText, setDisplayText] = useState(props.qualityData.calculatedText);

    const onFocus = () => {
        setDisplayText(props.qualityData.originalText);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.qualityData.originalText = e.target.value;
        qualityService.recalculate(props.qualityData);
        setDisplayText(props.qualityData.calculatedText);
    };

    const isMultiline = props.qualityData.calculatedText.includes("\n");

    return (
        <>
            <HtmlTooltip
                title={
                    <>
                        <Typography color="inherit"> {props.qualityData.name}</Typography>
                        {props.qualityData.originalText != "" ? (
                            <p style={props.qualityData.qualityMods.length == 0 ? {} : { textDecoration: "line-through" }}>{props.qualityData.originalText}</p>
                        ) : (
                            <></>
                        )}
                        {props.qualityData.qualityMods.map((m, i) => (
                            <p key={i} style={m.enabled ? {} : { textDecoration: "line-through" }}>{`${m.value} [${m.source}]`}</p>
                        ))}
                    </>
                }
            >
                {isMultiline ? (
                    <TextField
                        value={displayText}
                        multiline={true}
                        helperText={props.qualityData.displayName}
                        onChange={(e) => setDisplayText(e.target.value)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        sx={multiLineStyle}
                        slotProps={{ formHelperText: { sx: defaultStyle }, htmlInput: { style: { padding: 0, margin: -5 } } }}
                        fullWidth={true}
                    />
                ) : (
                    <TextField
                        contentEditable={false}
                        helperText={props.qualityData.displayName}
                        variant="filled"
                        value={displayText}
                        onChange={(e) => setDisplayText(e.target.value)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        disabled={false}
                        sx={singleLineStyle}
                        slotProps={{ formHelperText: { sx: defaultStyle } }}
                    />
                )}
            </HtmlTooltip>
            {props.modFunctions.editMode && <Button onClick={() => props.modFunctions.removeQuality(props.qualityData)}>X</Button>}
        </>
    );
};
