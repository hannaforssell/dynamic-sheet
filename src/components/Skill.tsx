import { AbilityData } from "../models/AbilityData";
import { Ability } from "./Ability";

interface SkillProps {
    name: string;
    abilityData: AbilityData;
    onChangeAbility: (data: AbilityData) => void;
    calculate: () => void;
  }

export const Skill = (props: SkillProps) => {
    return (
        <div className="skillWrapper">
            <input type="checkbox" />
            <Ability
                abilityData={props.abilityData}
                onChangeAbility={props.onChangeAbility}
                calculate={props.calculate}
            />
        </div>
    );
}