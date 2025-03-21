import { Grid2 } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";

interface IOffenseTab {
    data: [AbilityData[], QualityData[], TableData[]];
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}

export const OffenseTab = (props: IOffenseTab) => {
    const [abilities, qualities] = props.data;

    return (
        <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
            <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                <AbilityCollection abilities={abilities} editMode={false} removeAbility={props.removeAbility}></AbilityCollection>
                <QualityCollection qualities={qualities} editMode={false} removeQuality={props.removeQuality}></QualityCollection>
            </Grid2>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
        </Grid2>
    );
};
