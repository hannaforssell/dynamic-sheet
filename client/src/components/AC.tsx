import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";
import { AbilityCollection } from "./AbilityCollection";

interface IAC {
    data: [AbilityData[], QualityData[], TableData[]];
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}

export const AC = (props: IAC) => {
    const [abilities] = props.data;

    return <AbilityCollection abilities={abilities} editMode={props.editMode} removeAbility={props.removeAbility}></AbilityCollection>;
};
