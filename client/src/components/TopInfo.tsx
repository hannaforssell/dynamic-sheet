import { Box } from "@mui/material";
import { Quality } from "./Quality";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import React from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { IModFunctions } from "../models/IModFunctions";

interface IBasicInfo {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const TopInfo = (props: IBasicInfo) => {
    const [abilities, qualities, tables] = props.data;

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {qualities.map((quality, i) => {
                return (
                    <React.Fragment key={i}>
                        {i === 3 || i === 7 ? <Box key={i + "Box"} sx={{ flexBasis: "100%", heigh: 0 }}></Box> : <></>}
                        <Quality key={quality.name} qualityData={quality} modFunctions={props.modFunctions}></Quality>
                    </React.Fragment>
                );
            })}
            {abilities.map((ability) => (
                <Ability key={ability.name} abilityData={ability} modFunctions={props.modFunctions}></Ability>
            ))}
            {tables.map((table) => (
                <TableDisplay key={table.name} tableData={table} />
            ))}
        </Box>
    );
};
