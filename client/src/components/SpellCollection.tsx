import { Box, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import { IModFunctions } from "../models/IModFunctions";
import { useState } from "react";
import Sugar from "sugar";
import { groupBy } from "lodash";
import React from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { AbilitySmall } from "./collections/AbilitySmall";
import { ISpell } from "../models/characterSheet/ISpell";
import { SpellRow } from "./SpellRow";

interface ISpellCollection {
    title: string;
    spells: ISpell[];
    spellSlotsAbilities?: AbilityData[];
    prepareSpell?(spell: ISpell): void;
    modFunctions: IModFunctions;
}

export const SpellCollection = (props: ISpellCollection) => {
    const spellGroups = groupBy(props.spells, "level");
    const [openStates] = useState(new Map<ISpell, boolean>());
    const [bitFlip, setBitFlip] = useState(false);

    const duplicateSpell = (spell: ISpell) => {
        props.spells.push({
            ...spell,
            effects: spell.effects.map((e) => {
                return { ...e };
            })
        });
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
    };

    const deleteSpell = (spell: ISpell) => {
        Sugar.Array.remove(props.spells, (sa) => sa === spell);
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
    };

    const spellSlotMap = new Map(props.spellSlotsAbilities?.map((a) => [a.name, a]));

    return (
        <>
            <Typography variant="subtitle1" align="center">
                {props.title}
            </Typography>
            <Box maxHeight="80vh" overflow={"auto"}>
                {Object.entries(spellGroups).map(([level, sG], i) => {
                    const sorted = sG.sort((a, b) => a.name.localeCompare(b.name));
                    const spellSlotAbility = spellSlotMap.get(`Lvl${level}Spells`);

                    return (
                        <React.Fragment key={i}>
                            <Box display="flex" flexDirection="row" paddingTop={3} paddingBottom={1}>
                                <Typography variant="subtitle2">Level {level}</Typography>
                                {spellSlotAbility && (
                                    <>
                                        <Typography
                                            variant="subtitle2"
                                            paddingLeft={3}
                                            marginTop="2px"
                                            color={sorted.length > (spellSlotAbility?.calculatedSum ?? 0) ? "error" : "inherit"}
                                        >
                                            {"\t"}
                                            {sorted.length} of
                                        </Typography>

                                        <AbilitySmall
                                            abilityData={spellSlotAbility}
                                            modFunctions={props.modFunctions}
                                            color={sorted.length > (spellSlotAbility?.calculatedSum ?? 0) ? "error" : "inherit"}
                                        ></AbilitySmall>
                                    </>
                                )}
                            </Box>
                            <TableContainer component={Paper}>
                                <Table aria-label="collapsible table" size="small">
                                    <TableBody>
                                        {sorted.map((spell, j) => {
                                            const open = openStates.get(spell);

                                            return (
                                                <SpellRow
                                                    key={j}
                                                    spell={spell}
                                                    open={open ?? false}
                                                    toggleOpen={() => {
                                                        openStates.set(spell, !(open ?? false));
                                                        setBitFlip(!bitFlip);
                                                    }}
                                                    prepareSpell={props.prepareSpell}
                                                    duplicateSpell={duplicateSpell}
                                                    deleteSpell={deleteSpell}
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
