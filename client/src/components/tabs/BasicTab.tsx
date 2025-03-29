import { Box, Grid2 } from "@mui/material";
import { AbilityData } from "../../models/characterSheet/AbilityData";
import { QualityData } from "../../models/characterSheet/QualityData";
import { TableData } from "../../models/characterSheet/TableData";
import { AbilityCollection } from "../collections/AbilityCollection";
import { QualityCollection } from "../collections/QualityCollection";
import { IModFunctions } from "../../models/IModFunctions";
import React from "react";
import { Quality } from "../collections/Quality";
import { Portrait } from "../Portrait";
import { TableCollection } from "../collections/TableCollection";

interface IBasicTab {
    topInfoData: [AbilityData[], QualityData[], TableData[]];
    abilityScoreData: [AbilityData[], QualityData[], TableData[]];
    experienceData: [AbilityData[], QualityData[], TableData[]];
    imageLink: string;
    modFunctions: IModFunctions;
}

export const BasicTab = (props: IBasicTab) => {
    const [topInfoAbilities, topInfoQualities] = props.topInfoData;
    const [abilityScoreAbilities] = props.abilityScoreData;
    const [experienceAbilities, experienceQualities, experienceTables] = props.experienceData;

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {topInfoQualities.map((quality, i) => {
                    return (
                        <React.Fragment key={i}>
                            {i === 3 || i === 7 ? <Box key={i + "Box"} sx={{ flexBasis: "100%", heigh: 0 }}></Box> : <></>}
                            <Quality key={quality.name} qualityData={quality} modFunctions={props.modFunctions}></Quality>
                        </React.Fragment>
                    );
                })}
                <AbilityCollection abilities={topInfoAbilities} modFunctions={props.modFunctions} showMod={true}></AbilityCollection>
            </Box>
            <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
                <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                    <AbilityCollection abilities={abilityScoreAbilities} modFunctions={props.modFunctions} showMod={true}></AbilityCollection>
                </Grid2>
                <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                    <Portrait imageLink={props.imageLink} />
                </Grid2>
                <Grid2 size={3.5} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <AbilityCollection abilities={experienceAbilities} modFunctions={props.modFunctions}></AbilityCollection>
                    <QualityCollection qualities={experienceQualities} modFunctions={props.modFunctions}></QualityCollection>
                    <TableCollection tables={experienceTables} modFunctions={props.modFunctions}></TableCollection>
                </Grid2>
            </Grid2>
        </>
    );
};
