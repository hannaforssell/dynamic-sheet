import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { Ability } from "./collections/Ability";
import { Quality } from "./collections/Quality";
import { TableDisplay } from "./collections/TableDisplay";
import { TableData } from "../models/characterSheet/TableData";
import { Box } from "@mui/material";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { IModFunctions } from "../models/IModFunctions";

interface IPropertyGroupProps {
    group: DataGroupType;
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const PropertyGroup = (props: IPropertyGroupProps) => {
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
                    <TableDisplay key={table.name} tableData={table} modFunctions={props.modFunctions} />
                </Box>
            ))}
        </Box>
    );
};
