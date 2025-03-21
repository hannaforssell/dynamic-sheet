import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { IModFunctions } from "../models/IModFunctions";
import { AbilityCollection } from "./AbilityCollection";

interface IAbilityScores {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}
export const AbilityScores = (props: IAbilityScores) => {
    const [abilities] = props.data;

    return <AbilityCollection abilities={abilities} modFunctions={props.modFunctions} showMod={true}></AbilityCollection>;
};
