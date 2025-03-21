import { Box, Grid2 } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";
import { IModFunctions } from "../models/IModFunctions";

interface IOffenseTab {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const OffenseTab = (props: IOffenseTab) => {
    const [abilities, qualities] = props.data;

    return (
        <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
            <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                <AbilityCollection abilities={abilities} modFunctions={props.modFunctions}></AbilityCollection>
                <QualityCollection qualities={qualities} modFunctions={props.modFunctions}></QualityCollection>
            </Grid2>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
        </Grid2>
    );
};
