import { Grid2 } from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { useState } from "react";
import { SpellCollection } from "../SpellCollection";
import { PermanentSpell } from "../../models/characterSheet/PermanentSpell";

interface IEffectTab {
    permanentSpells: PermanentSpell[];
    modFunctions: IModFunctions;
}

export const EffectTab = (props: IEffectTab) => {
    const [bitFlip, setBitFlip] = useState(false);

    return (
        <Grid2 container justifyContent={"space-between"} height={"85vh"}>
            <Grid2 size={4}></Grid2>
            <Grid2 size={4}>
                <SpellCollection title="Permanent Spells" spells={props.permanentSpells} modFunctions={props.modFunctions}></SpellCollection>
            </Grid2>
            <Grid2 size={4}></Grid2>
        </Grid2>
    );
};
