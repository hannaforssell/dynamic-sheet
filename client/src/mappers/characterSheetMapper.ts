import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { ICharacterSheetDTO } from "../models/characterSheet/ICharacterSheetDTO";

// export function convertMaps(obj: Object): Object {
//     let overrides: any = {};

//     for (const [key, value] of Object.entries(obj)) {
//         if (value instanceof Map) {
//             overrides[key] = Array.from(value);
//         }
//     }

//     return { ...obj, ...overrides };
// }

export function MapToDTO(characterSheet: ICharacterSheet): ICharacterSheetDTO {
    return {
        ...characterSheet,
        _id: null,
        qualityData: Array.from(characterSheet.qualityData),
        abilityData: Array.from(characterSheet.abilityData),
        itemData: Array.from(characterSheet.itemData),
        tableData: Array.from(characterSheet.tableData),
        classSkills: Array.from(characterSheet.classSkills)
    };
}

export function MapFromDTO(dto: ICharacterSheetDTO): ICharacterSheet {
    return {
        ...dto,
        _id: null,
        qualityData: new Map(dto.qualityData),
        abilityData: new Map(dto.abilityData),
        itemData: new Map(dto.itemData),
        tableData: new Map(dto.tableData),
        classSkills: new Set(dto.classSkills)
    };
}
