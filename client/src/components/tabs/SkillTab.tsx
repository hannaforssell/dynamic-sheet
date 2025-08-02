import { IModFunctions } from "../../models/IModFunctions";
import { useState } from "react";
import { AbilityData } from "../../models/characterSheet/AbilityData";
import { QualityData } from "../../models/characterSheet/QualityData";
import { TableData } from "../../models/characterSheet/TableData";
import { AbilityCollection } from "../collections/AbilityCollection";
import { Box, Grid2, Typography } from "@mui/material";
import { QualityCollection } from "../collections/QualityCollection";

interface ISkillTab {
    skillData: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const SkillTab = (props: ISkillTab) => {
    const [skillAbilities, skillQualities] = props.skillData;

    const skillPoints = skillAbilities
        .flatMap((a) => a.abilityMods.filter((aM) => "ranks".localeCompare(aM.type, undefined, { sensitivity: "accent" }) === 0))
        .reduce((acc, curr) => acc + parseInt(curr.value), 0);

    return (
        <>
            <Grid2 container>
                <Grid2 size={6} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Skill points: {skillPoints}</Typography>
                    <QualityCollection qualities={skillQualities} modFunctions={props.modFunctions} sx={{ paddingTop: 5 }} />
                </Grid2>
                <Grid2 size={6}>
                    <Box>
                        <AbilityCollection abilities={skillAbilities} modFunctions={props.modFunctions} sx={{ maxHeight: "88vh", flexWrap: "wrap" }} />
                    </Box>
                </Grid2>
            </Grid2>
        </>
    );
};

{
    /* <label
                style={{
                    textAlign: "left",
                    display: "grid",
                    gridTemplateColumns: "150px 180px"
                }}
            >
                <span>Skillpoints spent</span>
                <div>sum</div>
            </label> */
}
