import { Box } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";

interface IMisc {
    data: [AbilityData[], QualityData[], TableData[]];
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}

export const Misc = (props: IMisc) => {
    const [abilities, qualities] = props.data;

    return (
        <Box>
            <AbilityCollection abilities={abilities} editMode={false} removeAbility={props.removeAbility}></AbilityCollection>
            <QualityCollection qualities={qualities} editMode={false} removeQuality={props.removeQuality}></QualityCollection>
        </Box>
    );
};
