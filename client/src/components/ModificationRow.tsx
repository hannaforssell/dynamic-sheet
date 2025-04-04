import { Box, Collapse, IconButton, List, ListItem, ListItemText, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import { Modification } from "../models/characterSheet/Modification";
import { useState } from "react";
import { memCopy } from "../helpers/memCopy";
import { EffectDialog } from "./modals/EffectDialog";
import { Effect } from "../models/characterSheet/Effect";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sugar from "sugar";
import { abilityDisplaySum, textToNode } from "../helpers/stylingHelper";
import React from "react";
import { IModFunctions } from "../models/IModFunctions";
import { ModificationModal } from "./modals/ModificationModal";

interface IModificationRow {
    modification: Modification;
    open: boolean;
    toggleOpen(): void;
    duplicateModification(modification: Modification): void;
    deleteModification(modification: Modification): void;
    modFunctions: IModFunctions;
}

const doubleBracketsRegex = new RegExp(/{{.+?}}/g);

export const ModificationRow = (props: IModificationRow) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);

    const [bitFlip, setBitFlip] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLTableRowElement | HTMLTableCellElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else if (e.shiftKey) {
            props.duplicateModification(props.modification);
        } else if (e.altKey) {
            props.deleteModification(props.modification);
        }
    };

    const handleEffectClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, effect: Effect) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalEffect(effect);
        } else if (e.shiftKey) {
            props.modification.effects.push({ ...effect });
            props.modFunctions.recalc();
            setBitFlip(!bitFlip);
        } else if (e.altKey) {
            Sugar.Array.remove(props.modification.effects, (e) => effect === e);
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
                    {props.modification.name}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    {props.modification.sourceText}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    {props.modification.levelAquired && <>Lvl {props.modification.levelAquired}</>}
                </TableCell>
                <TableCell sx={{ border: "unset" }} align="right">
                    {props.modification.type}
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
                            {textToNode(props.modification.originalText, doubleBracketsRegex, (match) => {
                                const ability = props.modification.textModifiers.get(match);
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
                            {props.modification.effects.length > 0 && (
                                <List dense sx={{ paddingBottom: 0 }}>
                                    {props.modification.effects.map((effect, i) => (
                                        <ListItem key={i} onClick={(event) => handleEffectClick(event, effect)}>
                                            <ListItemText
                                                primary={effect.enabled ? <>{effect.name}</> : <s>{effect.name}</s>}
                                                secondary={effect.enabled ? <>{effect.exec}</> : <s>{effect.exec}</s>}
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
                <ModificationModal
                    open={modalOpen}
                    ability={props.modification}
                    onClose={() => setModalOpen(false)}
                    onSave={(updated) => {
                        memCopy(props.modification, updated);
                        props.modFunctions.recalc();
                    }}
                />
            )}

            {modalEffect !== null && (
                <EffectDialog
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
