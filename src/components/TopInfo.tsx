import { Box } from "@mui/material";
import { ISheetData } from "../models/ISheetData";
import { Quality } from "./Quality";
import { groupData } from "../helpers/dataGrouper";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import React from "react";

const groupName = "Top Info";

interface IBasicInfo {
  sheetData: ISheetData;
}

export const TopInfo = (props: IBasicInfo) => {
  const [abilities, qualities, tables] = groupData(props.sheetData, groupName)

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {qualities.map((quality, i) => {
        return <React.Fragment key={i}>{ i % 3 == 0 ? <Box key={i + "Box"} sx={{ flexBasis: "100%", heigh: 0 }}></Box> : <></> }<Quality key={quality.name} qualityData={quality}></Quality></React.Fragment>
      })}
      {abilities.map(ability => <Ability key={ability.name} abilityData={ability}></Ability>)}
      {tables.map(table => <TableDisplay key={table.name} tableData={table}/>)}
    </Box>
  );
};
