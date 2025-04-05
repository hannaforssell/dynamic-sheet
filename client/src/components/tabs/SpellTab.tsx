import { Grid2 } from "@mui/material";
import { KnownSpell } from "../../models/characterSheet/KnownSpell";
import { IModFunctions } from "../../models/IModFunctions";
import { PreparedSpell } from "../../models/characterSheet/PreparedSpell";
import { useState } from "react";
import { AbilityData } from "../../models/characterSheet/AbilityData";
import { QualityData } from "../../models/characterSheet/QualityData";
import { TableData } from "../../models/characterSheet/TableData";
import { AbilityCollection } from "../collections/AbilityCollection";
import { SpellCollection } from "../SpellCollection";

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
        props.spellsPrepared.push({ ...spell, cast: false, alwaysCast: false, active: false } as PreparedSpell);
        setBitFlip(!bitFlip);
    };

    return (
        <Grid2 container justifyContent={"space-between"} height={"85vh"}>
            <Grid2 size={2} sx={{ display: "flex", justifyContent: "center" }} alignItems="center">
                <AbilityCollection abilities={casterLevelAbilities} modFunctions={props.modFunctions}></AbilityCollection>
            </Grid2>
            <Grid2 size={4}>
                <SpellCollection
                    title="Spells Prepared"
                    spells={props.spellsPrepared}
                    spellSlotsAbilities={spellSlotsAbilities}
                    prepareSpell={prepareSpell}
                    modFunctions={props.modFunctions}
                ></SpellCollection>
            </Grid2>
            <Grid2 size={3.5}>
                <SpellCollection
                    title="Spells Known"
                    spells={props.spellsKnown}
                    prepareSpell={prepareSpell}
                    modFunctions={props.modFunctions}
                ></SpellCollection>
            </Grid2>
        </Grid2>
    );
};
