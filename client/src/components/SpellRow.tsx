import {
    Box,
    Checkbox,
    Collapse,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    SxProps,
    TableCell,
    TableRow,
    Theme,
    Typography
} from "@mui/material";
import { JSX, useState } from "react";
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
import Sugar from "sugar";
import { ISpell } from "../models/characterSheet/ISpell";
import { PreparedSpell } from "../models/characterSheet/PreparedSpell";
import { PermanentSpell } from "../models/characterSheet/PermanentSpell";

interface ISpellRow {
    spell: ISpell;
    open: boolean;
    toggleOpen(): void;
    prepareSpell?(spell: ISpell): void;
    duplicateSpell(spell: ISpell): void;
    deleteSpell(spell: ISpell): void;
    modFunctions: IModFunctions;
}

export const SpellRow = (props: ISpellRow) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);
    const [contextMenu, setContextMenu] = React.useState<IPos | null>(null);

    const [bitFlip, setBitFlip] = useState(false);

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

    let jsxMenuItems: JSX.Element[] = [];

    const preparedSpell = props.spell as PreparedSpell;
    const permanentSpell = props.spell as PermanentSpell;

    if ("cast" in props.spell) {
        jsxMenuItems = [
            <MenuItem key="cast">
                <FormControlLabel
                    control={
                        <Checkbox
                            name="cast"
                            checked={preparedSpell.cast}
                            onChange={() => {
                                preparedSpell.cast = !preparedSpell.cast;
                                handleContextMenuClose();
                            }}
                        />
                    }
                    label="Cast"
                />
            </MenuItem>,
            <MenuItem key="alwaysCast">
                <FormControlLabel
                    control={
                        <Checkbox
                            name="alwaysCast"
                            checked={preparedSpell.alwaysCast}
                            onChange={() => {
                                preparedSpell.alwaysCast = !preparedSpell.alwaysCast;
                                preparedSpell.cast = preparedSpell.alwaysCast;
                                handleContextMenuClose();
                            }}
                        />
                    }
                    label="Always Cast"
                />
            </MenuItem>,
            <MenuItem key="active">
                <FormControlLabel
                    control={
                        <Checkbox
                            name="active"
                            checked={preparedSpell.active}
                            onChange={() => {
                                preparedSpell.active = !preparedSpell.active;
                                handleContextMenuClose();
                            }}
                        />
                    }
                    label="Active"
                />
            </MenuItem>
        ];
    }

    const menuItems = new Map();

    if (props.prepareSpell !== undefined) {
        menuItems.set("Prepare", () => props.prepareSpell!(props.spell));
    }

    menuItems.set("Open", () => setModalOpen(!modalOpen));
    menuItems.set("Clone", () => props.duplicateSpell(props.spell));
    menuItems.set("Delete", () => props.deleteSpell(props.spell));

    const cellSx: SxProps<Theme> = { padding: 0, border: "unset" };

    return (
        <>
            {contextMenu && <ContextMenu jsxMenuItems={jsxMenuItems} menuItems={menuItems} position={contextMenu} onClose={handleContextMenuClose} />}
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
                    <Typography
                        fontSize="small"
                        sx={preparedSpell.cast ? { textDecoration: "line-through" } : {}}
                        color={preparedSpell.alwaysCast ? "textDisabled" : ""}
                        display="inline"
                    >
                        {props.spell.name}
                    </Typography>
                    {preparedSpell.active && (
                        <Typography fontSize="small" display="inline">
                            {" (A)"}
                        </Typography>
                    )}
                </TableCell>
                {"casterLevel" in props.spell && (
                    <TableCell sx={cellSx} component="th" scope="row">
                        <Typography fontSize="small" display="inline">
                            CL: {permanentSpell.casterLevel}
                        </Typography>
                    </TableCell>
                )}
                <TableCell sx={cellSx} align="right" component="th" scope="row">
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
