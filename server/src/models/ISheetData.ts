import { model, Schema } from "mongoose";

export interface ICharacterSheet {
  imageLink: string;
}

export const characterSheetSchema = new Schema<ICharacterSheet>({
  imageLink: { type: String, required: true }
}, {collection: "characterSheet"});

export const CharacterSheet = model<ICharacterSheet>('CharacterSheet', characterSheetSchema);