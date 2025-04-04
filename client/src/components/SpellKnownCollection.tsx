import { Box, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import { IModFunctions } from "../models/IModFunctions";
import { useState } from "react";

import Sugar from "sugar";
import { groupBy } from "lodash";
import { SpellKnownRow } from "./SpellKnownRow";
import { KnownSpell } from "../models/characterSheet/KnownSpell";
import React from "react";

interface ISpellKnownCollection {
    spells: KnownSpell[];
    modFunctions: IModFunctions;
    prepareSpell(spell: KnownSpell): void;
}

export const SpellKnownCollection = (props: ISpellKnownCollection) => {
    const [openStates] = useState(new Map<KnownSpell, boolean>());

    const spellGroups = groupBy(props.spells, "level");
    const [bitFlip, setBitFlip] = useState(false);

    const duplicateSpell = (spell: KnownSpell) => {
        props.spells.push({
            ...spell,
            effects: spell.effects.map((e) => {
                return { ...e };
            })
        });
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
    };

    const deleteSpell = (spell: KnownSpell) => {
        Sugar.Array.remove(props.spells, (sa) => sa === spell);
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
    };

    return (
        <>
            <Typography variant="subtitle1" align="center">
                Spells Known
            </Typography>
            <Box maxHeight="80vh" overflow={"auto"}>
                {Object.entries(spellGroups).map(([level, sG], i) => {
                    const sorted = sG.sort((a, b) => a.name.localeCompare(b.name));

                    return (
                        <React.Fragment key={i}>
                            <Typography variant="subtitle2" paddingTop={3} paddingBottom={1}>
                                Level {level}
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="collapsible table" size="small">
                                    <TableBody>
                                        {sorted.map((spell, i) => {
                                            const open = openStates.get(spell);

                                            return (
                                                <SpellKnownRow
                                                    key={i}
                                                    spell={spell}
                                                    open={open ?? false}
                                                    toggleOpen={() => {
                                                        openStates.set(spell, !(open ?? false));
                                                        setBitFlip(!bitFlip);
                                                    }}
                                                    duplicateSpell={duplicateSpell}
                                                    deleteSpell={deleteSpell}
                                                    prepareSpell={props.prepareSpell}
                                                    modFunctions={props.modFunctions}
                                                />
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </React.Fragment>
                    );
                })}
            </Box>
        </>
    );
};
