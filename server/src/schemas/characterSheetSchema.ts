import { Schema, model } from "mongoose";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";

export const characterSheetSchema = new Schema<ICharacterSheet>(
  {
    qualityData: { type: Object, required: true },
    abilityData: { type: Object, required: true },
    classSkills: { type: Object, required: true },
    itemData: { type: Object, required: true },
    tableData: { type: Object, required: true },
    specialAbilities: { type: [Object] },
    feats: { type: [Object] },
    spellsKnown: { type: [Object], required: true },
    spellsPrepared: { type: [Object], required: true },
    permanentSpells: { type: [Object], required: true },
    effects: { type: [Object], required: true },
    imageLink: { type: String, required: true },
  },
  { collection: "characterSheet" }
);

export const CharacterSheetModel = model<ICharacterSheet>(
  "CharacterSheet",
  characterSheetSchema
);

// export interface ICharacterSheetDTO {
//   _id: mongoose.Types.ObjectId;
//   qualityData: [string, QualityData][];
//   abilityData: [string, AbilityData][];
//   classSkills: string[];
//   itemData: [string, ItemData][];
//   tableData: [string, TableData][];
//   specialAbilities: Modification[];
//   feats: Modification[];
//   spellsKnown: KnownSpell[];
//   spellsPrepared: PreparedSpell[];
//   permanentSpells: PermanentSpell[];
//   effects: Effect[];
//   imageLink: string;
// }
