import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { ICharacterSheetDTO } from "../models/characterSheet/ICharacterSheetDTO";

export function MapToDTO(characterSheet: ICharacterSheet): ICharacterSheetDTO {
    return {
        ...characterSheet,
        qualityData: Array.from(characterSheet.qualityData),
        abilityData: Array.from(characterSheet.abilityData),
        itemData: Array.from(characterSheet.itemData),
        tableData: Array.from(characterSheet.tableData),
        classSkills: Array.from(characterSheet.classSkills)
    }
}

export function MapFromDTO(dto: ICharacterSheetDTO): ICharacterSheet {
    return {
        ...dto,
        qualityData: new Map(dto.qualityData),
        abilityData: new Map(dto.abilityData),
        itemData: new Map(dto.itemData),
        tableData: new Map(dto.tableData),
        classSkills: new Set(dto.classSkills)
    }
}