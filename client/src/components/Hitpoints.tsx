import { Box } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./collections/AbilityCollection";
import { QualityCollection } from "./collections/QualityCollection";
import { IModFunctions } from "../models/IModFunctions";

interface IHitpoints {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const Hitpoints = (props: IHitpoints) => {
    const [abilities, qualities] = props.data;

    return (
        <Box sx={{ display: "flex" }}>
            <AbilityCollection abilities={abilities} modFunctions={props.modFunctions}></AbilityCollection>
            <QualityCollection qualities={qualities} modFunctions={props.modFunctions}></QualityCollection>
        </Box>
    );
};
