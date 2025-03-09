import { AbilityData } from "../models/AbilityData";
import { ISheetData } from "../models/ISheetData";
import { QualityData } from "../models/QualityData";
import { TableData } from "../models/TableData";

export const groupData = (sheetData: ISheetData, groupName: string): [AbilityData[], QualityData[], TableData[]] => {
  const abilities: AbilityData[] = [];
  sheetData.abilityData.forEach((a) => {
    if (a.group === groupName) {
      abilities.push(a);
    }
  });

  const qualities: QualityData[] = [];
  sheetData.qualityData.forEach((q) => {
    if (q.group === groupName) {
      qualities.push(q);
    }
  });

  const tables: TableData[] = [];
  sheetData.tableData.forEach((t) => {
    if (t.group === groupName) {
      tables.push(t);
    }
  });

  abilities.sort((a, b) => a.sortOrder === b.sortOrder ? a.name.localeCompare(b.name) : a.sortOrder - b.sortOrder);
  qualities.sort((a, b) => a.sortOrder === b.sortOrder ? a.name.localeCompare(b.name) : a.sortOrder - b.sortOrder);
  tables.sort((a, b) => a.sortOrder === b.sortOrder ? a.name.localeCompare(b.name) : a.sortOrder - b.sortOrder);
  
  return [abilities, qualities, tables];
}