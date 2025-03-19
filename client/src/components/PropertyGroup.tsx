import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { Ability } from "./Ability";
import { Quality } from "./Quality";
import { TableDisplay } from "./TableDisplay";
import { TableData } from "../models/characterSheet/TableData";
import { Box } from "@mui/material";
import { DataGroupType } from "../models/characterSheet/DataGroupType";

interface IPropertyGroupProps {
  group: DataGroupType;
  data: [AbilityData[], QualityData[], TableData[]];
  editMode: boolean;
  removeAbility(quality: AbilityData): void;
  removeQuality(quality: QualityData): void;
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
          <Ability
            key={ability.name}
            abilityData={ability}
            editMode={props.editMode}
            removeAbility={props.removeAbility}
          ></Ability>
        </Box>
      ))}
      {qualities.map((quality) => (
        <Box key={quality.name}>
          <Quality
            key={quality.name}
            qualityData={quality}
            editMode={props.editMode}
            removeQuality={props.removeQuality}
          ></Quality>
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
