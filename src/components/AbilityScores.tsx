import { Box } from "@mui/material";
import { ISheetData } from "../models/ISheetData";
import { Ability } from "./Ability";
import { groupData } from "../helpers/dataGrouper";

const groupName = "Ability Scores";

interface IAbilityScores {
  sheetData: ISheetData;
}

export const AbilityScores = (props: IAbilityScores) => {
  const [abilities, _q, _t] = groupData(props.sheetData, groupName)

  return (
    <Box>
      {abilities.map(ability =>
        <Box key={ability.name}>
          <Ability abilityData={ability}></Ability>
        </Box>)}
    </Box>
  );
};
