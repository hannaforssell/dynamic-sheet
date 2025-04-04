import { Grid2 } from "@mui/material";
import { KnownSpell } from "../../models/characterSheet/KnownSpell";
import { IModFunctions } from "../../models/IModFunctions";
import { SpellKnownCollection } from "../SpellKnownCollection";
import { SpellPreparedCollection } from "../SpellPreparedCollection";
import { PreparedSpell } from "../../models/characterSheet/PreparedSpell";
import { useState } from "react";
import { AbilityData } from "../../models/characterSheet/AbilityData";
import { QualityData } from "../../models/characterSheet/QualityData";
import { TableData } from "../../models/characterSheet/TableData";
import { AbilityCollection } from "../collections/AbilityCollection";

interface ISpellTab {
    spellsKnown: KnownSpell[];
    spellsPrepared: PreparedSpell[];
    spellSlotsData: [AbilityData[], QualityData[], TableData[]];
    casterLevelData: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const SpellTab = (props: ISpellTab) => {
    const [bitFlip, setBitFlip] = useState(false);

    const [spellSlotsAbilities] = props.spellSlotsData;
    const [casterLevelAbilities] = props.casterLevelData;

    const prepareSpell = (spell: KnownSpell) => {
        props.spellsPrepared.push({ ...spell } as PreparedSpell);
        setBitFlip(!bitFlip);
    };

    return (
        <Grid2 container justifyContent={"space-between"} height={"85vh"}>
            <Grid2 size={2} sx={{ display: "flex", justifyContent: "center" }} alignItems="center">
                <AbilityCollection abilities={casterLevelAbilities} modFunctions={props.modFunctions}></AbilityCollection>
            </Grid2>
            <Grid2 size={4}>
                <SpellPreparedCollection
                    spells={props.spellsPrepared}
                    spellSlotsAbilities={spellSlotsAbilities}
                    modFunctions={props.modFunctions}
                ></SpellPreparedCollection>
            </Grid2>
            <Grid2 size={3.5}>
                <SpellKnownCollection spells={props.spellsKnown} modFunctions={props.modFunctions} prepareSpell={prepareSpell}></SpellKnownCollection>
            </Grid2>
        </Grid2>
    );
};
