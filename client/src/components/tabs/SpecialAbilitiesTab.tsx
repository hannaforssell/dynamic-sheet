import { Modification } from "../../models/characterSheet/Modification";
import { IModFunctions } from "../../models/IModFunctions";
import { ModificationCollection } from "../ModificationCollection";

interface ISpecialAbilities {
    modifications: Modification[];
    modFunctions: IModFunctions;
}

export const SpecialAbilitiesTab = (props: ISpecialAbilities) => {
    return <ModificationCollection modifications={props.modifications} modFunctions={props.modFunctions}></ModificationCollection>;
};
