import { AbilityData } from "../models/AbilityData";
import { Ability } from "./Ability";

interface SkillProps {
    abilityData: AbilityData;
  }

export const Skill = (props: SkillProps) => {
    return (
        <div className="skillWrapper">
            <input type="checkbox" />
            <Ability
                abilityData={props.abilityData}
            />
        </div>
    );
}