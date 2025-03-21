import { Box } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";
import { IModFunctions } from "../models/IModFunctions";

interface IMisc {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const Misc = (props: IMisc) => {
    const [abilities, qualities] = props.data;

    return (
        <Box>
            <AbilityCollection abilities={abilities} modFunctions={props.modFunctions}></AbilityCollection>
            <QualityCollection qualities={qualities} modFunctions={props.modFunctions}></QualityCollection>
        </Box>
    );
};
