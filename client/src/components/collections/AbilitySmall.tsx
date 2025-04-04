import { AbilityData } from "../../models/characterSheet/AbilityData";
import { Box, Button, ButtonPropsColorOverrides, Divider, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import React, { useState } from "react";
import { abilityDisplaySum } from "../../helpers/stylingHelper";
import { IModFunctions } from "../../models/IModFunctions";
import { AbilityModal } from "../modals/AbilityModal";
import { memCopy } from "../../helpers/memCopy";

interface IAbilitySmall {
    abilityData: AbilityData;
    modFunctions: IModFunctions;
    showMod?: boolean;
    showSign?: boolean;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
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
        maxWidth: 800,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9"
    }
}));

export const AbilitySmall = (props: IAbilitySmall) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else if (e.shiftKey) {
            props.modFunctions.addAbility({ ...props.abilityData, name: "new " + props.abilityData.name, displayName: "new " + props.abilityData.name });
        } else if (e.altKey) {
            props.modFunctions.removeAbility(props.abilityData);
        }
    };

    const displaySum = abilityDisplaySum(props.abilityData.calculatedSum, props.showSign);

    return (
        <>
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
                        {props.abilityData.notes.length > 0 && <Divider variant="fullWidth" sx={{ bgcolor: "black", margin: "8px" }} />}
                        {props.abilityData.notes.map((note, i) => (
                            <p key={i}>{note}</p>
                        ))}
                    </React.Fragment>
                }
            >
                <Button onClick={handleClick} sx={{ padding: 0 }} color={props.color}>
                    {props.showMod ? `${displaySum} ${getAbilityMod(props.abilityData.calculatedSum)}` : displaySum}
                </Button>
            </HtmlTooltip>
            {modalOpen && (
                <AbilityModal
                    abilityData={props.abilityData}
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSave={(a) => {
                        if (a.name != props.abilityData.name) {
                            props.modFunctions.replaceAbility(props.abilityData, a);
                            return;
                        }
                        memCopy(props.abilityData, a);
                        props.modFunctions.recalc();
                    }}
                ></AbilityModal>
            )}
        </>
    );
};
