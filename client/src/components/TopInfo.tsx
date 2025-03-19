import { Box } from "@mui/material";
import { Quality } from "./Quality";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import React from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";

interface IBasicInfo {
  data: [AbilityData[], QualityData[], TableData[]];
  editMode: boolean;
  removeAbility(quality: AbilityData): void;
  removeQuality(quality: QualityData): void;
}

export const TopInfo = (props: IBasicInfo) => {
  const [abilities, qualities, tables] = props.data;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {qualities.map((quality, i) => {
        return (
          <React.Fragment key={i}>
            {i === 3 || i === 7 ? (
              <Box key={i + "Box"} sx={{ flexBasis: "100%", heigh: 0 }}></Box>
            ) : (
              <></>
            )}
            <Quality
              key={quality.name}
              qualityData={quality}
              editMode={props.editMode}
              removeQuality={props.removeQuality}
            ></Quality>
          </React.Fragment>
        );
      })}
      {abilities.map((ability) => (
        <Ability
          key={ability.name}
          abilityData={ability}
          editMode={props.editMode}
          removeAbility={props.removeAbility}
        ></Ability>
      ))}
      {tables.map((table) => (
        <TableDisplay key={table.name} tableData={table} />
      ))}
    </Box>
  );
};
