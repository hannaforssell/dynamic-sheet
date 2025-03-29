import { Box, Collapse, IconButton, List, ListItem, ListItemText, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import { SpecialAbility } from "../models/characterSheet/SpecialAbility";
import { useState } from "react";
import { SpecialAbilityModal } from "./modals/SpecialAbilityModal";
import { memCopy } from "../helpers/memCopy";
import { EffectModal } from "./modals/EffectModal";
import { Effect } from "../models/characterSheet/Effect";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Sugar from "sugar";
import { abilityDisplaySum, textToNode } from "../helpers/stylingHelper";
import React from "react";
import { IModFunctions } from "../models/IModFunctions";

interface ISpecialAbilityRow {
    specialAbility: SpecialAbility;
    open: boolean;
    toggleOpen(): void;
    duplicateSpecialAbility(specialAbility: SpecialAbility): void;
    deleteSpecialAbility(specialAbility: SpecialAbility): void;
    modFunctions: IModFunctions;
}

const doubleBracketsRegex = new RegExp(/{{.+?}}/g);

export const SpecialAbilityRow = (props: ISpecialAbilityRow) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);

    const [bitFlip, setBitFlip] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLTableRowElement | HTMLTableCellElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else if (e.shiftKey) {
            props.duplicateSpecialAbility(props.specialAbility);
        } else if (e.altKey) {
            props.deleteSpecialAbility(props.specialAbility);
        }
    };

    const handleEffectClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, effect: Effect) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalEffect(effect);
        } else if (e.shiftKey) {
            props.specialAbility.effects.push({ ...effect });
            props.modFunctions.recalc();
            setBitFlip(!bitFlip);
        } else if (e.altKey) {
            Sugar.Array.remove(props.specialAbility.effects, (e) => effect === e);
            props.modFunctions.recalc();
            setBitFlip(!bitFlip);
        }
    };

    return (
        <>
            <TableRow onClick={(e) => handleClick(e)}>
                <TableCell sx={{ border: "unset" }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                            props.toggleOpen();
                        }}
                    >
                        {props.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ border: "unset" }} component="th" scope="row">
                    {props.specialAbility.name}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    {props.specialAbility.sourceText}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    Lvl {props.specialAbility.levelAquired}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    {props.specialAbility.type}
                </TableCell>
            </TableRow>
            <TableRow
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: "unset"
                    }
                }}
            >
                <TableCell onClick={(e) => handleClick(e)} style={{ fontSize: 12, paddingBottom: 0, paddingTop: 0, whiteSpace: "pre-wrap" }} colSpan={6}>
                    <Collapse in={props.open} timeout="auto">
                        <Box sx={{ marginLeft: 5, maxWidth: "60vw", marginBottom: 2 }}>
                            {textToNode(props.specialAbility.originalText, doubleBracketsRegex, (match) => {
                                const ability = props.specialAbility.textModifiers.get(match);
                                if (!ability) {
                                    return "";
                                }
                                return (
                                    <Tooltip
                                        key={ability.name}
                                        title={
                                            <React.Fragment>
                                                <Typography color="inherit">{ability.abilityMods[0].value}</Typography>
                                            </React.Fragment>
                                        }
                                    >
                                        <span style={{ backgroundColor: "gray", borderRadius: "3px", padding: "0px 3px 0px 3px" }}>
                                            <b>{abilityDisplaySum(ability.calculatedSum)}</b>
                                        </span>
                                    </Tooltip>
                                );
                            })}
                            {props.specialAbility.effects.length > 0 && (
                                <List dense sx={{ paddingBottom: 0 }}>
                                    {props.specialAbility.effects.map((effect, i) => (
                                        <ListItem key={i} onClick={(event) => handleEffectClick(event, effect)}>
                                            {effect.enabled ? (
                                                <CheckIcon fontSize="small" sx={{ paddingRight: 1 }} />
                                            ) : (
                                                <CloseIcon fontSize="small" sx={{ paddingRight: 1 }} />
                                            )}

                                            <ListItemText
                                                primary={effect.name}
                                                secondary={effect.exec}
                                                slotProps={{ primary: { fontSize: 12 }, secondary: { marginLeft: 2, fontSize: 10 } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

            {modalOpen && (
                <SpecialAbilityModal
                    open={modalOpen}
                    ability={props.specialAbility}
                    onClose={() => setModalOpen(false)}
                    onSave={(updated) => {
                        memCopy(props.specialAbility, updated);
                        props.modFunctions.recalc();
                    }}
                />
            )}

            {modalEffect !== null && (
                <EffectModal
                    open={modalEffect !== null}
                    effect={modalEffect}
                    onClose={() => setModalEffect(null)}
                    onSave={(updated, original) => {
                        memCopy(original, updated);
                        props.modFunctions.recalc();
                    }}
                />
            )}
        </>
    );
};
