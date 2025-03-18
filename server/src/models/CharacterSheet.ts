// import { model, Schema } from "mongoose";

// import { AbilityData } from "./AbilityData";
// import { Effect } from "./Effect";
// import { ItemData } from "./ItemData";
// import { QualityData } from "./QualityData";
// import { TableData } from "./TableData";

// export interface ICharacterSheet {
//   _id: string;
//   qualityData: Map<string, QualityData>;
//   abilityData: Map<string, AbilityData>;
//   classSkills: Set<string>;
//   itemData: Map<string, ItemData>;
//   tableData: Map<string, TableData>;
//   effects: Effect[];
//   imageLink: string;
// }

// export const characterSheetSchema = new Schema<ICharacterSheet>({
//    qualityData: { type: Map, of: Object, required: true },
//   // abilityData: { type: Map<string, AbilityData>, required: true },
//   // classSkills: { type: Set<string>, required: true },
//   // itemData: { type: Map<string, ItemData>, required: true },
//   // tableData: { type: Map<string, TableData>, required: true },
//   // effects: { type: [Effect], required: true },
//   imageLink: { type: String, required: true }
// }, { collection: "characterSheet" });

// export const CharacterSheet = model<ICharacterSheet>('CharacterSheet', characterSheetSchema);