import { Box, Grid2 } from "@mui/material";
import { AbilityData } from "../../models/characterSheet/AbilityData";
import { QualityData } from "../../models/characterSheet/QualityData";
import { TableData } from "../../models/characterSheet/TableData";
import { AbilityCollection } from "../AbilityCollection";
import { QualityCollection } from "../QualityCollection";
import { IModFunctions } from "../../models/IModFunctions";

interface IOffenseTab {
    toHitData: [AbilityData[], QualityData[], TableData[]];
    casterLevelData: [AbilityData[], QualityData[], TableData[]];
    mobilityData: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const OffenseTab = (props: IOffenseTab) => {
    const [toHitAbilities, toHitQualities] = props.toHitData;
    const [casterLevelAbilities, casterLevelQualities] = props.casterLevelData;
    const [mobilityAbilities, mobilityQualities] = props.mobilityData;

    return (
        <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <AbilityCollection abilities={casterLevelAbilities} modFunctions={props.modFunctions}></AbilityCollection>
                    <QualityCollection qualities={casterLevelQualities} modFunctions={props.modFunctions}></QualityCollection>

                    <AbilityCollection abilities={toHitAbilities} modFunctions={props.modFunctions} showSign={true}></AbilityCollection>
                    <QualityCollection qualities={toHitQualities} modFunctions={props.modFunctions}></QualityCollection>

                    <AbilityCollection abilities={mobilityAbilities} modFunctions={props.modFunctions}></AbilityCollection>
                    <QualityCollection qualities={mobilityQualities} modFunctions={props.modFunctions}></QualityCollection>
                </Box>
            </Grid2>
            <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
        </Grid2>
    );
};
