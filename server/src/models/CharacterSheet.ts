import { model, Schema } from "mongoose";

import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { TableData } from "./TableData";

export interface ICharacterSheet {
  _id: string;
  qualityData: Map<string, QualityData>;
  abilityData: Map<string, AbilityData>;
  classSkills: Set<string>;
  itemData: Map<string, ItemData>;
  tableData: Map<string, TableData>;
  effects: Effect[];
  imageLink: string;
}

export const characterSheetSchema = new Schema<ICharacterSheet>({
  imageLink: { type: String, required: true }
}, { collection: "characterSheet" });

export const CharacterSheet = model<ICharacterSheet>('CharacterSheet', characterSheetSchema);