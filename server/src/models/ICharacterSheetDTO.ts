import { model, Schema } from "mongoose"

import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { TableData } from "./TableData";

export interface ICharacterSheetDTO {
  qualityData: [string, QualityData][];
  abilityData: [string, AbilityData][];
  classSkills: string[];
  itemData: [string, ItemData][];
  tableData: [string, TableData][];
  effects: Effect[];
  imageLink: string;
}

export const characterSheetSchema = new Schema<ICharacterSheetDTO>({
  qualityData: { type: [Object], required: true },
  abilityData: { type: [Object], required: true },
  classSkills: { type: [String], required: true },
  itemData: { type: [Object], required: true },
  tableData: { type:[Object], required: true },
  effects: { type: [Object], required: true },
  imageLink: { type: String, required: true }
}, { collection: "characterSheet" });

export const CharacterSheet = model<ICharacterSheetDTO>('CharacterSheet', characterSheetSchema);