import { Box } from "@mui/material";
import { Quality } from "./Quality";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { IModFunctions } from "../models/IModFunctions";

interface IExperienceInfo {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const ExperienceInfo = (props: IExperienceInfo) => {
    const [abilities, qualities, tables] = props.data;

    return (
        <Box
            sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}
        >
            {abilities.map((ability) => (
                <Box key={ability.name}>
                    <Ability key={ability.name} abilityData={ability} modFunctions={props.modFunctions}></Ability>
                </Box>
            ))}
            {qualities.map((quality) => (
                <Box key={quality.name}>
                    <Quality key={quality.name} qualityData={quality} modFunctions={props.modFunctions}></Quality>
                </Box>
            ))}
            {tables.map((table) => (
                <Box key={table.name}>
                    <TableDisplay key={table.name} tableData={table} />
                </Box>
            ))}
        </Box>
    );
};
