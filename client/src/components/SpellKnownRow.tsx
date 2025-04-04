import { Box, Collapse, IconButton, List, ListItem, ListItemText, SxProps, TableCell, TableRow, Theme } from "@mui/material";
import { KnownSpell } from "../models/characterSheet/KnownSpell";
import { useState } from "react";
import { Effect } from "../models/characterSheet/Effect";
import React from "react";
import { IModFunctions } from "../models/IModFunctions";
import { SpellDialog } from "./modals/SpellDialog";
import { memCopy } from "../helpers/memCopy";
import { EffectDialog } from "./modals/EffectDialog";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ContextMenu, IPos } from "./ContextMenu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ISpellKnownRow {
    spell: KnownSpell;
    open: boolean;
    toggleOpen(): void;
    duplicateSpell(spell: KnownSpell): void;
    deleteSpell(spell: KnownSpell): void;
    prepareSpell(spell: KnownSpell): void;
    modFunctions: IModFunctions;
}

export const SpellKnownRow = (props: ISpellKnownRow) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);
    const [contextMenu, setContextMenu] = React.useState<IPos | null>(null);

    const [bitFlip, setBitFlip] = useState(false);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(contextMenu === null ? { x: event.clientX, y: event.clientY } : null);
    };

    const handleContextMenuClose = () => {
        setContextMenu(null);
    };

    const handleEffectClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, effect: Effect) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalEffect(effect);
        } else if (e.shiftKey) {
            props.spell.effects.push({ ...effect });
            props.modFunctions.recalc();
            setBitFlip(!bitFlip);
        } else if (e.altKey) {
            Sugar.Array.remove(props.spell.effects, (e) => effect === e);
            props.modFunctions.recalc();
            setBitFlip(!bitFlip);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLTableRowElement | HTMLTableCellElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else if (e.shiftKey) {
            props.duplicateSpell(props.spell);
        } else if (e.altKey) {
            props.deleteSpell(props.spell);
        }
    };

    const menuItems: Map<string, (() => void) | null> = new Map([
        ["Prepare", () => props.prepareSpell(props.spell)],
        ["", null],
        ["Open", () => setModalOpen(!modalOpen)],
        ["Clone", () => props.duplicateSpell(props.spell)],
        ["Delete", () => props.deleteSpell(props.spell)]
    ]);

    const cellSx: SxProps<Theme> = { padding: 0, border: "unset" };

    return (
        <>
            {contextMenu && <ContextMenu menuItems={menuItems} position={contextMenu} onClose={handleContextMenuClose} />}
            <TableRow onClick={(e) => handleClick(e)} onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
                <TableCell sx={cellSx} width={50}>
                    {props.spell.effects.length > 0 && (
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => {
                                props.toggleOpen();
                            }}
                        >
                            {props.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                        </IconButton>
                    )}
                </TableCell>
                <TableCell sx={cellSx} component="th" scope="row">
                    {props.spell.name}
                </TableCell>
                <TableCell sx={cellSx} align="right">
                    <OpenInNewIcon
                        sx={{ verticalAlign: "middle" }}
                        fontSize="small"
                        onClick={() => {
                            window.open(props.spell.infoUrl);
                        }}
                    />
                </TableCell>
            </TableRow>
            <TableRow
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: "unset"
                    }
                }}
            >
                <TableCell
                    onClick={(e) => handleClick(e)}
                    style={{ fontSize: 12, paddingBottom: 0, paddingTop: 0, whiteSpace: "pre-wrap", border: "unset" }}
                    colSpan={6}
                >
                    <Collapse in={props.open} timeout="auto">
                        <Box sx={{ marginLeft: 5, maxWidth: "60vw", marginBottom: 2 }}>
                            {props.spell.effects.length > 0 && (
                                <List dense sx={{ paddingBottom: 0 }}>
                                    {props.spell.effects.map((effect, i) => (
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
                <SpellDialog
                    open={modalOpen}
                    spell={props.spell}
                    onClose={() => setModalOpen(false)}
                    onSave={(updated) => {
                        memCopy(props.spell, updated);
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
