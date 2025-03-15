import * as dotenv from "dotenv";
import { Schema, model, connect } from "mongoose";
import { CharacterSheet, characterSheetSchema } from "../models/ISheetData";


export async function run() {
    console.log("Running")
    dotenv.config();

    const connString = process.env.VITE_REACT_APP_DB_CONN_STRING;
    const dbName = process.env.VITE_REACT_APP_DB_NAME;
    const characterSheetCollectionName = process.env.VITE_REACT_APP_CHARACTERSHEETS_COLLECTION_NAME;

    if (!connString || !characterSheetCollectionName || !dbName) {
        throw new Error("Unable to read .env file.")
    }

    await connect(connString);
}

export async function getCharacterSheet(id: string) {
    return CharacterSheet.findById(id);
}

export async function upsertCharacterSheet(body: string) {
    const cs = new CharacterSheet(body);

    if(cs._id) {
        await CharacterSheet.findOneAndUpdate({"_id": cs.id}, cs, {upsert: true});
        return {body: {"_id": cs._id}, status: 200}
    }

    const ret = await cs.save();
    return {body: {"_id": ret._id}, status: 201}
}