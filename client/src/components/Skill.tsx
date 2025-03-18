import { AbilityData } from "../models/characterSheet/AbilityData";
import { Ability } from "./Ability";

interface SkillProps {
    abilityData: AbilityData;
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
}

export const Skill = (props: SkillProps) => {
    return (
        <div className="skillWrapper">
            <input type="checkbox" />
            <Ability
                abilityData={props.abilityData}
                editMode={props.editMode}
                removeAbility={props.removeAbility}
            />
        </div>
    );
}