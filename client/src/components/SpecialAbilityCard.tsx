import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid2, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { SpecialAbility } from "../models/characterSheet/SpecialAbility";
import { useState } from "react";
import { SpecialAbilityModal } from "./modals/SpecialAbilityModal";
import { memCopy } from "../helpers/memCopy";
import { EffectModal } from "./modals/EffectModal";
import { Effect } from "../models/characterSheet/Effect";
import { abilityDisplaySum, textToNode } from "../helpers/stylingHelper";
import React from "react";

interface ISpecialAbilityCard {
    specialAbility: SpecialAbility;
    duplicateSpecialAbility(specialAbility: SpecialAbility): void;
}

const doubleBracketsRegex = new RegExp(/{{.+?}}/g);

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9"
    }
}));

export const SpecialAbilityCard = (props: ISpecialAbilityCard) => {
    const [stateFlip, setStateFlip] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);
    const [showFull, setShowFull] = useState(false);
    const [showEffects, setShowEffects] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else if (e.shiftKey) {
            props.duplicateSpecialAbility(props.specialAbility);
        } else {
            setShowFull(!showFull);
        }
    };

    const handleEffectClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, effect: Effect) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalEffect(effect);
        } else if (e.shiftKey) {
            props.specialAbility.effects.push({ ...effect });
            setStateFlip(!stateFlip);
        } else {
            setShowFull(!showFull);
        }
    };

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Card variant="outlined">
                    <CardActionArea onClick={handleClick}>
                        <CardContent sx={{ whiteSpace: "pre-wrap" }}>
                            <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
                                <Grid2 size={6}>
                                    <Typography variant="subtitle1" component="div" display="inline" align="left">
                                        {props.specialAbility.name}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography gutterBottom sx={{ color: "text.secondary" }} display="inline" align="right" marginLeft="auto">
                                        {props.specialAbility.sourceText} - Lvl. {props.specialAbility.levelAquired}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={3} sx={{ display: "flex", justifyContent: "right" }}>
                                    <Typography gutterBottom sx={{ color: "text.secondary" }} display="inline" align="right" marginLeft="auto">
                                        ({props.specialAbility.type})
                                    </Typography>
                                </Grid2>
                            </Grid2>
                            {showFull && (
                                <Typography variant="inherit">
                                    {textToNode(props.specialAbility.originalText, doubleBracketsRegex, (match) => {
                                        const ability = props.specialAbility.textModifiers.get(match);
                                        if (!ability) {
                                            return "";
                                        }
                                        return (
                                            <HtmlTooltip
                                                key={ability.name}
                                                title={
                                                    <React.Fragment>
                                                        <Typography color="inherit">{ability.abilityMods[0].value}</Typography>
                                                    </React.Fragment>
                                                }
                                            >
                                                <span style={{ backgroundColor: "gray", borderRadius: "3px", padding: "0px 3px 0px 3px" }}>
                                                    {abilityDisplaySum(ability.calculatedSum)}
                                                </span>
                                            </HtmlTooltip>
                                        );
                                    })}
                                </Typography>
                            )}
                        </CardContent>
                    </CardActionArea>
                    {showFull && (
                        <CardActions>
                            <Button size="small" onClick={() => setShowEffects(!showEffects)}>
                                Effects
                            </Button>
                        </CardActions>
                    )}
                </Card>

                {showFull &&
                    showEffects &&
                    props.specialAbility.effects.map((effect) => (
                        <Card key={effect.name} variant="outlined" sx={{ margin: "0px 20px 0px 20px" }}>
                            <CardActionArea onClick={(event) => handleEffectClick(event, effect)}>
                                <CardContent sx={{ whiteSpace: "pre-wrap" }}>
                                    <Typography variant="h5" component="div" display="inline" align="left">
                                        {effect.name}
                                    </Typography>
                                    <Typography variant="body2">{effect.exec}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
            </Box>
            {modalEffect !== null && (
                <EffectModal
                    open={modalEffect !== null}
                    effect={modalEffect}
                    onClose={() => setModalEffect(null)}
                    onSave={(updated, original) => memCopy(original, updated)}
                />
            )}

            {modalOpen && (
                <SpecialAbilityModal
                    open={modalOpen}
                    ability={props.specialAbility}
                    onClose={() => setModalOpen(false)}
                    onSave={(updated) => memCopy(props.specialAbility, updated)}
                />
            )}
        </>
    );
};
