import { AbilityData } from "../models/characterSheet/AbilityData";
import { Box, Button, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { defaultStyle } from "../helpers/stylingHelper";
import { IModFunctions } from "../models/IModFunctions";

interface IAbilityProps {
    abilityData: AbilityData;
    modFunctions: IModFunctions;
    showMod?: boolean;
    showSign?: boolean;
}

const getAbilityMod = (score: number | null) => {
    if (score === null) {
        return "0";
    }
    const value = Math.floor(score / 2 - 5);

    return value < 0 ? value : "+" + value;
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9"
    }
}));

export const Ability = (props: IAbilityProps) => {
    let displaySum = "";
    if (props.abilityData.calculatedSum === null) {
        displaySum = "—";
    } else {
        if (props.abilityData.calculatedSum > 0 && props.showSign == true) {
            displaySum = "+" + Math.floor(props.abilityData.calculatedSum);
        } else {
            displaySum = Math.floor(props.abilityData.calculatedSum).toString();
        }
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={defaultStyle}>{props.abilityData.displayName}: </Typography>
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">
                                {" "}
                                {props.abilityData.name}: {displaySum}
                            </Typography>
                            {props.abilityData.abilityMods.map((m, i) => (
                                <p key={i} style={m.enabled ? {} : { textDecoration: "line-through" }}>
                                    {m.toString()}
                                </p>
                            ))}
                        </React.Fragment>
                    }
                >
                    <Button sx={{ ...defaultStyle, padding: 0, paddingTop: "1px" }}>
                        {props.showMod ? `${displaySum} ${getAbilityMod(props.abilityData.calculatedSum)}` : displaySum}
                    </Button>
                </HtmlTooltip>
            </Box>
            {props.modFunctions.editMode && <Button onClick={() => props.modFunctions.removeAbility(props.abilityData)}>X</Button>}
        </>
    );
};
