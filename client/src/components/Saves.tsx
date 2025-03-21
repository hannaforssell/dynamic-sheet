import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";

interface ISaves {
    data: [AbilityData[], QualityData[], TableData[]];
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}

export const Saves = (props: ISaves) => {
    const [abilities] = props.data;

    return <AbilityCollection abilities={abilities} editMode={props.editMode} removeAbility={props.removeAbility} showSign={true}></AbilityCollection>;
};
