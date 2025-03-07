import * as mongoDB from "mongodb";

export const collections: { characterSheets?: mongoDB.Collection } = {}

export async function connectToDatabase() {
    console.log("start")

    const connString = import.meta.env.VITE_REACT_APP_DB_CONN_STRING;
    const dbName = import.meta.env.VITE_REACT_APP_DB_NAME;
    const characterSheetCollectionName = import.meta.env.VITE_REACT_APP_CHARACTERSHEETS_COLLECTION_NAME;

    if (!connString || !characterSheetCollectionName || !dbName) {
        console.log("connString", connString)
        console.log("characterSheetCollectionName", characterSheetCollectionName)
        console.log("dbName", dbName)
        throw new Error("Unable to read .env file.")
    }

    console.log("test1")
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connString);

    // console.log("test2")
    // await client.connect();

    // const db: mongoDB.Db = client.db(dbName);

    // const characterSheetCollection: mongoDB.Collection = db.collection(characterSheetCollectionName);

    // collections.characterSheets = characterSheetCollection;

    // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${characterSheetCollection.collectionName}`);
}