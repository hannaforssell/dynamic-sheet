import { Box } from "@mui/material";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";
import { QualityCollection } from "./QualityCollection";
import { IModFunctions } from "../models/IModFunctions";

interface IDefenses {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const Defenses = (props: IDefenses) => {
    const [abilities, qualities] = props.data;

    return (
        <Box sx={{ width: "100%" }}>
            <AbilityCollection abilities={abilities} modFunctions={props.modFunctions}></AbilityCollection>
            <QualityCollection
                qualities={qualities}
                modFunctions={props.modFunctions}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            ></QualityCollection>
        </Box>
    );
};
