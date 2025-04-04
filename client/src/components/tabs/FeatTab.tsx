import { Modification } from "../../models/characterSheet/Modification";
import { IModFunctions } from "../../models/IModFunctions";
import { ModificationCollection } from "../ModificationCollection";

interface IFeatTab {
    modifications: Modification[];
    modFunctions: IModFunctions;
}

export const FeatTab = (props: IFeatTab) => {
    return <ModificationCollection modifications={props.modifications} modFunctions={props.modFunctions}></ModificationCollection>;
};
