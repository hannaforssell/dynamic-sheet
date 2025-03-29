import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { IModFunctions } from "../models/IModFunctions";
import { AbilityCollection } from "./collections/AbilityCollection";

interface ISaves {
    data: [AbilityData[], QualityData[], TableData[]];
    modFunctions: IModFunctions;
}

export const Saves = (props: ISaves) => {
    const [abilities] = props.data;

    return <AbilityCollection abilities={abilities} modFunctions={props.modFunctions} showSign={true}></AbilityCollection>;
};
