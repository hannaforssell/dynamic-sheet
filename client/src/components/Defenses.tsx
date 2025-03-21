import { Box } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";

interface IDefenses {
    data: [AbilityData[], QualityData[], TableData[]];
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}

export const Defenses = (props: IDefenses) => {
    const [abilities, qualities] = props.data;

    return (
        <Box sx={{ width: "100%" }}>
            <AbilityCollection abilities={abilities} editMode={false} removeAbility={props.removeAbility}></AbilityCollection>
            <QualityCollection
                qualities={qualities}
                editMode={false}
                removeQuality={props.removeQuality}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            ></QualityCollection>
        </Box>
    );
};
